#!/bin/sh

# page_replication.sh
# adapted from @livewise's
# https://github.com/gohugoio/hugo/issues/5612#issuecomment-585457647
#
# This script exists because Hugo Multilingual does not fallback to a content page
# in the default language if a translation for it doesn't exist. It can do that
# or strings with the i18n function, for list pages with lang.Merge
# (https://gohugo.io/functions/lang.merge/), but not with content pages. For example,
# if about.md exists and about.de.md doesn't, accessing /de/about will leard to
# a 404 error instead of showing the same content as /about. The solution this
# script provides is to duplicate each markdown page for each missing translation
# in the available languages. Our specific use case includes things like blog
# posts or any other page we don't necessarily want to make available in all
# three languages supported in the All4Ling website and projects.

if [ -f remove.sh ]; then
  echo "remove.sh exists, exiting."
  exit
else
  echo -e "#!/bin/sh\n" >remove.sh
  chmod +x remove.sh
fi

REMOVE="$PWD/remove.sh"
for dirpath in content; do
echo In $dirpath:
pushd $dirpath >/dev/null
for file in *.*; do

  # skip if not an actual file
  if [ ! -f $file -a ! -L $file ]; then continue; fi

  # skip existing .nl translations
  echo -n $file | grep -ve '.nl.md$' -ve '.nl.html$' >/dev/null
  if [ $? != 0 ]; then continue; fi

  file=`basename $file`

  # get file path without (last) suffix (.md, .html, etcetera)
  # sed replaces period followed by non-periods with nothing
  base=`echo $file | sed 's/\.[^.]*$//'`
  # get suffix, only the part after last period
  suffix=`echo $file | sed 's/.*\.\([^.]*$\)/\1/'`

  # assemble translated file path
  #languages=['de', 'in']
  translation=${base}.de.${suffix}
  # check if translated file already exists
  if [ ! -f $translation ]; then
    echo "created $dirname/$translation soft-link"
    ln -s $file $translation
    echo "if [ -L \"$dirpath/$translation\" ]; then" >>$REMOVE
    echo "  rm -v -- \"$dirpath/$translation\"" >>${REMOVE}
    echo "fi" >>${REMOVE}
  else
    if [ -L $translation ]; then
      dest=`readlink -f $translation`
      target=`basename $dest`
      if [ x$target == x$file ]; then
        echo "$translation already is a soft-link to default, skipping"
        echo "if [ -L \"$dirpath/$translation\" ]; then" >>$REMOVE
        echo "  rm -v -- \"$dirpath/$translation\"" >>${REMOVE}
        echo "fi" >>${REMOVE}
      else
        echo "$translation already is a soft-link to $dest, skipping"
      fi
    fi
  fi
done
popd >/dev/null
done

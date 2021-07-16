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
# script provides is to create symlinks of the markdown file in the default language
# for each missing translation in the available languages before publishing.
# Our specific use case includes things like blog posts or any other page we
# don't necessarily want to make available in all three languages supported in
# the All4Ling website and projects, or for gruadual translation work in progress.

REMOVE="$PWD/remove_replication.sh"
# reset remove file
resetRemoveFile(){
  if [ -f remove_replication.sh ]; then
    rm remove_replication.sh
  fi
  echo "#!/bin/sh\n" >remove_replication.sh
  chmod +x remove_replication.sh
}

replicateInDir(){
  local dir="$1"

  for file in $dir/*; do
    # recurse if "file" is subdirectory and not an actual file
    if [ ! -f $file -a ! -L $file ]; then
      replicateInDir "$file"
      continue
    fi

    # skip existing translations
    echo -n $file | grep -ve '.it.md$' -ve '.it.html$' -ve '.de.md$' -ve '.de.html$' >/dev/null
    if [ $? != 0 ]; then continue; fi
    # skip other files
    echo -n $file | grep -e '.md$' -e '.html$' >/dev/null
    if [ $? != 0 ]; then continue; fi

    file=`basename $file`

    createLinks $dir $file "de"
    createLinks $dir $file "it"
  done
}


createLinks(){
  local dir="$1"
  local file="$2"
  local lang="$3"

  # get file path without (last) suffix (.md, .html, etcetera)
  # sed replaces period followed by non-periods with nothing
  base=`echo $file | sed 's/\.[^.]*$//'`
  # get suffix, only the part after last period
  suffix=`echo $file | sed 's/.*\.\([^.]*$\)/\1/'`

  # assemble translated file path
  translation=${dir}/${base}.${lang}.${suffix}

  # check if there isnt a translation already
  if [ ! -f $translation ]; then
    # translated file doesnt exist, replicate from default language with soft-link
    echo "created $translation soft-link"
    ln -s $file $translation
    echo "if [ -L \"$translation\" ]; then" >>$REMOVE
    echo "  rm -v -- \"$translation\"" >>${REMOVE}
    echo "fi" >>${REMOVE}
  elif [ -L $translation ]; then
    # translated file already exists and is a soft link
    # add to remove file
    dest=`readlink -f $translation`
    target=`basename $dest`
      echo "$translation already is a soft-link, skipping"
      echo "if [ -L \"$translation\" ]; then" >>$REMOVE
      echo "  rm -v -- \"$translation\"" >>${REMOVE}
      echo "fi" >>${REMOVE}
  fi
}

resetRemoveFile
replicateInDir "content"

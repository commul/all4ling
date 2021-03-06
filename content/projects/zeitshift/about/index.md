---
title: "About"
aliases:
  - /zeitshift/about/

description: ""
lead: ""
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  projects:
    parent: "zeitshift"
weight: 9
toc: true
---

## Zeit.shift

**Zeit.shift** is a cooperation between the [Dr. Friedrich Teßmann Library](https://www.tessmann.it/en/home.html) (Bolzano, Italy), the [Universitäts- und Landesbibliothek Tirol](https://www.uibk.ac.at/ulb/) (Innsbruck, Austria) and [Eurac Research](https://www.eurac.edu/) (Bolzano, Italy) funded by the [European Regional Development Fund and Interreg V-A Italia - Austria 2014-2020](https://www.interreg.net/en/default.asp), which seeks to preserve, develop and communicate the cultural and textual heritage of the historical region of Tyrol.

The project focuses on **historical newspapers written in German** and mostly [Fraktur script](https://web.library.yale.edu/cataloging/music/fraktur), which are currently scattered across Tyrol and are only partially digitised. **The goal of the project is twofold**:
1. digitise some 500,000 pages of Tyrolean papers published between 1850 and 1950 and gather them in a single, freely accessible web platform;
2. promote participatory culture research by inviting citizens to actively curate, explore and engage with the data to accelerate research and create new knowledge.

<!--The involvement of citizens responds to the principles of the [European Citizen Science Association](https://ecsa.citizen-science.net/), which identify high-quality citizen science projects ([Robinson et al. 2018, p. 29](https://discovery.dundee.ac.uk/ws/files/29458369/Citizen_Science_min.pdf)).-->

Given the large number of newspapers (approx. 500,000 pages), **the more people help curate the data** and spread the word about Zeit.shift, **the more searchable the newspaper corpus becomes and the longer the historical memory of Tyrol will be preserved**.


## Digitisation

Zeit.shift is digitally scanning the newspapers and running the scans through Optical Character Recognition (OCR). OCR is the automatic conversion of printed text (e.g. an image of a newspaper page) into digital format (e.g. a Word document). This process often introduces errors in the digital text, especially when dealing with historical sources: issues such as faded ink, complex fonts or poor quality scans affect the recognition capabilities of the OCR machine. A digital text containing OCR mistakes is known as “noisy” text. The noisier the text, the harder it is to use and search.

{{< youtube pd1gJoz2lYU "A brief introduction to Optical Character Recognition." >}}

<br />
Here is an example of a "noisy" digital text in Zeit.shift:<br />

{{< figure src="exampleOCR_img.webp" size="640x" alt="Example scan" caption="Tiroler Land-Zeitung, 21st December 1918, p. 8: **Digital scan**." attr="This image is licensed under CC BY 3.0" attrlink="https://creativecommons.org/licenses/by/3.0/" >}}


{{< figure src="exampleOCR_transcr.webp" size="640x" alt="Example dirty OCR" caption="Tiroler Land-Zeitung, 21st December 1918, p. 8: **Noisy OCR** (mistakes in red)." attr="This image is licensed under CC BY 3.0" attrlink="https://creativecommons.org/licenses/by/3.0/" >}}


### The newspapers

#### To be digitised
The Tyrolean newspapers we are digitising are held at the Friedrich Teßmann and Innsbruck University libraries. Here is the complete list (titles shortened): Innsbrucker Zeitung, Alpenland, Alpenländer Bote, Der Arbeiter, Volksruf, Gardasee-Post, Neueste Zeitung, Neueste Morgenzeitung, Innsbrucker Neueste, Innsbrucker illustrierte neueste Nachrichten, Abendblatt, Innsbrucker Abendblatt, Der Oberländer, Der Südtiroler, Tiroler Bauernzeitung, Tiroler Landbote, Der Landbote, Tiroler Grenzbote, Tiroler Volksblatt, Tiroler Land-Zeitung, Tiroler Gemeindeblatt, Alpenrosen, Oberinntaler Wochenblatt, Neue Inn-Zeitung, Tiroler Post, Die Post, Tiroler Sonntagsbote, Der Tiroler Wastl, Der Widerhall, Tiroler-Vorarlberger Bienen-Zeitung, Tiroler Bienen-Zeitung, Alpenländische Bienenzeitung, Unterinntaler Bote, Haller Wochenblatt, Sterne und Blumen, Volkszeitung Innsbruck, Deutsche Volkszeitung.


#### Available in Historypin

##### Online

- Unterinntaler Bote, 1900 (110 adverts)
- Schwazer Lokalanzeiger Kreisblatt, 1928 (203 adverts)
- Meraner Zeitung, 1920 (1897 adverts)
- Tiroler Grenzbote, 1923 (1602 adverts)
- Tiroler-Vorarlberger Bienen-Zeitung, 1924-1925 (54 adverts)
- Lienzer Zeitung, 1919 (104 adverts)
- Pustertaler Bote, 1924 (409 adverts)
- Bozner Nachrichten, January-April 1921 (2109 adverts)

##### Upcoming


- Unterinntaler Bote, 1910
- Reuttener Nachrichten, 1931
- Der Oberländer, 1909
- Haller Lokalanzeiger, 1934
- Brixner Chronik, 1918


### Technical overview

OCR was performed using Abbyy FineReader Engine v.11. The digitised material (TIFF image scans and ALTO XML files) amounts to some 15TB of data.

## Citizen science
Zeit.shift falls under the [crowdsourcing and distributed intelligence](https://www.youtube.com/watch?v=FLEON7AFgOk) typology of citizen science projects ([Haklay, 2013](https://link.springer.com/chapter/10.1007%2F978-94-007-4587-2_7)). As such, it relies on the cognitive and observation abilities of the participants to crowdsource research data.

**Historypin**
- Task type: macrotask
- Purpose: geo- and semantic tagging of adverts, collect additional expert knowledge from the public, foster [remix culture](https://en.wikipedia.org/wiki/Remix_culture)

**Ötzi game**
- Task type: microtask
- Purpose: correct the OCR of individual words

### Dataset

The citizen science component of the project focuses on newspaper issues published approximately 100 years ago (1918-1924).


<!--## Natural Language Processing-->

## Project details

### Team
- Landesbibliothek Dr. Friedrich Teßmann (Lead partner): Johannes Andresen
- Universitäts- und Landesbibliothek Tirol: Silvia Gstrein, Maritta Horwath, Christian Kössler, Barbara Laner, Johanna Walcher
- Eurac Research: Andrea Abel, Paolo Brasolin, Greta Franzini, Verena Lyding, Egon Stemle, Anna Tramarin (intern), Giovanni Moretti (external advisor)

<div class="row">
  <div class="col-sm">
  {{< figure src="/images/LBT_transparent.png" alt="Teßmann logo" size="x80" >}}
  </div>
  <div class="col-sm">
  {{< figure src="/images/innsbruck_logo.png" alt="Uni Innsbruck logo" size="x70" >}}
  </div>
  <div class="col-sm">
  {{< figure src="/images/eurac_logo.png" alt="Eurac Research logo" size="x55" >}}
  </div>
</div>

### Associated partners
- Euregio Tirol-Südtirol-Trentino
- Abteilung Tiroler Landesarchiv der Tiroler Landesregierung
- Tiroler Landesmuseen
- Südtiroler Kulturinstitut
- Tiroler Bildungsforum
- Südtiroler Landesarchiv der Autonomen Provinz Bozen-Südtirol
- Bibliotheksverband Südtirol

<!--**Collaborators**

- Naturmuseum Südtirol-->

### Duration
- October 2020 - October 2022

### Budget
- 658,000 Euros<br />
  {{< figure src="/images/interreg_logo.png" link="https://interreg.eu/programme/interreg-italy-austria/" alt="Inerreg logo" size="x55" style="margin-top: 0;" >}}

### Objectives

1. Digitisation of Tyrolean historical newspapers
2. Development and implementation of a citizen science initiative to curate and enrich the digitised newspapers
3. Computational linguistic processing of the digitised newspapers to improve data search and visualisation options
4. Digital access to the complete collection of newspapers via a web platform to support research and education

### Keywords

[citizen science](https://en.wikipedia.org/wiki/Citizen_science), [games with a purpose](https://en.wikipedia.org/wiki/Human-based_computation_game), digitisation, historical newspapers, tyrol, [natural language processing](https://en.wikipedia.org/wiki/Natural_language_processing), [heritage science](https://en.wikipedia.org/wiki/Heritage_science), [digital cultural heritage](https://en.wikipedia.org/wiki/Digital_heritage), cultural heritage volunteering, cultural heritage crowdsourcing, [digital humanities](https://en.wikipedia.org/wiki/Digital_humanities), [public history](https://en.wikipedia.org/wiki/Public_history), public digital humanities

### Licensing

- <div xmlns:cc="http://creativecommons.org/ns#" >Full newspaper scans from the Teßmann Digital Library are licensed under <a href="http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC 4.0<img style="height:1.125rem;margin-left:3px;vertical-align:baseline;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:1.125rem;margin-left:3px;vertical-align:baseline;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:1.125rem;margin-left:3px;vertical-align:baseline;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"></a></div>
- <div xmlns:cc="http://creativecommons.org/ns#" >Full newspaper scans from the UniInnsbruck Digital Library are licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY 4.0<img style="height:1.125rem;margin-left:3px;vertical-align:baseline;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:1.125rem;margin-left:3px;vertical-align:baseline;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></div>
- <div xmlns:cc="http://creativecommons.org/ns#" >Website and activity images are licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY 3.0<img style="height:1.125rem;margin-left:3px;vertical-align:baseline;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:1.125rem;margin-left:3px;vertical-align:baseline;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></div>
- <div xmlns:cc="http://creativecommons.org/ns#" >Data and annotations contributed by citizens are licensed under <a href="http://creativecommons.org/publicdomain/zero/1.0?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC0 1.0<img style="height:1.125rem;margin-left:3px;vertical-align:baseline;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:1.125rem;margin-left:3px;vertical-align:baseline;" src="https://mirrors.creativecommons.org/presskit/icons/zero.svg?ref=chooser-v1"></a></div>

### Credits

Zeit.shift sources icons from [Icongeek26](https://www.flaticon.com/authors/icongeek26) and [Freepik](https://www.flaticon.com/authors/freepik) at [Flaticon](https://www.flaticon.com), and audio files from [Freesound](https://freesound.org/people/Yap_Audio_Production/sounds/218463/).

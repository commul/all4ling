---
title: "Zeit.shift"
description: "Digital in yesterday's future: Preservation, development and communication of the cultural and textual heritage of the whole of Tyrol"
lead: "Digital in yesterday's future: Preservation, development and communication of the cultural and textual heritage of the whole of Tyrol."
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "Projects"
weight: 10
toc: true
title_font: "grenze"
---

<!--{{< alert icon="💡" text="The contents of this page are in `./content/[LANGUAGE]/about/projects/zeitshift.md`." >}}-->

{{<figure src="/images/zs_banner.png" alt="" caption="CC-BY-..." width="100%" class="border-0">}}

### Summary

**Zeit.shift** is a cross-border cooperation between the [Dr. Friedrich Teßmann Library](https://www.tessmann.it/en/home.html) (Bolzano, Italy), the [Universitäts- und Landesbibliothek Tirol](https://www.uibk.ac.at/ulb/) (Innsbruck, Austria) and [Eurac Research](https://www.eurac.edu/) (Bolzano, Italy), which **seeks to preserve, develop and communicate the cultural and textual heritage of the historical region of Tyrol**.

The project focuses on **historical newspapers written in German and mostly [Fraktur script](https://web.library.yale.edu/cataloging/music/fraktur)**, which are currently scattered across Tyrol and are only partially digitised. It will digitise some 500,000 pages of Tyrolean papers published between 1850 and 1950 and gather these in a single, freely accessible web platform, **inviting citizens to curate, explore and engage with the data through activities, games and learning materials**.

**The mutual collaboration between researchers, librarians and citizens** will help improve the functionality of the web platform for users worldwide and serve as an **opportunity for local and foreign communities to learn more about** the historical and cultural heritage of **Tyrol**.

The active participation of citizens is crucial to the success of the project. Given the large number of newspapers (approx. 500,000 pages), **the more people help curate the data and spread the word** about Zeit.shift, **the more searchable the newspaper corpus becomes and the longer the historical memory of Tyrol will be preserved**.

### Newspapers

The Tyrolean newspapers we are digitising are following (titles shortened): Innsbrucker Zeitung, Alpenland, Alpenländer Bote, Der Arbeiter, Volksruf, Gardasee-Post, Neueste Zeitung, Neueste Morgenzeitung, Innsbrucker Neueste, Innsbrucker illustrierte neueste Nachrichten, Abendblatt, Innsbrucker Abendblatt, Der Oberländer, Der Südtiroler, Tiroler Bauernzeitung, Tiroler Landbote, Der Landbote, Tiroler Grenzbote, Tiroler Volksblatt, Tiroler Land-Zeitung, Tiroler Gemeindeblatt, Alpenrosen, Oberinntaler Wochenblatt, Neue Inn-Zeitung, Tiroler Post, Die Post, Tiroler Sonntagsbote, Der Tiroler Wastl, Der Widerhall, Tiroler-Vorarlberger Bienen-Zeitung, Tiroler Bienen-Zeitung, Alpenländische Bienenzeitung, Unterinntaler Bote, Haller Wochenblatt, Sterne und Blumen, Volkszeitung Innsbruck, Deutsche Volkszeitung.

### Digitisation

Zeit.shift is digitally scanning the newspapers and running the scans through Optical Character Recognition (OCR). OCR is the automatic conversion of printed text (e.g. an image of a newspaper page!) into digital format (e.g. a Word document). This process often introduces errors in the digital text, especially when dealing with historical sources: issues such as faded ink, complex fonts or poor quality scans affect the recognition capabilities of the OCR machine. A digital text containing OCR mistakes is known as "noisy" text. The noisier the text, the harder it is to use and search.

Here is an example of a "noisy" conversion of a digitised newspaper in Zeit.shift:

{{<figure src="/images/exampleOCR_img.png" alt="Example scan" caption="<em>Tiroler Land-Zeitung, 21st December 1918, page 8: <strong>Digital scan</strong>.</em>" width="100%" class="border-0">}}

{{<figure src="/images/exampleOCR_transcr.png" alt="Example dirty OCR" caption="<em>Tiroler Land-Zeitung, 21st December 1918, page 8: <strong>Noisy OCR</strong> (mistakes in red)</em>." width="100%" class="border-0">}}


### Citizen Science

Zeit.shift invites citizens to actively participate in data curation. The citizen science component of the project focuses on newspaper issues published approximately 100 years ago (1918-1924).
**Anyone can contribute to Zeit.shift, provided they have some knowledge of German and Fraktur script.**


#### How can I contribute?

We need your help with two tasks:

1. Correct OCR mistakes (sufficient knowledge of German and Fraktur required)
2. Geotag newspaper content (basic knowledge of German and Fraktur required)
<!--3. Tag and classify words (names of people and places, parts-of-speech, etc.)-->

To make these tasks more engaging, we're developing **games and activities** designed to help you explore this wonderful body of textual heritage as you contribute data! So far, we've developed one game and one activity.

No sign-up or registration required!


#### Game: OCR correction

This custom game adapts [Typespeed](http://typespeed.sourceforge.net/). The game comes with different scenarios. In the "Who Killed Ötzi?" scenario shown below, arrows carrying words in Fraktur script fly from the left to the right of the screen in the direction of [Ötzi the Iceman](https://www.iceman.it/en/the-iceman/). These words are people names extracted from the Tyrolean newspapers. The goal of the game is simple: players must type the names as fast as possible before they reach and kill Ötzi! The more words are typed the longer Ötzi lives and the more points the player collects. When Ötzi dies, players are shown the original newspaper article from which the killing name (the killer!) was taken, allowing them to explore its context.

{{<figure src="/images/wko.png" alt="Game preview" caption="<em>'Who killed Ötzi?' game preview.</em>" width="100%" class="border-0">}}

##### Instructions



#### Activity: Mapping advertisements

In this activity, citizens geotag and, optionally, transcribe historical advertisements published in the newspapers in order to reconstruct the commercial landscape of early 20th century Tyrol. Many shops from those times still exist today!

This activity makes use of an existing third-party platform, [Historypin](https://www.historypin.org/en/). To work on this task, you will have to create a free account with Historypin.

{{<figure src="/images/historypin.png" alt="Historypin" caption="<em>Zeit.shift advertisements in Historypin.</em>" width="100%" class="border-0">}}



<!--#### More to come...

New activities and games will be announced through the All4Ling blog. Ideas and suggestions are always most welcome!-->

<!--
For testing purposes, these games and activities are developed on a small selection of the entire project dataset, .

|Year  | Newspaper | N. pages |
|------|-----------|---------:|
| 1918 | Tiroler Land-Zeitung |   408 |
| 1919 | Der Arbeiter         |  252|
| 1920 | Volkszeitung/Deutsche Volkszeitung    | 2692|
| 1921 | Tiroler Wastl        |  364|
| 1922 | Tiroler Wastl        |  156|
| 1923 | Tiroler Grenzbote    |  488|
| 1924 | Der Südtiroler       |   96|
|      |                      |**Total pages**: 4456|


As the project progresses, our games and activities will be loaded with more content.-->


##### Instructions

To work on the Historypin activity, please follow these instructions:

1. Open your browser and navigate to [Historypin](https://www.historypin.org/)
2. In the top-right corner of the site, click on "Join" to create a free Historypin account
3. Once you are logged in, navigate to the [Zeit.shift page on Historypin](https://www.historypin.org/en/zeit-shift/)
4. Download and read our guidelines [DOWNLOADABLE DOC OR VIDEO] to learn how to contribute
5. Start contributing!

For questions, problems or feedback, please write to us at all4ling[AT]eurac.edu. If you wish to share your work via social media, please consider using the #zeitshift hashtag to help us spread the word about the project!

### Natural Language Processing

Data collected from citizens will help us annotate the entire newspaper corpus for linguistic traits, and train algorithms to better recognise Fraktur script and to classify types of words or expressions automatically (place names, person names, temporal expressions, etc.).

<!--### Progress

- 500,000 pages digitised
- X tokens (words) digitised
- X corrected tokens
- X contributed annotations
- X unique participants-->


### Links and resources

- Fraktur script
- [Citizen science portal](https://www.citizen-science.at/en/projects/how-to-list-a-project)
- [Citizen science portal](https://www.buergerschaffenwissen.de/)


<!--### Output

#### Publications

...

#### Presentations

...-->

### Project details

**Team**
- Landesbibliothek Dr. Friedrich Teßmann (Lead partner): Johannes Andresen
- Universitäts- und Landesbibliothek Tirol: Silvia Gstrein, Christian Kössler, Barbara Laner, Johanna Walcher
- Eurac Research: Andrea Abel, Etiene Dalcol, Greta Franzini, Verena Lyding, Egon Stemle

**Associated partners**
- Euregio Tirol-Südtirol-Trentino
- Abteilung Tiroler Landesarchiv der Tiroler Landesregierung
- Tiroler Landesmuseen
- Südtiroler Kulturinstitut
- Tiroler Bildungsforum
- Südtiroler Landesarchiv der Autonomen Provinz Bozen-Südtirol
- Bibliotheksverband Südtirol

<!--**Collaborators**

- Naturmuseum Südtirol-->

**Duration**

October 2020 - October 2022

**Budget**

658,000 Euros

[<img src="/images/interreg_logo.jpg" alt="Logo" width="40%" class="border-0">](https://interreg.eu/programme/interreg-italy-austria/)

**Objectives**

1. Digitisation of Tyrolean historical newspapers
2. Development and implementation of a citizen science initiative to curate and enrich the digitised newspapers
3. Computational linguistic processing of the digitised newspapers to improve data search and visualisation options
4. Digital access to the complete collection of newspapers via a web platform to support research and education

**Keywords**

citizen science, games with a purpose, digitisation, historical newspapers, tyrol, natural language processing, heritage science, digital cultural heritage

**Licensing**

Newspaper scans and ALTO XML files are published under open licences. Data and annotations contributed by citizens are made available under a Creative Commons licence.

**Credits**

Zeit.shift sources icons from [Icongeek26](https://www.flaticon.com/authors/icongeek26) and [Freepik](https://www.flaticon.com/authors/freepik) at [Flaticon](www.flaticon.com), and audio files from [Freesound](https://freesound.org/people/Yap_Audio_Production/sounds/218463/).


<img src="/images/tessmann_logo.png" width="20%" alt="Teßmann logo">
<img src="/images/innsbruck_logo.png" width="20%" alt="Innsbruck logo">
<img src="/images/eurac_logo.png" width="20%" alt="Eurac logo">



<!--{{< tweet 877500564405444608 >}}-->

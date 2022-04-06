---
title: "Über"
aliases:
  - /zeitshift/ueber/
  - /zeitshift/über/
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

**Zeit.shift** ist ein Kooperationsprojekt zwischen der Landesbibliothek [Dr. Friedrich Teßmann](https://www.tessmann.it/en/home.html) (Bozen, Italien), der [Universitäts- und Landesbibliothek Tirol](https://www.uibk.ac.at/ulb/) (Innsbruck, Österreich) und von [Eurac Research](https://www.eurac.edu/) (Bolzano, Italy) funded by the [European Regional Development Fund and Interreg V-A Italia - Austria 2014-2020](https://www.interreg.net/en/default.asp), welches sich die Bewahrung, Erschließung und Vermittlung des kulturellen Texterbes der historischen Region Gesamttirols zum Ziel setzt. Das Projekt wird vom European Regional Development Fund and Interreg V-A Italia - Austria 2014-2020 gefördert.

Das Projekt konzentriert sich auf **deutschsprachige historische Zeitungen**, großteils in [Frakturschrift](https://web.library.yale.edu/cataloging/music/fraktur), die derzeit über Tirol verteilt und nur zum Teil in digitalisierter Form vorliegen. **Das Projekt verfolgt zwei Hauptziele**:
1. die Digitalisierung von rund 500.000 Seiten historischer Zeitungen aus den Jahren 1850 bis 1950 und deren Bereitstellung über ein einziges frei zugängliches Webportal;
2. Einbindung der Bevölkerung über Citizen Science Initiativen, die die BürgerInnen einladen, aktiv an der Kuratierung, Bearbeitung und Beobachtung des historischen Textmaterials mitzuwirken, um damit den Forschungsprozess zu beschleunigen und neues Wissen zu generieren.


In Anbetracht der großen Anzahl an Zeitungen (circa 500.000 Seiten), ist die Mithilfe der Bevölkerung ausschlaggebend: **Je mehr Teilnehmende helfen die Daten zu kuratieren** und Zeit.shift bekannt zu machen, **umso besser wird die bearbeitete Zeitungssammlung durchsuchbar sein und umso mehr wird zur Erhaltung des historischen Gedächtnisses Gesamttirols beigetragen**.


## Digitalisierung

In Zeit.shift werden die Zeitungen gescannt und mithilfe optischer Zeichenerkennung (Optical Character Recognition - OCR) verarbeitet. OCR erlaubt es gedruckte Texte (z.B. ein Bild einer Zeitungsseite) auszulesen und als digitale Dokumente (z.B. ein Worddokument) abzuspeichern. Im Zuge des Ausleseprozesses entstehen häufig Fehler in den digitalen Texten. Dies passiert insbesondere beim Auslesen von historischen Textdokumenten, da ausgeblichene Drucke, komplexe Schriftarten oder minderwertige Scans die Erkennungsleistung von OCR-Maschinen beeinträchtigen können. Ein digitaler Text mit OCR-Fehlern wird als „zugelärmter“ Text bezeichnet („noisy text“). Je „zugelärmter“ der Text ist, desto schwieriger ist es ihn weiterzunutzen und darin zu suchen.

{{< youtube pd1gJoz2lYU "Eine kurze Einfïuhrung in OCR." >}}

<br />
Hier ist ein Beispiel eines „zugelärmten“ digitalisierten Texts in Zeit.shift:

{{< figure src="exampleOCR_img.webp" size="640x" alt="Example scan" caption="Tiroler Land-Zeitung, 21.Dezember 1918, p. 8: **Digitaler Scan**." attr="Dieses Bild ist lizensiert unter CC BY 3.0" attrlink="https://creativecommons.org/licenses/by/3.0/" >}}

{{< figure src="exampleOCR_transcr.webp" size="640x" alt="Beispielhafte schlechte OCR" caption="Tiroler Land-Zeitung, 21.Dezember 1918, p. 8: **Schlechte OCR** (Fehler in rot)." attr="Dieses Bild is lizensiert unter CC BY 3.0" attrlink="https://creativecommons.org/licenses/by/3.0/" >}}


### Die Zeitungen

#### Zu digitalisieren
Die Tiroler Zeitungen, die wir digitalisieren, befinden sich in den Beständen der Landesbibliothek Teßmann und der Universitätsbibliothek Innsbruck. Dies ist die vollständige Liste der Zeitungen (Titel gekürzt): Innsbrucker Zeitung, Alpenland, Alpenländer Bote, Der Arbeiter, Volksruf, Gardasee-Post, Neueste Zeitung, Neueste Morgenzeitung, Innsbrucker Neueste, Innsbrucker illustrierte neueste Nachrichten, Abendblatt, Innsbrucker Abendblatt, Der Oberländer, Der Südtiroler, Tiroler Bauernzeitung, Tiroler Landbote, Der Landbote, Tiroler Grenzbote, Tiroler Volksblatt, Tiroler Land-Zeitung, Tiroler Gemeindeblatt, Alpenrosen, Oberinntaler Wochenblatt, Neue Inn-Zeitung, Tiroler Post, Die Post, Tiroler Sonntagsbote, Der Tiroler Wastl, Der Widerhall, Tiroler-Vorarlberger Bienen-Zeitung, Tiroler Bienen-Zeitung, Alpenländische Bienenzeitung, Unterinntaler Bote, Haller Wochenblatt, Sterne und Blumen, Volkszeitung Innsbruck, Deutsche Volkszeitung.


#### Verfügbar in Historypin

##### Online

- Unterinntaler Bote, 1900 (110 Anzeigen)
- Schwazer Lokalanzeiger Kreisblatt, 1928 (203 Anzeigen)
- Meraner Zeitung, 1920 (1897 Anzeigen)
- Tiroler Grenzbote, 1923 (1602 Anzeigen)
- Tiroler-Vorarlberger Bienen-Zeitung, 1924-1925 (54 Anzeigen)
- Lienzer Zeitung, 1919 (104 Anzeigen)
- Pustertaler Bote, 1924 (409 Anzeigen)
- Bozner Nachrichten, Januar-April 1921 (2109 Anzeigen)

##### Demnächst

- Unterinntaler Bote, 1900
- Unterinntaler Bote, 1910
- Reuttener Nachrichten, 1931
- Der Oberlander, 1909
- Haller Gemeindeblatt, 1934
- Brixner Chronik, 1918


### Technische Daten

Die optische Zeichenerkennung (OCR) wurde mit Abbyy FineReader Engine v.11 durchgeführt. Das digitalisierte Material (TIFF Bildscans und ALTO XML Datien) summiert sich auf etwa 15TB an Daten.

## Citizen science
Zeit.shift lässt sich innerhalb der Typologie von Citizen Science Projekten ([Haklay, 2013](https://link.springer.com/chapter/10.1007%2F978-94-007-4587-2_7)) unter [Crowdsourcing und verteilter Intelligenz](https://www.youtube.com/watch?v=FLEON7AFgOk) einordnen. Als solches bedient es sich der kognitiven Fähigkeiten und Beobachtungsfähigkeiten der Teilnehmenden, mit dem Ziel Forschungsdaten gemeinschaftlich zu erarbeiten (zu "crowdsourcen").

**Historypin**
- Aufgabentyp: Macroaufgabe
- Zweck: Ortstagging und semantisches Tagging von Anzeigen, Sammlung von zusätzlichem Expertenwissen von der Bevölkerung, Förderung von [Remix Culture](https://en.wikipedia.org/wiki/Remix_culture)

**Ötzi game**
- Aufgabentyp: Microaufgabe
- Zweck: Korrektur von OCR für einzelne Wörter

### Datensatz

Die Citizen Science Komponente des Projekts konzentriert sich auf Zeitungsausgaben die vor etwa 100 Jahren veröffentlicht wurden (1918-1924).


<!--## Natural Language Processing-->

## Projektdetails

### Team
- Landesbibliothek Dr. Friedrich Teßmann (Projektleitung): Johannes Andresen
- Universitäts- und Landesbibliothek Tirol: Silvia Gstrein, Christian Kössler, Barbara Laner, Johanna Walcher
- Eurac Research: Andrea Abel, Greta Franzini, Verena Lyding, Egon Stemle


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

### Assoziierte Partner
- Euregio Tirol-Südtirol-Trentino
- Abteilung Tiroler Landesarchiv der Tiroler Landesregierung
- Tiroler Landesmuseen
- Südtiroler Kulturinstitut
- Tiroler Bildungsforum
- Südtiroler Landesarchiv der Autonomen Provinz Bozen-Südtirol
- Bibliotheksverband Südtirol

<!--**Collaborators**

- Naturmuseum Südtirol-->

### Projektdauer
- Oktober 2020 - Oktober 2022

### Budget
- 658,000 Euro<br />
  {{< figure src="/images/interreg_logo.png" link="https://interreg.eu/programme/interreg-italy-austria/" alt="Inerreg logo" size="x55" style="margin-top: 0;" >}}

### Ziele

1. Digitialisierung historischer Zeitungen Tirols
2. Entwicklung und Umsetzung von Citizen Science Initiativen zur Kuratierung und Anreicherung der digitalisierten Zeitungen
3. Computerlinguistische Aufbereitung der digitalisierten Zeitungen um Such- und Visualisierungsangebote zu verbessern
4. Digitaler Zugriff auf die gesamte Zeitungssammlung über eine Webplattform mit dem Ziel Forschungs- und Bildungsinitiativen zu unterstützen

### Schlüsselbegriffe

[Citizen Science](https://de.wikipedia.org/wiki/Citizen_Science), [Games with a Purpose](https://de.wikipedia.org/wiki/Game_with_a_purpose), Digitalisierung, historische Zeitungen, Tirol, [linguistische Datenverarbeitung (LDV)](https://de.wikipedia.org/wiki/Computerlinguistik), Heritage Science, Kulturgut, [Digitale Geisteswissenschaften](https://de.wikipedia.org/wiki/Digital_Humanities), Digital Cultural Heritage, Cultural Heritage Volunteering, Cultural Heritage Crowdsourcing, [Public History](https://de.wikipedia.org/wiki/Public_History), Public Digital Humanities

### Lizenzen

 <p xmlns:cc="http://creativecommons.org/ns#" >Vollständige gescannte Zeitungen von der digitalen Bibliothek Teßmanns (Teßmann digital) sind lizensiert unter <a href="http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"></a></p>


 <p xmlns:cc="http://creativecommons.org/ns#" >Vollständige gescannte Zeitungen von der digitalen Bibliothek der Uni Innsbruck sind lizensiert unter <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></p>


<p xmlns:cc="http://creativecommons.org/ns#" >Bilder der Webseite und der Aktivitäten sind lizensiert unter <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY 3.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></p>

 <p xmlns:cc="http://creativecommons.org/ns#" >Daten und Annotationen, die von der teilnehmenden Bevölkerung produziert wurden, sind lizensiert unter <a href="http://creativecommons.org/publicdomain/zero/1.0?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC0 1.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/zero.svg?ref=chooser-v1"></a></p>

### Danksagungen

Zeit.shift nutzt Icons von [Icongeek26](https://www.flaticon.com/authors/icongeek26) und [Freepik](https://www.flaticon.com/authors/freepik) von [Flaticon](www.flaticon.com), sowie Audiodateien von [Freesound](https://freesound.org/people/Yap_Audio_Production/sounds/218463/).

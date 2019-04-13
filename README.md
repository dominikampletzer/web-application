# WebApplication

Es handelt sich um eine einfache Angular-Anwendung, welche im Zuge der Vorlesung Software-Qualitäts-Sicherung an der Hochschule Rosenheim entstand.
Die Anwendung dient als Grundlage um verschiedene UI- bzw E2E-Test-Framworks zu testen/vergleichen.
Sie erfüllt nicht die Ansprüche, welche an eine ernsthafte Web-Anwendung entstehen.
Aus diesem Grund wird auch kein Wert auf Styling/Optik und ernsthafte Funktionalität gelegt!
Statt dessen werden Grundlegende Fälle überprüft wie:

## Testfälle

**Fall 1:**
- Einfache Seitennavigation
- Einfacher Input

**Fall 2:**
- Lazy Loading Navigation (Asynchron)
- Animation
- Dynamisches nachladen von Daten
- Abwarten bis Komponente geladen ist und auf diese Klicken 

**Fall 3:**
- Button drücken
- Dialog öffnen
- Inhalt des Dialogs wird Asynchron geladen
- Innerhalb des Dialogs asynchron Dialog

**Fall 4:**
- Neuen Browser Tab öffnen
- Und im neuen Tab fortfahren
- Und eventuell zurück navigieren in vorherigen Browser Tab


## Installieren und Starten || Get Started

Es wird ein aktuelles NodeJS benötigt!
Mit 'npm install' werden alle benötigten Dependencies installiert.
Der Dev-Server und damit die Anwendung kann mittels 'ng serve' gestartet werden und ist unter `http://localhost:4200/` erreichbar.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).





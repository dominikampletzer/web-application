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

**Fall 5:**
- Datei Upload

**Fall 6:**
- i-frame

## Installieren und Starten || Get Started

Es wird ein aktuelles NodeJS benötigt!
Mit 'npm install' werden alle benötigten Dependencies installiert.
Der Dev-Server und damit die Anwendung kann mittels 'npm run start' gestartet werden und ist unter `http://localhost:4200/` erreichbar.

## Protractor Tests

Wenn der Dev-Server gestartet ist können die Protractor-Tests mittels 'npm run pro_no_ng' direkt über Protractor gestartet werden. Oder mittels 'e2e:no-build'
durch die Angular-CLI

## WebdriverIO Tests

Ebenfalls muss der Dev-Server gestartet sein. Danach kann mittels 'npm run wtest' die Tests ausgeführt werden.




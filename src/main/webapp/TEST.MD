***

# Test con AngularJS e KARMA

## Introduzione
Nell'ultimo decennio si sono affermate sempre più tecnologie per la semplificazione di sistemi distribuiti. Ormai è prassi che un'azienda fornisca insieme ai suoi prodotti anche delle API per poterci accedere ed effettuare operazioni in maniera distribuita, su piattaforme divese e con modalità di comunicazione semplici.
A tal proposito abbiamo visto quella che attualmente è la soluzione più adottata per la predisposizione delle API, ovvero la
[creazione di servizi RESTful](https://lucasalzone.wordpress.com/2017/02/12/restfull-webservice-with-jersey/) che noi abbiamo sviluppato attraverso JAVA con JAX-RS e la [chiamata di servizi RESTful con AngularJS](https://lucasalzone.wordpress.com/2017/03/04/chiamare-servizi-rest-con-angularjs/).
Oggi vediamo come è possibile creare una semplice suite di test per rendere più robusto il nostro client AngularJS, sfruttando KARMA.

## Installazione KARMA
La procedura di installazione di KARMA è molto semplice e prevede l'utilizzo di NodeJS. Per chi non avesse ancora installato NodeJs, vi rimando al post [installazione di NodeJs](....).
Il primo passo da eseguire è quello di creare nel proprio progetto il file package.json definendo le dipendenze necessarie all'esecuzione dei nostri test.

Di seguito quelle necessarie per utilizzare KARMA.
```json
	"dependencies": {
		"jasmine" : "latest",
		"karma": "latest",
		"karma-jasmine": "latest",
		"karma-chrome-launcher" : "latest"
	}
```

Dopo aver creato il file è possibile lanciare direttamente il comando di installazione delle dipendenze del progetto.

```
npm install
```

In questo modo verranno scaricati moduli necessari all'utilizzo di karma.

## Il file config
Per poter utilizzare KARMA è necessario configurare un file che viene utizzato per la configurazione.

```
npm install -g karma
```
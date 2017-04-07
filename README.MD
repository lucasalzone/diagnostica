# Diagnostica sistema.
Il nostro sistema prevede componenti Hardware e Software fortemente integrati.
Nostro scopo è quello di rendere sicura la comunicazione e l'aggiornamento di ogni singolo componente.
A tal proposito è previsto un sistema di diagnostica che permette di controllare che tutto quanto funzioni correttamente
e segnalare eventuali _malfunzionamenti_ o problemi di comunicazione.

## Il Cruscotto
Per poter accedere facilmente a tutte le informazioni di diagnostica, abbiamo creato un cruscotto fruibile da diversi canali mobile / web / hardware.
Tale cruscotto presenta le seguenti informazioni:
- Quandro generale di sistema
- Dettaglio sistemi di comunicazione
- Dettaglio componenti IoT

### Quadro generale di sistema
In questa sezione è possibile avere l'evidenza del funzionamento del sistema nel suo complesso.
E' possibile visualizzare principalmente quattro indicatori:
- Sistema di alimentazione
- Connettività con i sistemi di comunicazione (Centralina / Sistema distribuiti)
- Connettività con il firmware dei singoli componenti Hardware

### Dettaglio sistemi comunicazione
Quest'area si occupa di monitorare il corretto colloquio tra la centralina e i sistemi distribuiti registrati.
Si potrà inoltre verificare i log con tutti i messaggi di diagnostica scambiati tra i singoli componenti.

Inoltre da questa sezione sarà possibile interrogare direttamente un sistema per verificare l'effettivo funzionamento.

### Dettaglio componenti IoT
In quest'are sarà possibile verificare il corretto colloquio tra la centralina ed i singoli componenti Hardware IoT.
Si potrà consultare il log con tutti i messaggi di diagnostica scambiati oppure inviare un'interrogazione puntuale su un singolo componente.

### Struttura dati del messaggio di diagnostica
I messaggi di diagnostica conterranno principalmente le seguenti informazioni:
* id componente origine messaggio
* timestamp messaggio
* timestamp ricezione
* tipo messaggio (low-level / software)
* payload

Ci possono essere due tipi di messaggio, per individuare velocemente l'eventuale problema occorso:
- low-leve: ping su indirizzo di destinazione
- software: interrogazione api con payload

Ogni messaggio di tipo software deve contenere un payload json, che verrà potrà essere interpretato a secondo del componente.

### Gestione messaggi
I messaggi di diagnostica, saranno spediti tra sistemi con cadeze predefinite attraverso una configurazione che potrà essere diversa tra ogni singolo componente.
I tipi di colloqui previsti sono i seguenti:
* from CENTRALINA to COMPONENT (low-level)
* from CENTRALINA to COMPONENT (software)
* from COMPONENT to CENTRALINA (low-level)
* from COMPONENT to CENTRALINA (software)
* from SISTEMA DISTRIBUITO to CENTRALINA (low-level)
* from SISTEMA DISTRIBUITO to CENTRALINA (software)
* from CENTRALINA to SISTEMA DISTRIBUITO (low-level)
* from CENTRALINA to SISTEMA DISTRIBUITO (software)

> *Note:* nessun componente potrà parlare direttamente con sistemi esterni. Sarà sempre la centralina ad utilizzare rendere
> disponibili le funzionalità del componente.

### Legenda dei componenti
_COMPONENT_: componente IoT hardware (sensore / attuatore) connesso con la centralina

_CENTRALINA_: sistema di controllo dei vari sensori / attuatori IoT

_SISTEMA DISTRIBUITO_: componente esterno al sistema IoT, che interagisce con esso per esporre i dati rilevati e pilotare eventuali attuatori.

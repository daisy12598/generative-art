## Generative-art - minor CMD Amsterdam

### Het concept:

Voor het vak Generative Art kregen we de opdracht om middels P5 een kunstwerk te maken dat door de computer gegenereerd wordt. Dit kunstwerk moest bij jou passen. Mijn invalshoek: Techno muziek en techno festivals. Op techno festivals wordt er vaak gebruik gemaakt van vette lazers en schermen met (trippy) visuals. Het leek me een passend en tof idee om zo'n trippy artwork te maken voor op die schermen. Mijn eisen voor mijn artwork in week 1:

- Geometrische vormen/lijnen: Ik wil dat de computer lijnen genereerd die geometrische vormen creeren. De lijnen moeten elkaar kruisen. Dit is passend bij 'technovibes' omdat deze fel gekleurde lijnen mij aan de felle lazer beams deden denken
- Donkere achtergrond en felle kleuren (contrast): Dit is erg kenmerkend voor techno. Het is duister en het contrast met de felle kleuren en lazers is groot
- Randomness: De lijnen en de kleuren moeten random gegenereerd worden. Dit vind ik vet omdat zo geen enkel kunstwerk hetzelfde is
- Input: Scrollen of keypress

### Week 2:

Ik moet eerlijk zeggen dat ik in de 2e week niet zo goed wist wat ik moest doen. Ik vind code erg lastig om te maken en ik wist niet waar en hoe ik moest beginnen. Ik zag tijdens de les dat een aantal klasgenootjes, die nog nooit hadden gecodeerd, best snel dingetjes oppakte. Ik heb toen aan hen gevraagd hoe zij bepaalde dingen aanpakken. Ik kreeg toen het advies om veel tutorials te kijken en dingen op te zoeken die bij je project passen.

In de eerste week heb ik dus vooral naar tutorials gekeken. Ik heb daar veel tijd in geinvesteerd, maar merkte dat het niet heel nuttig was. Ik leerde wel veel dingetjes over P5, maar kwam niet verder met mijn eigen project omdat dat niet in de filmpjes werd behandeld (logisch ook natuurlijk).


### Week 3:

In week 3 liep ik heel erg vast: ik keek veel tutorials, maar werd er niet heel veel wijzer op m.b.t. mijn project. Ik kreeg het advies om minder tutorials te kijken en mij meer te focussen op dingen maken. Daarbij moest ik dan wel eerst terug naar de teken tafel om uitschrijven (in detail) wat je art moet gaan doen (zie week 4).

#### Wat heb ik gemaakt? 

Ik heb de bouncing ball tutorial en de rotation tutorial gekeken en de 2 codes met elkaar gecombineerd om zo roterende lijnen te krijgen die, net zoals de bouncing ball, door het canvas heen bewegen. Bouncing ball: https://www.youtube.com/watch?v=xBMptuTM31k, rotation: https://www.youtube.com/watch?v=o9sgjuh-CBM. Door random functie toe te voegen werd er elke keer een ander pad afgelegd op het moment dat ik op de pagina refresh klikte.

#### Feedback Danny:

- Kijken naar een interessante input: Nu is de input refreshen. Er zijn veel meer interessante manieren om input van de gebruiker te krijgen. Denk aan mobile device input.
- Wat moet het artwork doen? Het genereerd nu niets zeggende lijen. Wat gaat er veranderen als de gebruiker input geeft? De kleur? De vorm? etc.
- Voeg muziek toe aan je artwork. Zo krijg creeer je snel een techno sfeer


### Week 4 (meivakantie):

Mijn aangepaste eisen voor mijn artwork:

- Geometrische vormen/lijnen: Ik wil dat de computer lijnen genereerd die geometrische vormen creeren. De lijnen moeten elkaar kruisen. Hierbij moet ik kijken naar een random functie en kijken hoe ik een de lijnen een traject kan laten volgen. Om de lijnen te laten draaien moet ik rotaties toevoegen.
- Donkere achtergrond en felle kleuren (contrast): De achtergrond moet zwart worden en de lijnen moeten per keer een andere kleur krijgen. Dit moet ook random gegenereerd worden zodat geen enkel kunstwerk hetzelfde is.
- Randomness: De lijnen en de kleuren moeten random gegenereerd worden.
- Input: Ik zou graag 2 verschillende input willen maken. Op de computer d.m.v. keypress en op mobile d.m.v. schudden. Mobile input is geen pre, maar leek mij wel vet om te maken! Dan zou de input schudden moeten zijn en moet ik het canvas responsive maken.
- Techno muziek: Elke keer als de gebruiker input levert, moet de muziek veranderen. Ik ga hiervoor 6 muziekjes opnemen. Wanneer het laatste (6e) muziekje is afgespeeld moet het 1e nummer weer afspelen. Zo ontstaat er een soort loop aan de muziek reeks.


### Week 5:

#### Wat heb ik gedaan?

- Onderzoek gedaan naar P5 Sound. Deze werkte eerst niet. Na lang zoeken zag ik dat ik de Library niet had van P5 Sound en dat deze daarom niet werkte. Ik heb toen p5.min.js en p5.sound.min aangemaakt in mijn mapje van code waardoor het wel werkte met een preload.
- Keypressed voor desktop gemaakt waarbij de cordinaten veranderen (generateCoordinates()) en de muziekjes veranderen (changeSong())
- Een poging gedaan tot input maken voor mobile device. Het is me gelukt om d.m.v. height: 100vh en width: 100vw het canvas responsive te maken. Echter kon ik de code voor het schudden niet testen op mijn telefoon. Ik kreeg telkens een foutmelding dat de preview link niet geldig was. 

#### Feedback Danny: 

- Opacity toevoegen aan de lijnen zodat het werk niet te chaotisch wordt. Dit kan d.m.v. een time out
- Kleuren van de lijnen per muziekje aanpassen. Dit kan d.m.v. een if else + counter
- Je kan de code voor het schudden online testen ipv via brackets op je eigen computer

### Laatste loodjes:

- Ik heb nog geprobeerd om de schud code online / in het browser te testen en werkend te maken. Hier kwam ik helaas niet uit. Ik heb in de code voor een responsive design erin gehouden. Dit stukje code was geen 'must' maar had me wel vet geleken om toe te voegen aan mijn artwork.
- Ook de time out vond ik persoonlijk erg ingewikkeld. Ook hier kwam ik helaas niet meer op tijd voor de beoordeling uit :/ Om de lijnen toch een opacity mee te geven heb ik de kleur code aangepast
- Ik heb de snelheid van de lijnen nog iets aangepast om het contrast goed te kunnen zien per kunstwerk (zo zie je per keypress iets meer variatie en verschil)
- Ik vond het een leuk idee om de lijnen voor ieder muziekje een eigen kleur te geven (feedback Danny). Echter had ik randomness als eis in mijn concept staan omdat ik de onvoorspelbaarheid tof vind. Daarom heb ik gekozen om de kleuren random in beeld te laten brengen en per keypress te laten veranderen. Hierdoor is geen enkel artwork hetzelfde. (color = [random(255), random(255), random(255)])

  
  






## website_sale_criteria

Odoo custom module  
Final implementation for Aquilog

### Modification 04/04/2017  

#### Demandes valides
* En entrant sur la page l'accordéon est replié - Done!
* le clic sur un titre d'option déploie son accordéon - Done!
* le survol d'une valeur de variante affiche son échantillon - Done!
* le clic sur une valeur sélectionne cette valeur, referme l'accordéon mais laisse l'affichage de l'échantillon - Done!
* Les échantillons ont pour titre le nom de l'option. - Done!
* Vérifier que le prix est juste (tient compte de toutes les options) - Done!
* Mettre à jour le site - Waiting for confirmation! @see point below

#### Demandes non valides
1 . si 1 seule variante > son échantillon est affiché à l'ouverture de la page > l'option est validée pour la suite

Le template original ne prévoit pas d'afficher un sélecteur de variante de produit si il n'y en a qu'une seule,
ces attributs sont déjà affichés sur la fiche produit en dessous c'est pourquoi la condition du template est > 1 et non > 0.  
De plus le module shopping cart ne prévoit pas non plus l'affichage si une seule variantes est présent,
il faudrait donc le modifier aussi ce qui n'est pas prévu.
A confirmer!

#### Informations
*Voir s'il est possible en interface graphique de tenir compte des tarifs des variantes :*
* Dans l'administration Cliquer sur vente
* Puis Variante d'articles
* Les variantes  d'articles sont créées automatiquement à chaque ajout de variantes
* Il faut donc modifier les prix en fonction des variantes

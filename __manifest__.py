# -*- coding: utf-8 -*-
{
    'name': "Website Sale Criteria",
    'version': "0.1",
    'sequence': 1,
    'author': "franckysolo-productions",
    'website': 'http://www.franckysolo-productions.com',
    'category': "Website",
    'summary': """
Implémentation pour Aquilog""",
    'description': """
Custom criteria for website products
    """,
    'depends': ['website_sale'],
    'data': [
        'views/templates.xml',
        'views/confirm_project.xml',
    ],
    'installable': True,
    'application': False
}

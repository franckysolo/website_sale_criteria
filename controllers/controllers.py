# -*- coding: utf-8 -*-
from odoo import http


class WebsiteSaleCriteria(http.Controller):
    @http.route('/shop/confirm_project', auth='public', website=True)
    def index(self):
        # @TODO process email or other...
        return http.request.render('website_sale_criteria.confirm_project')



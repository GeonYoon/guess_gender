from rest_framework import pagination

class CFEAPIPagination(pagination.LimitOffsetPagination):
    # page_size    = 20ß
    default_limit   = 10
    max_limt        = 20
    # limit_query_parm = 'lim'

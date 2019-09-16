from django.db import models
from django.utils.translation import ugettext_lazy as _

class Assets(models.Model):
    name = models.CharField(max_length=50, blank=False)
    category = models.CharField(max_length=30, blank=False)
    amount = models.PositiveIntegerField(_('Amount #'), blank=False)
    created = models.DateTimeField(_("Registered on"), auto_now_add=True)
    updated = models.DateTimeField(_("Updated on"), auto_now=True)
    lost = models.BooleanField(_("Not in possession"), default=False)

    def __str__(self):
        return self.name


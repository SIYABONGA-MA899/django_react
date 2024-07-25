from django.db import models

# Create your models here.

class Notes(models.Model):

    note = models.CharField(max_length = 200, null = False, blank = False)
    body = models.TextField(null = True, blank = True)
    date_created = models.DateTimeField(auto_now_add = True)
    date_modified = models.DateTimeField(auto_now = True)

    def __str__(self):

        return(self.body)

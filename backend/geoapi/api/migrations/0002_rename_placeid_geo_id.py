# Generated by Django 4.2.2 on 2023-06-06 15:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='geo',
            old_name='id',
            new_name='pieceid'
        ),
    ]

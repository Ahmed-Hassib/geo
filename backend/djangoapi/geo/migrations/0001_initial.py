# Generated by Django 4.2.2 on 2023-06-06 13:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GeoLocation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('latitude', models.FloatField(default=0)),
                ('langtude', models.FloatField(default=0)),
            ],
        ),
    ]

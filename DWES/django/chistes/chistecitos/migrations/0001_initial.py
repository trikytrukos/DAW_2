# Generated by Django 5.0.4 on 2024-05-05 18:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Chiste',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=100)),
                ('texto', models.TextField()),
                ('adulto', models.BooleanField(default=False)),
                ('fecha', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
# Generated by Django 4.2.4 on 2023-08-20 23:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newsroom', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newsroom_news',
            name='image',
            field=models.ImageField(default='default.png', upload_to='media/News_pics'),
        ),
    ]
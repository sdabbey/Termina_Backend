from django.shortcuts import render
from about.models import About, About_section
from team.models import Team, Team_mate
from newsroom.models import Newsroom_news
def landingpage(request):
    context = {
        
        "teams": Team.objects.all(),
        "team_mates": Team_mate.objects.all(),
        "newsroom_news": Newsroom_news.objects.all()
    }
    return render(request, "index.html", context)
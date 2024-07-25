from django.urls import path
from .views import Index, getNotes, getNote, updateNote, createNote, deleteNote

urlpatterns = [
    path("", Index, name = "index"),
    path("notes/", getNotes, name = "notes"),
    path("create/", createNote, name = "create"),
    path("update/<str:pk>/", updateNote, name = "update"),
    path("note/<str:pk>/", getNote, name = "note"),
    path("delete/<int:pk>/",deleteNote, name = "delete")
]
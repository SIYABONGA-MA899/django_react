from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Notes
from .serializers import NotesSerializer

# Create your views here.

@api_view(['GET'])
def Index(request):

    return Response("hello Siya")

@api_view(["GET"])
def getNotes(request):

    notes = Notes.objects.all()
    serializer = NotesSerializer(notes, many = True)
    return Response(serializer.data)

@api_view(["GET"])
def getNote(request, pk):

    note = Notes.objects.get(id = pk)
    serializer = NotesSerializer(note, many = False)
    return Response(serializer.data)

@api_view(["PUT"])
def updateNote(request, pk):

	data = request.data
	note = Notes.objects.get(id = pk)
	note.body = data['body']
	note.save()
	print(note)
	serializer = NotesSerializer(instance = note, data = data)
	
	if serializer.is_valid():

		serializer.save()
		print(serializer)

	return(Response(serializer.data))

@api_view(['POST'])
def createNote(request):

	data = request.data
	note = data['note']
	body = data['body']

	Note= Notes.objects.create(note = note, body = body)
	serializer = NotesSerializer(Note, many = False)

	return Response(serializer.data)


@api_view(['DELETE'])
def deleteNote(request, pk):

	note = Notes.objects.get(id = pk)
	note.delete()

	return Response("hello")

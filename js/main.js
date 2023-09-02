function music(note)
{
    pianoNote = "sounds/note" + note + ".wav"
    sound = new Audio(pianoNote);
    sound.play();
}
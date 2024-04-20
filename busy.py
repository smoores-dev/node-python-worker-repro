import whisperx


def busy():
    track_path = './mobydick.mp3'
    device= 'cpu'
    compute_type = 'int8'
    batch_size = 16
    transcribe_model = whisperx.load_model(
        "base.en",
        device=device,
        compute_type=compute_type,
        asr_options={"word_timestamps": True},
    )
    align_model, align_metadata = whisperx.load_align_model(
        language_code="en", device=device
    )

    audio = whisperx.load_audio(track_path)

    unaligned = transcribe_model.transcribe(audio, batch_size=int(batch_size))
    transcription = whisperx.align(
        unaligned["segments"],
        align_model,
        align_metadata,
        audio,
        device=device,
        return_char_alignments=False,
    )

    return transcription

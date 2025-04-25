forever(function () {
    if (storage.exists("test.mhf")) {
        console.log("Audio file not found start panic")
        control.panic(404)
    }
    let MHF = JSON.parse(Storage.read("Test.mhf"))
    music.setTempo(MHF.hertz)
    let noteIdx = 0
    let notes = []
    let tmp = []
    while (true) {
        tmp = MHF.contents[noteIdx]
        
        noteIdx++
    }
})
forever(function () {
    if (storage.exists("test.mhf")) {
        console.log("Audio file not found start panic")
        control.panic(404)
    }
    let MHF = JSON.parse(Storage.read("Test.mhf"))
    music.setTempo(MHF.hertz)
    let noteIdx = 0
    let noteIdxR = 0
    let notes = []
    let tmp = []
    while (true) {
        tmp = MHF.contents[noteIdx]
        while (noteIdxR != tmp.length) {
            if (tmp[noteIdxR] < 0) {
                notes[toString() Math.abs(tmp[noteIdxR])] = null
            }else{

            }
        }
        noteIdx++
    }
})
// gsap.from("#box1",{
//     z:300,
//     y:150,
//     duration:2,
//     delay:1,
//     rotate:360,
//     borderRadius:"50%",
//     backgroundColor:"blue",
//     scale:0.5,
//     opacity:0,
//     repeat:-1,
//     yoyo:true
// })
//     gsap.from("h1",{
//         opacity:0,
//         y:20,
//         delay:1,
//         stagger:1
//     })

//     var tl = gsap.timeline()

//     tl.to("#box1",{
//         x:1336,
//         rotate:360,
//         duration:2,
//         delay:1,
//     })

//     tl.to("#box2",{
//         x:1336,
//         rotate:270,
//         duration:2
//     })
//     tl.to("#box3",{
//         x:1336,
//         rotate:90,
//         duration:2
//     })

    var tl = gsap.timeline()

    tl.from("h2",{
        opacity:0,
        y:-30,
        duration:2,
        delay:.5
    })

    tl.from("h4",{
        opacity:0,
        y:-30,
        // duration:2,
        stagger:.5
    })

    
// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
        title: 'Do you want to play music in the background?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});

    // PROFILE PICTURE SLIDESHOW (PARALLEL)
const profileTL = new TimelineMax({paused:true});

profileTL
  .to(".profile-picture img:nth-child(1)", 1, { opacity: 1 })
  .to(".profile-picture img:nth-child(1)", 1, { opacity: 0 }, "+=0.6")

  .to(".profile-picture img:nth-child(2)", 1, { opacity: 1 })
  .to(".profile-picture img:nth-child(2)", 1, { opacity: 0 }, "+=0.6")

  .to(".profile-picture img:nth-child(3)", 1, { opacity: 1 })
  .to(".profile-picture img:nth-child(3)", 1, { opacity: 0 }, "+=0.6")

  .to(".profile-picture img:nth-child(4)", 1, { opacity: 1 })
  .to(".profile-picture img:nth-child(4)", 1, { opacity: 0 }, "+=0.6")

  .to(".profile-picture img:nth-child(5)", 1, { opacity: 1 })
  .to(".profile-picture img:nth-child(5)", 1, { opacity: 0 }, "+=0.6")

  .to(".profile-picture img:nth-child(6)", 1, { opacity: 1 })
  .to(".profile-picture img:nth-child(6)", 1, { opacity: 0 }, "+=0.6")

  .to(".profile-picture img:nth-child(7)", 1, { opacity: 1 })
  .to(".profile-picture img:nth-child(7)", 1, { opacity: 0 }, "+=0.6")

  .to(".profile-picture img:nth-child(8)", 1, { opacity: 1 })
  .to(".profile-picture img:nth-child(8)", 1, { opacity: 0 }, "+=0.6")

  .to(".profile-picture img:nth-child(9)", 1, { opacity: 1 })
  .to(".profile-picture img:nth-child(9)", 1, { opacity: 0 }, "+=0.6")

  .to(".profile-picture img:nth-child(10)", 1, { opacity: 1 })
  .to(".profile-picture img:nth-child(10)", 1, { opacity: 0 }, "+=0.6")

  .to(".profile-picture img:nth-child(11)", 1, { opacity: 1 })
  .to(".profile-picture img:nth-child(11)", 1, { opacity: 0 }, "+=0.6")

  .to(".profile-picture img:nth-child(12)", 1, { opacity: 1 })
  .to(".profile-picture img:nth-child(12)", 1, { opacity: 0 }, "+=0.6")

  .to(".profile-picture img:nth-child(13)", 1, { opacity: 1 })
  .to(".profile-picture img:nth-child(13)", 1, { opacity: 0 }, "+=0.6")

  .to(".profile-picture img:nth-child(14)", 1, { opacity: 1 })
  .to(".profile-picture img:nth-child(14)", 1, { opacity: 0 }, "+=0.6")

  .to(".profile-picture img:nth-child(15)", 1, { opacity: 1 });


// animation timeline
const animationTimeline = () => {
    // split chars that needs to be animated individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    }
    profileTL.pause(0);
    gsap.set(".profile-picture img", { opacity: 0 });

    // timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.6, {
        visibility: "visible"
    })
    .from(".one", 0.7, {
        opacity: 0,
        y: 10
    })
    .from(".two", 0.4, {
        opacity: 0,
        y: 10
    })
    .to(".one",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=3.5")
    .to(".two",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "-=1")
    .from(".three", 0.7, {
        opacity: 0,
        y: 10
    })
    .to(".three",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=3")
    .from(".four", 0.7, {
        scale: 0.2,
        opacity: 0,
    })
    .from(".fake-btn", 0.3, {
        scale: 0.2,
        opacity: 0,
    })
    .staggerTo(
        ".hbd-chatbox span",
        1.5, {
            visibility: "visible",
        },
        0.05
    )
    .to(".fake-btn", 0.1, {
        backgroundColor: "rgb(127, 206, 248)",
    },
    "+=4")
    .to(
        ".four",
        0.5, {
            scale: 0.2,
            opacity: 0,
            y: -150
        },
    "+=1")
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
    .from(
        ".idea-5",
        0.7, {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
        },
        "+=1.5"
    )
    .to(
        ".idea-5 span",
        0.7, {
            rotation: 90,
            x: 8,
        },
        "+=1.4"
    )
    .to(
        ".idea-5",
        0.7, {
            scale: 0.2,
            opacity: 0,
        },
        "+=2"
    )
    .staggerFrom(
        ".idea-6 span",
        0.8, {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: Expo.easeOut,
        },
        0.2
    )
    .staggerTo(
        ".idea-6 span",
        0.8, {
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: Expo.easeOut,
        },
        0.2,
        "+=1.5"
    )

    .add("afterIdea6")
    .call(()=>{
        profileTL.restart(true)
    },null,null,"afterIdea6+=0.1")

    .from(".hat", 0.6, {
        x: -80,
        y: -80,
        rotation: -180,
        opacity: 0
    }, "afterIdea6")

    .staggerFrom(
        ".wish-hbd span",
        0.6,
        { opacity: 0, y: -40 },
        0.08,
        "afterIdea6"
    )

    .staggerFromTo(
        ".baloons img",
        2.5,
        { opacity: 0, y: 1400 },
        { opacity: 1, y: -1000 },
        0.2,
        "afterIdea6"
    )
    .staggerFromTo(
        ".wish-hbd span",
        0.7, {
            scale: 1.4,
            rotationY: 150,
        }, {
            scale: 1,
            rotationY: 0,
            color: "#ff69b4",
            ease: Expo.easeOut,
        },
        0.1,"afterIdea6+=0.3"
    )
    .from(
        ".wish h5",
        0.5, {
            opacity: 0,
            y: 10,
            skewX: "-15deg",
        },"+=1"
    )
    .staggerTo(
        ".eight svg",
        1.5, {
            visibility: "visible",
            opacity: 0,
            scale: 80,
            repeat: 6,
            repeatDelay: 1,
        },
        0.3
    )
    .to(
        ".one, .two, .three, .four, .five, .six, .seven, .eight",
        3,
        { opacity: 0, pointerEvents: "none" },
        "+=2"
    )
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
        ".last-smile",
        0.5, {
            rotation: 90,
        },
        "+=1"
    );

    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
        
        // reset profile images
        gsap.set(".profile-picture img", { opacity: 0 });

        // reset profile timeline (do NOT play)
        profileTL.pause(0);

        // restart main animation
        tl.restart();
    });
}

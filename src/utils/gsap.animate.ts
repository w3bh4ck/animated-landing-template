import gsap from "gsap";
export const animateHero = () => {
  gsap.fromTo(
    ".tx-1",
    { y: 10, opacity: 0 },
    { y: 0, duration: 0.5, opacity: 1, ease: "power4.out" }
  );
  gsap.fromTo(
    ".tx-2",
    { y: 100, opacity: 0 },
    { y: 0, duration: 1, opacity: 1, ease: "power4.out" }
  );
  gsap.fromTo(
    ".tx-3",
    { y: 150, opacity: 0 },
    { y: 0, duration: 1.5, opacity: 1, ease: "power4.out" }
  );
  gsap.fromTo(
    "svg",
    { opacity: 0, rotate: 90, scale: 0.5 },
    { duration: 1, opacity: 1, rotate: 0, scale: 1 }
  );
};

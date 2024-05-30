document.addEventListener('DOMContentLoaded', () => {
    const dialogueText = document.getElementById('dialogue-text');
    const nextButton = document.getElementById('next-button');
    const character = document.getElementById('character');
    const steps = [
        "¡Hola! Soy tu amigo Basil, te enseñaré a cultivar albahaca. ¿Sabes qué es una planta?",
        "Una planta es un ser vivo que crece en la tierra y necesita luz solar, agua y nutrientes para vivir.",
        "Ahora te enseñaré cómo cultivar tu propia planta de albahaca.",
        "Primero, necesitas preparar el suelo. Elige una maceta con buen drenaje y llena con tierra rica en nutrientes.",
        "Luego, siembra las semillas de albahaca a 1 cm de profundidad y cúbrelas ligeramente con tierra.",
        "Riega la tierra cuando la superficie esté seca, pero evita el encharcamiento.",
        "Coloca la maceta en un lugar donde reciba al menos 6 horas de luz solar al día.",
        "Cuando las plantas tengan al menos 15 cm de altura, puedes comenzar a cosechar las hojas."
    ];
    let stepIndex = 0;

    function showConfetti() {
        const burst = new mojs.Burst({
            left: 0, top: 0,
            count: 20,
            radius: { 50: 150 },
            children: {
                shape: 'circle',
                fill: ['#ff6347', '#ffeb3b', '#f0f8ff'],
                duration: 2000
            }
        });
        burst.tune({ x: window.innerWidth / 2, y: window.innerHeight / 2 }).replay();
    }

    function updateDialogue() {
        gsap.to(character, { y: -10, duration: 0.5, yoyo: true, repeat: 1 });
        if (stepIndex < steps.length) {
            dialogueText.textContent = steps[stepIndex];
            stepIndex++;
            showConfetti();
        } else {
            nextButton.textContent = "Empezar el Seguimiento";
            nextButton.removeEventListener('click', updateDialogue);
            nextButton.addEventListener('click', () => {
                window.location.href = 'index.html';
            });
        }
    }

    nextButton.addEventListener('click', updateDialogue);
});

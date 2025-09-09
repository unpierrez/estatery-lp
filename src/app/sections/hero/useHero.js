export function useHero() {
    const heroContent = {
        title: "Buy, rent, or sell your property easily",
        description: "A great platform to buy, sell, or even rent your properties without any commisions.",
        tabs: ["Rent", "Buy", "Sell"],
        location: "Barcelona, Spain",
        moveInText: "Select Move-in Date",
        stats: [
            {
            icon: "/renters-icon.svg",
            value: "50k+ renters",
            subtitle: "believe in our service"
            },
            {
            icon: "/properties-icon.svg",
            value: "10k+ properties",
            subtitle: "and house ready for occupancy"
            }
        ],
        buttonText: "Browse Properties"
    };

      const cardInfo = {
        imageSrc: '/manuel.svg',
        name: 'Manuel Villa',
        role: 'Renter',
        quote: 'I loved how smooth the move was, and finally got the house we wanted.',
        savedAmount: '$1,500',
        processTime: '-24 hrs',
    };

    return { heroContent, cardInfo };
}
export function useBenefit() {

    const benefitsData = [
      {
        icon: '/property-icon.svg',
        title: 'Property Insurance',
        description:
          'We offer our customer property protection of liability coverage and insurance for their better life.',
      },
      {
        icon: '/price-icon.svg',
        title: 'Best Price',
        description:
          'Not sure what you should be charging for your property? No need to worry, let us do the numbers for you.',
      },
      {
        icon: '/commission-icon.svg',
        title: 'Lowest Commission',
        description:
          'You no longer have to negotiate commissions and haggle with other agents. It only costs 2%!',
      },
      {
        icon: '/control-icon.svg',
        title: 'Overall Control',
        description:
          'Get a virtual tour, and schedule visits before you rent or buy any properties. You get overall control.',
      },
    ];
    
    return {
        benefitsData
    }
}
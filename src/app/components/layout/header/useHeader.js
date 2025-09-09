export function useHeader() {
    const navItems = [
        { label: 'Rent' },
        { label: 'Buy' },
        { label: 'Sell' },
        { label: 'Manage Property', hasArrow: true },
        { label: 'Resources', hasArrow: true },
    ];

      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return { navItems, scrollToTop };
}
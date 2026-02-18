import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '../data/nav';
import './Navbar.css';

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = pathname === '/';
  const isOpaque = !isHome || scrolled || mobileOpen;

  return (
    <header className={`navbar ${isOpaque ? 'navbar--solid' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" aria-label="IFC at UVA – Home">
          <img src="/images/logo.png" alt="" className="navbar__logo" />
          <span className="navbar__brand-text">IFC at UVA</span>
        </Link>

        <nav className="navbar__nav">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="navbar__item-wrap"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.children ? (
                <>
                  <Link
                    to={item.href}
                    className="navbar__link navbar__link--dropdown"
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                  </Link>
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.ul
                        className="navbar__dropdown"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link to={child.href} className="navbar__dropdown-link">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link to={item.href} className="navbar__link">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={mobileOpen ? 'navbar__toggle-icon open' : 'navbar__toggle-icon'} />
          <span className={mobileOpen ? 'navbar__toggle-icon open' : 'navbar__toggle-icon'} />
          <span className={mobileOpen ? 'navbar__toggle-icon open' : 'navbar__toggle-icon'} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navItems.map((item) => (
              <div key={item.label} className="navbar__mobile-item">
                <Link
                  to={item.href}
                  className="navbar__mobile-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.label}
                    to={child.href}
                    className="navbar__mobile-sublink"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

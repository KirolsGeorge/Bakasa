import { motion } from 'motion/react';
import { useLanguage } from '../../stateManagementHooks/LanguageContext';

export default function SwitchLanguage() {
  const { language, switchLanguage } = useLanguage();

  return (
    <div className="flex items-start justify-end">
      <motion.label
        className="swap btn btn-square"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1 },
        }}
      >
        <input type="checkbox" checked={language === 'en'} onChange={switchLanguage} />
        <div className="swap-on">EN</div>
        <div className="swap-off">AR</div>
      </motion.label>
    </div>
  );
}

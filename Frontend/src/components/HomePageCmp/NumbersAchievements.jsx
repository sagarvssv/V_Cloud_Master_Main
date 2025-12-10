import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const NumbersAchievements=()=> {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const stats = [
    { id: 1, icon: "🏆", number: 1024, label: "Awards" },
    { id: 2, icon: "🚀", number: 24, label: "Projects" },
    { id: 3, icon: "👥", number: 1024, label: "Happy Clients" },
    { id: 4, icon: "💾", number: 99, label: "Up Time" },
  ];

  const Counter = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const end = target;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / end));

        const timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start === end) clearInterval(timer);
        }, stepTime);
      }
    }, [isInView, target]);

    return <span>{count}</span>;
  };

  useEffect(() => {
    if (isInView) controls.start({ opacity: 1, y: 0 });
  }, [isInView]);

  return (
    <section ref={ref} className="py-20 w-full text-center bg-[#f9fafb] backdrop-blur-xl border border-white/20 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900"
        >
          Numbers & Achievements
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-500 mt-3"
        >
          We did awesome work with business ethics.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-16">
          {stats.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.6, delay: item.id * 0.2 }}
              className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-md"
            >
              <div className="text-5xl">{item.icon}</div>
              <div className="text-3xl font-bold text-gray-900">
                <Counter target={item.number} />
              </div>
              <p className="text-gray-600 text-lg">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NumbersAchievements;
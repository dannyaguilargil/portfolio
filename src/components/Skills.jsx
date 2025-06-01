import React, { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import '../assets/styles/skills.css';

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const option = {
    title: {
      text: 'Skills',
      left: 'center',
      textStyle: {
        color: '#E07F3F',
        fontSize: 24,
        fontWeight: 'bold',
      },
    },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: ['Django', 'React', 'Rust', 'Kotlin', 'Simfony'],
      axisLine: {
        lineStyle: { color: '#FFFFFF' }, // antes #0D3745
      },
      axisLabel: {
        color: '#0D3745', 
        fontWeight: 'bold',
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: { color: '#FFFFFF' }, // antes #0D3745
      },
      splitLine: {
        lineStyle: {
          color: '#84341C',
          opacity: 0.3,
        },
      },
      axisLabel: {
        color: '#0D3745',
        fontWeight: 'bold',
      },
    },
    series: [
      {
        name: 'Dominio',
        type: 'bar',
        data: visible ? [85, 95, 70, 75, 80] : [0, 0, 0, 0, 0],
        itemStyle: {
          color: '#E07F3F',
          borderRadius: [5, 5, 0, 0],
        },
        emphasis: {
          itemStyle: {
            color: '#0D3745',
          },
        },
        animation: true,
        animationDuration: 1000,
        animationDelay: idx => idx * 200,
        animationEasing: 'elasticOut',
      },
    ],
    backgroundColor: '#FFFFFF',
  };

  return (
    <section ref={sectionRef} id="skills" className="skills-section">
      <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />
    </section>
  );
};

export default Skills;

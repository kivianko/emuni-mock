"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface SphereParticleSystemProps {
  width?: string;
  height?: string;
}

const SphereParticleSystem: React.FC<SphereParticleSystemProps> = ({ width = "100%", height = "100%" }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // シーン、カメラ、レンダラーの設定
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 0.1, 1000);
    scene.background = new THREE.Color(0xffffff); // 背景を白に設定
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerWidth, containerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // ライティングの追加
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // パーティクルの生成
    const particlesCount = 500;
    const particles = new THREE.Group();

    const sphereGeometry = new THREE.SphereGeometry(0.002, 32, 32); // パーティクルサイズを大きく
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x000000,
      shininess: 100,
      flatShading: false,
      transparent: true,
      opacity: 0.6, // 不透明度を上げる
    });

    for (let i = 0; i < particlesCount; i++) {
      const particle = new THREE.Mesh(sphereGeometry, sphereMaterial);
      particle.position.set(
        (Math.random() - 0.5) * 2, // 配置範囲を狭める
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      );
      particles.add(particle);
    }

    scene.add(particles);

    camera.position.z = 0.5; // カメラを少し後ろに下げる

    // 回転軸の設定
    const rotationAxis = new THREE.Vector3(1, 1, 0).normalize();

    // アニメーション
    const animate = () => {
      requestAnimationFrame(animate);

      // 左下から斜め上に回転
      particles.rotateOnAxis(rotationAxis, -0.001);

      renderer.render(scene, camera);
    };

    animate();

    // リサイズ対応
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
    };

    window.addEventListener("resize", handleResize);

    // クリーンアップ
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width, height, position: "relative" }} />;
};
export default SphereParticleSystem;

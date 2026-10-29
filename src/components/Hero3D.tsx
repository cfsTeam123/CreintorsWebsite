/**
 * Designed  & Developed by Faisal Nadaf
 * Contact: faisalfnadaf@gmail.com
 *
 * @format
 */

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "../lib/gsap";

type Props = {
	className?: string;
	/** primary mesh color */
	color?: string;
	/** accent emissive color */
	accent?: string;
};

/**
 * Hero3D minimal three.js scene with a wireframe icosahedron, an outer
 * torus knot, and a particle field. Time-based rotation only.
 * No external loaders runs anywhere.
 */
export default function Hero3D({
	className = "",
	color = "#1ac8ff",
	accent = "#000080",
}: Props) {
	const mountRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const mount = mountRef.current;
		if (!mount) return;

		const scene = new THREE.Scene();
		scene.fog = new THREE.FogExp2(0x05060a, 0.035);

		const camera = new THREE.PerspectiveCamera(
			45,
			mount.clientWidth / mount.clientHeight,
			0.1,
			100,
		);
		camera.position.set(0, 0, 7);

		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
			powerPreference: "high-performance",
		});
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setSize(mount.clientWidth, mount.clientHeight);
		renderer.setClearColor(0x000000, 0);
		mount.appendChild(renderer.domElement);

		// Lights
		scene.add(new THREE.AmbientLight(0xffffff, 0.4));
		const key = new THREE.DirectionalLight(color, 1.5);
		key.position.set(4, 6, 5);
		scene.add(key);
		const rim = new THREE.PointLight(accent, 1.2, 20);
		rim.position.set(-5, -3, 4);
		scene.add(rim);

		// Core: icosahedron (solid + wireframe overlay)
		const coreGeo = new THREE.IcosahedronGeometry(1.55, 1);
		const coreMat = new THREE.MeshPhysicalMaterial({
			color: 0x0a0c14,
			metalness: 0.85,
			roughness: 0.25,
			clearcoat: 0.6,
			clearcoatRoughness: 0.2,
			emissive: new THREE.Color(color).multiplyScalar(0.06),
		});
		const core = new THREE.Mesh(coreGeo, coreMat);
		scene.add(core);

		const wireMat = new THREE.MeshBasicMaterial({
			color: new THREE.Color(color),
			wireframe: true,
			transparent: true,
			opacity: 0.55,
		});
		const wire = new THREE.Mesh(new THREE.IcosahedronGeometry(1.6, 1), wireMat);
		scene.add(wire);

		// Outer torus knot
		const knot = new THREE.Mesh(
			new THREE.TorusKnotGeometry(2.6, 0.03, 220, 16, 2, 5),
			new THREE.MeshBasicMaterial({
				color: new THREE.Color(accent),
				transparent: true,
				opacity: 0.7,
			}),
		);
		knot.rotation.x = Math.PI / 3;
		scene.add(knot);

		// Outer ring
		const ring = new THREE.Mesh(
			new THREE.RingGeometry(3.2, 3.21, 128),
			new THREE.MeshBasicMaterial({
				color: 0xffffff,
				side: THREE.DoubleSide,
				transparent: true,
				opacity: 0.18,
			}),
		);
		ring.rotation.x = Math.PI / 2.2;
		scene.add(ring);

		// Particles
		const pCount = 800;
		const positions = new Float32Array(pCount * 3);
		for (let i = 0; i < pCount; i++) {
			const r = 4 + Math.random() * 6;
			const theta = Math.random() * Math.PI * 2;
			const phi = Math.acos(2 * Math.random() - 1);
			positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
			positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
			positions[i * 3 + 2] = r * Math.cos(phi);
		}
		const pGeo = new THREE.BufferGeometry();
		pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
		const pMat = new THREE.PointsMaterial({
			color: 0xffffff,
			size: 0.022,
			transparent: true,
			opacity: 0.7,
			depthWrite: false,
		});
		const points = new THREE.Points(pGeo, pMat);
		scene.add(points);

		// Resize
		const onResize = () => {
			const w = mount.clientWidth;
			const h = mount.clientHeight;
			camera.aspect = w / h;
			camera.updateProjectionMatrix();
			renderer.setSize(w, h);
		};
		const ro = new ResizeObserver(onResize);
		ro.observe(mount);

		// Intro
		gsap.from(core.scale, {
			x: 0,
			y: 0,
			z: 0,
			duration: 1.4,
			ease: "elastic.out(1,0.6)",
		});
		gsap.from(wire.scale, {
			x: 0,
			y: 0,
			z: 0,
			duration: 1.4,
			ease: "elastic.out(1,0.6)",
			delay: 0.1,
		});
		gsap.from(knot.material as THREE.Material, {
			opacity: 0,
			duration: 1.6,
			delay: 0.4,
		});

		// Animate
		const clock = new THREE.Clock();
		let frame = 0;
		const tick = () => {
			const t = clock.getElapsedTime();

			core.rotation.y = t * 0.25;
			core.rotation.x = t * 0.18;
			wire.rotation.copy(core.rotation);
			wire.rotation.y *= -1.05;

			knot.rotation.z = t * 0.35;
			knot.rotation.x = Math.PI / 3 + Math.sin(t * 0.3) * 0.15;

			ring.rotation.z = t * 0.1;

			points.rotation.y = t * 0.04;
			points.rotation.x = Math.sin(t * 0.05) * 0.1;

			camera.lookAt(0, 0, 0);

			renderer.render(scene, camera);
			frame = requestAnimationFrame(tick);
		};
		tick();

		return () => {
			cancelAnimationFrame(frame);
			ro.disconnect();
			renderer.dispose();
			coreGeo.dispose();
			coreMat.dispose();
			wire.geometry.dispose();
			wireMat.dispose();
			knot.geometry.dispose();
			(knot.material as THREE.Material).dispose();
			ring.geometry.dispose();
			(ring.material as THREE.Material).dispose();
			pGeo.dispose();
			pMat.dispose();
			if (renderer.domElement.parentNode === mount) {
				mount.removeChild(renderer.domElement);
			}
		};
	}, [color, accent]);

	return (
		<div
			ref={mountRef}
			className={`absolute inset-0 ${className}`}
			aria-hidden
		/>
	);
}

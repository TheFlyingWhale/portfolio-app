import { useEffect, useRef, useState } from "react";

const useActive = <T extends HTMLElement = HTMLDivElement>() => {
	const ref = useRef<T>(null);
	const [active, setActive] = useState(false);
	const [hovered, setHovered] = useState(false);

	useEffect(() => {
		//Click events
		ref.current?.addEventListener("mousedown", () => {
			setActive(true);
		});
		ref.current?.addEventListener("mouseup", () => {
			setActive(false);
		});
		ref.current?.addEventListener("mouseleave", () => {
			setActive(false);
		});
		//Hover events
		ref.current?.addEventListener("mouseover", () => {
			setHovered(true);
		});
		ref.current?.addEventListener("mouseout", () => {
			setHovered(false);
		});
	}, []);

	return { active, hovered, ref };
};

export default useActive;

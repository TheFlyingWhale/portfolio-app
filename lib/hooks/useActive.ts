import { useEffect, useRef, useState } from "react";

const useActive = <T extends HTMLElement = HTMLDivElement>() => {
	const ref = useRef<T>(null);
	const [active, setActive] = useState(false);

	useEffect(() => {
		ref.current?.addEventListener("mousedown", () => {
			setActive(true);
		});
		ref.current?.addEventListener("mouseup", () => {
			setActive(false);
		});
		ref.current?.addEventListener("mouseleave", () => {
			setActive(false);
		});
	}, []);

	return { active, ref };
};

export default useActive;

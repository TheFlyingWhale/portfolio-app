import { Anchor } from "@mantine/core";
import Link from "next/link";
import useActiveHover from "../../lib/hooks/useActiveHover";
import useResponsiveTransform from "../../styles/useResponsiveTransform";
import useTypographyStyles from "../../styles/useTypographyStyles";

interface HeaderLinkProps {
	children: React.ReactNode;
	href: string;
	className?: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({
	href,
	children,
	className,
}) => {
	const { classes: typStyles } = useTypographyStyles();
	const { active, hovered, ref } = useActiveHover<HTMLButtonElement>();
	const { classes } = useResponsiveTransform({ active, hovered });

	return (
		<Link href={href}>
			<Anchor
				ref={ref}
				component="button"
				className={`${classes.sm} ${typStyles.link} ${className}`}
			>
				{children}
			</Anchor>
		</Link>
	);
};

export default HeaderLink;

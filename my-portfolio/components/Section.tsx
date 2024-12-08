import { clsx } from "clsx";
import { PropsWithChildren } from "react"; //props + children pour accéder et utiliser ce qui est à l'intérieur des balises = <section>

export const Section = (props: PropsWithChildren<{className?: string }>) => { //className?: string = potentiellement une string dans la section, c'est une propriété Typescript (optionnelle="?")
    return (
        <section className={clsx("max-w-3xl px-4 m-auto", props.className)} //clsx (npm install clsx) = pr combiner des classes, celles-ci seront fixes, props.classNmae seront def plus tard directement dans la section de Header.tsx (pas obligatoire)
            >{props.children}</section> //pour def une largeur maximum, padding intérieur et m-auto pour que ça se centre automatiquement
    );
};
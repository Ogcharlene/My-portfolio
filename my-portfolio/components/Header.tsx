import { Section } from "./Section";
import { GithubIcon } from "./ui/GithubIcon";

export const Header = () => { //on def le header pour l'importer ensuite dans page.tsx
    return (
        <header className="sticky top-0 py-4 m-4">
            <section className="flex items-baseline">
                <h1 className="text-2xl font-bolt text-primary">Charlène Oget</h1>
                <div className="flex-1"/>
                <ul>
                  <button className="size-6 p-0">
                    <a href="https://github.com/Ogcharlene" target="_blank">
                    <GithubIcon size={25} className="text-foreground"/></a>
                </button>  
                </ul>
            </section>
        </header>
    )
}
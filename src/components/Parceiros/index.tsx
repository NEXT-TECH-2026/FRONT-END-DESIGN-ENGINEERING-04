import logoFiap from "../../img/logoFiap.png";
import logoSoulUp from "../../img/logoSoulUp.jpg";

export default function Parceiros() {
    return (
        <section aria-label="Parceiros do Challenge" className="mt-8">
            <p className="text-[1.05rem] font-medium tracking-[0.16em] text-[var(--navigation-muted)] uppercase">Challenge FIAP · SoulUp</p>
            <div className="mt-4 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                    <img src={logoFiap} alt="FIAP" width={28} height={28} className="h-[2.8rem] w-[2.8rem] object-contain" />
                    <span className="text-[1.2rem] text-[var(--navigation-link)]">FIAP</span>
                </div>
                <span aria-hidden="true" className="h-7 w-px bg-[var(--navigation-border)]" />
                <div className="flex items-center gap-3">
                    <img src={logoSoulUp} alt="SoulUp" width={28} height={28} className="h-[2.8rem] w-[2.8rem] rounded-md object-contain" />
                    <span className="text-[1.2rem] text-[var(--navigation-link)]">SoulUp</span>
                </div>
            </div>
        </section>
    );
}

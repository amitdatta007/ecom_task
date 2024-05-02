import MenuBar from "@/components/ui/MenuBar";

const RootLayout = ({ children }) => {
    return (
        <>
            <main className="px-3 sm:px-0 w-full max-w-[532px] md:max-w-[712px] lg:max-w-[952px] xl:max-w-[1132px] 2xl:max-w-[1332px] mx-auto">
                {children}
            </main>
            <MenuBar />
        </>
    );
};

export default RootLayout;
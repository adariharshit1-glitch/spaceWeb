import "./globals.css"

export const metadata = {
    title:"Space Fest",
    description: "Space themed event website",
}

export default function RootLayout({children}) {
    return(
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
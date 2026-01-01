"use client";
import React, { useState } from "react";

export default function Home() {

  const sendDiscordNotification = async (method) => {
    try{

      await fetch('/api/notify', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          method: method,
          akunNama: selectedAkun?.nama || "Unknown Account"
        })
      });
    } catch (error) {
      console.error("Error trigger notification", error);
    }
  };

  const [showToast, setShowToast] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [selectedAkun, setSelectedAkun] = useState(null);
  const [paymentStep, setPaymentStep] = useState("list");
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openModal = (akun) => {
    setSelectedAkun(akun);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPaymentStep("list");
    setSelectedMethod(null);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const daftarAkun = [
    {
      id: 1,
      nama: "Level 200 Demon Account",
      harga: "$25 | Rp417.875",
      hargaAsli: 25,
      isSold: false,
      spesifikasi: `Level 200
      Money: $1.129.458.76
      Race: Demon
      Armour: Wolf Set - Leggings
      Pickaxe: Prisnatic Pickaxe
      Stash: Gargantuan 7x, Suryafall 48x, Etherealite 70x, Iceite 62x & More
      Totem: Vitality I, Miner I, Luck I`,
      gambar: "/images/akun1.png",
      gallery: ["/images/akun-1.png", "/images/akun-1-equipment.png", 
                "/images/akun-1-essence.png", "/images/akun-1-ore.png", "/images/akun-1-potion.png", "/images/akun-1-race.png"],
    },
    {
      id: 2,
      nama: "Level 112 Archangel Account",
      harga: "$13 | Rp217.295",
      hargaAsli: 13,
      isSold: false,
      spesifikasi: "Level 112, Money: $717.443.91, Race: Archangel, Pickaxe: Demonic + Arcane Pickaxe, Stash: Darkryte 12x, Demonite 27x",
      gambar: "/images/akun-2-banner.png",
      gallery: ["/images/akun-2.png", "/images/akun-2-equipment.png", 
                "/images/akun-2-essence.png", "/images/akun-2-ore.png", "/images/akun-2-potion.png", "/images/akun-2-race.png"],
    },
    {
      id: 3,
      nama: "Level 166 Angel Account",
      harga: "$6 | Rp100.290",
      hargaAsli: 6,
      isSold: false,
      spesifikasi: "Not Set Yet",
      gambar: "/images/akun-3.png",
      gallery: ["/images/akun-3-full.png", "/images/akun-3-equipment.png", 
                "/images/akun-3-essence.png", "/images/akun-3-ore.png", "/images/akun-3-potion.png", "/images/akun-3-race.png"],
    },
    {
      id: 4,
      nama: "Level 80 Demon Account",
      harga: "$4 | Rp66.860",
      hargaAsli: 4,
      isSold: true,
      spesifikasi: "Not Set Yet",
      gambar: "/images/akun-4.png",
      gallery: [""],
    },
  ];

  const Navbar = () => (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 z-50 px-6 md:px-10 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
      <img 
      src="icon.png"
      alt="TixStore Logo"
      className="h-10 w-10 md:h-12 md:w-12 object-contain"
      />
      <h1 className="text-white text-xl md:text-2xl font-bold tracking-tighter">
        TIX<span className="text-blue-500">STORE</span>
      </h1>
      </div>

      <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">Catalog</a>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">Contact</a>
      </div>

      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isNavOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
        </button>

        {isNavOpen && (
          <div className="absolute top-full left-0 w-full bg-black border-b border-zinc-800 flex flex-col p-6 space-y-4 md:hidden animate-in fade-in slide-in-from-top-5">
            <a href="#" className="text-zinc-400 hover:text-white text-lg">Home</a>
            <a href="#" className="text-zinc-400 hover:text-white text-lg">Catalog</a>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-bold">Contact</a>
          </div>
        )}
    </nav>
  );

  return (
    <main className="bg-[#050505] min-h-screen pt-24 p-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10"></div>

      <div className="absolute inset-0 -z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 flex justify-around opacity-30">
      <div className="w-[1px] h-full bg-zinc-600"></div>
      <div className="w-[1px] h-full bg-zinc-600"></div>
      <div className="w-[1px] h-full bg-zinc-600"></div>
      <div className="w-[1px] h-full bg-zinc-600"></div>
      <div className="w-[1px] h-full bg-zinc-600"></div>
      <div className="w-[1px] h-full bg-zinc-600"></div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-around opacity-30">
      <div className="h-[1px] w-full bg-zinc-600"></div>
      <div className="h-[1px] w-full bg-zinc-600"></div>
      <div className="h-[1px] w-full bg-zinc-600"></div>
      <div className="h-[1px] w-full bg-zinc-600"></div>
      <div className="h-[1px] w-full bg-zinc-600"></div>
      </div>
      </div>
      
      <div className="relative z-10">
      <Navbar />
      
      <div className="max-w-6xl mx-auto text-center mb-12 mt-10">
        <h2 className="text-white text-5xl font-extrabold mb-4">Level Up Your Game Experience.</h2>
        <p className="text-zinc-500"><span className="text-red-500">Premium Account</span>, <span className="text-green-500">Friendly Price</span>, <span className="text-blue-500">More Secure</span>, <span className="text-yellow-500">Lightning Fast Transaction.</span></p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {daftarAkun.map((item) => (
  <div 
    key={item.id} 
    className={`bg-zinc-900/40 backdrop-blur-sm border p-0 rounded-2xl overflow-hidden transition-all duration-300 group ${
      item.isSold ? "border-zinc-800 opacity-70" : "border-zinc-800 hover:border-blue-500/50"
    }`}
  >
    
    <div className="relative overflow-hidden">
      <img
        src={item.gambar}
        alt={item.nama}
        className={`w-full h-48 object-cover transition-transform duration-500 ${
          item.isSold ? "grayscale" : "group-hover:scale-105"
        }`}
      />
      
      {item.isSold && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <span className="bg-red-600 text-white text-xs font-black px-3 py-1 rounded-md uppercase tracking-tighter border border-white/20 -rotate-12 shadow-xl">
            SOLD OUT
          </span>
        </div>
      )}
    </div>
    
    <div className="p-6">
      <h2 className={`text-xl font-semibold ${item.isSold ? "text-zinc-500" : "text-white"}`}>
        {item.nama}
      </h2>

      <div className="mt-4 flex items-center gap-2">
        <span className={`font-bold text-xl ${item.isSold ? "text-zinc-600 line-through" : "text-blue-400"}`}>
          {item.harga.split('|')[1]}
        </span>
        {!item.isSold && (
          <span className="text-white italic text-xs">
            {item.harga.split('|')[0]} (Paypal)
          </span>
        )}
      </div>

      <button 
        onClick={() => !item.isSold && openModal(item)}
        disabled={item.isSold}
        className={`block w-full text-center font-bold py-3 px-4 rounded-xl mt-5 transition-all active:scale-95 ${
          item.isSold 
            ? "bg-zinc-800 text-zinc-500 cursor-not-allowed" 
            : "bg-white text-black hover:bg-blue-500 hover:text-white cursor-pointer"
        }`}
      >
        {item.isSold ? "Udah Laku" : "Buy Now !"}
      </button>
       </div>
      </div>
      ))}
      </div>
      </div>

    {isModalOpen && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
    <div 
      className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn" 
      onClick={closeModal}
    ></div>

    <div className="relative bg-zinc-900 border border-zinc-800 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl animate-zoomIn no-scrollbar">

      {paymentStep === "list" && (
        <div className="relative h-48 md:h-64 w-full shrink-0">
          <img src={selectedAkun?.gambar} className="w-full h-full object-cover opacity-50" alt="header" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
        </div>
      )} 
      
      <div className="p-6 md:p-10">
        {paymentStep === "list" && (
          <div className="animate-fadeIn space-y-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
              <div>
                <span className="text-blue-500 text-xs font-bold uppercase tracking-[0.2em]">The Forge Account</span>
                <h3 className="text-white text-3xl md:text-4xl font-bold tracking-tighter mt-1">{selectedAkun?.nama}</h3>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-xl text-right">
                <p className="text-blue-400 text-2xl font-black leading-none">{selectedAkun?.harga.split('|')[1]?.trim()}</p>
                <p className="text-white text-[10px] uppercase font-bold mt-1">{selectedAkun?.harga.split('|')[0]?.trim()}</p>
              </div>
              </div>

              <div className="space-y-3">
                <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Gallery Preview</p>
                <div className="grid grid-cols-3 gap-3">
                  {(selectedAkun?.gallery || []).map((img, i) => (
                    <div key={i} onClick={() => setCurrentIndex(i)} className="aspect-video bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700/50 hover:border-blue-500/50 transition-all cursor-zoom-in active:scale-95">
                      <img src={img} className="w-full h-full object-cover" alt="preview" />
                      </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-zinc-800/30 border border-zinc-800 p-5 rounded-2xl">
                <p className="text-blue-500 text-[10px] font-bold uppercase mb-2">Specifications</p>
                <p className="whitespace-pre-line text-zinc-300 text-sm italic">"{selectedAkun?.spesifikasi}"</p>
              </div>
              </div>

              <button
                onClick={() => setPaymentStep("method_selection")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 group"
                >
                  <span>Proceed to Payment</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
          </div>
        )}

        {paymentStep === "method_selection" && (
          <div className="animate-fadeIn space-y-6 py-4">
            <div className="text-center">
                    <h3 className="text-white text-2xl font-bold">Payment Method</h3>
                    <p className="text-zinc-500 text-sm mt-1">Select your preferred way to pay</p>
                  </div>
                  
                  <div className="grid gap-3">
                    {/* Dana */}
                    <button onClick={() => { setPaymentStep("detail"); setSelectedMethod("DANA"); }} className="flex items-center justify-between p-5 bg-zinc-800/50 border border-zinc-700 rounded-2xl hover:border-blue-500 transition-all group">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/1024px-Logo_dana_blue.svg.png" className="h-6" alt="dana" />
                      <span className="text-zinc-500 font-bold text-xs group-hover:text-blue-500 transition-colors tracking-widest">IDN</span>
                    </button>
                    {/* Gopay */}
                    <button onClick={() => { setPaymentStep("detail"); setSelectedMethod("GoPay"); }} className="flex items-center justify-between p-5 bg-zinc-800/50 border border-zinc-700 rounded-2xl hover:border-[#4FC3F7] transition-all group">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/8/86/Gopay_logo.svg" className="h-5" alt="gopay" />
                      <span className="text-zinc-500 font-bold text-xs group-hover:text-[#4FC3F7] transition-colors tracking-widest">IDN</span>
                    </button>

                    <button onClick={() => { setPaymentStep("detail"); setSelectedMethod("PayPal"); }} className="flex items-center justify-between p-5 bg-zinc-800/50 border border-zinc-700 rounded-2xl hover:border-[#FFB700] transition-all group">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6" alt="paypal" />
                      <span className="text-zinc-500 font-bold text-xs group-hover:text-[#FFB700] transition-colors tracking-widest">GLOBAL</span>
                    </button>
                  </div>
                  <button onClick={() => setPaymentStep("list")} className="w-full text-zinc-500 text-xs font-bold hover:text-white transition uppercase tracking-[0.2em]">← Back to Details</button>
                </div>
              )}

              {paymentStep === "detail" && (
                <div className="animate-fadeIn space-y-8 py-4 text-center">
                  <div>
                    <h3 className="text-white text-2xl font-bold">Complete Payment</h3>
                    <p className="text-zinc-500 text-sm mt-1">Transfer to our official {selectedMethod} {selectedMethod === "PayPal" ? "account" : "Account number"}</p>
                  </div>

                  <div className="bg-black/40 border-2 border-dashed border-zinc-800 p-8 rounded-[2rem] relative overflow-hidden group">
                    <p className="text-blue-500 text-[10px] font-bold uppercase mb-3 tracking-widest">{selectedMethod === "PayPal" ? "PayPal Email" : "Account Number"} </p>
                    
                    <button 
                      onClick={() => {
                        const targetValue = selectedMethod === "PayPal" ? process.env.NEXT_PUBLIC_PAYPAL_EMAIL : process.env.NEXT_PUBLIC_WA_NUMBER;
                        copyToClipboard(targetValue);
                      }}
                      className={`text-white font-mono font-bold tracking-tighter hover:scale-105 transition-transform active:opacity-50 break-all
                        ${selectedMethod === "PayPal" ? "text-xl md:text-2xl" : "text-4xl md:text-5xl"} `}
                    >
                      {selectedMethod === "PayPal" ? process.env.NEXT_PUBLIC_PAYPAL_EMAIL : process.env.NEXT_PUBLIC_WA_NUMBER}
                    </button>
                    <p className="text-zinc-500 text-xs mt-3">Click to Copy</p>
                  </div>

                  <div className="space-y-3">
                    <button 
                      onClick={() => {
                        const message = selectedMethod === "PayPal"
                        ? `Confirm PayPal payment for ${selectedAkun?.nama}`
                        : `Confirm Payment for ${selectedAkun?.nama}`;
                        window.open(`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                      className="w-full bg-green-500 text-white font-bold py-5 rounded-2xl hover:bg-green-600 transition-all flex items-center justify-center gap-2"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                        alt="WhatsApp Logo"
                        className="w-6 h-6"
                        />
                      CONFIRM ON WHATSAPP
                    </button>

                      <button
                        onClick={() => {
                          sendDiscordNotification(`Discord (${selectedMethod})`);
                          window.open(process.env.NEXT_PUBLIC_DISCORD_LINK, '_blank');
                        }}
                        className="w-full bg-[#5865F2] text-white font-bold py-5 rounded-2xl hover:bg-[#4752C4] transition-all flex items-center justify-center gap-2" 
                        >
                          <img
                            src="https://static.vecteezy.com/system/resources/previews/018/930/500/non_2x/discord-logo-discord-icon-transparent-free-png.png"
                            alt="Discord Logo"
                            className="w-8 h-8 bg-white rounded-full"
                            />
                          CONFIRM ON DISCORD
                        </button>

                    <button onClick={() => setPaymentStep("method_selection")} className="w-full text-zinc-500 text-xs font-bold hover:text-white transition uppercase tracking-[0.2em]">
                      Change Payment Method</button>
                  </div>
                </div>
              )}

              <button 
                onClick={closeModal}
                className="mt-8 w-full text-zinc-700 hover:text-red-500 text-[10px] font-bold uppercase tracking-[0.3em] transition-colors"
                >
                  Cancel Transaction
                </button>
          </div>
          </div>
          </div>
        )}

        {showToast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] animate-slideUp">
          <div className="bg-blue-600 text-white px-8 py-4 rounded-full shadow-2xl shadow-blue-600/40 flex items-center gap-3 border border-blue-400/50">
            <div className="bg-white/20 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm font-black uppercase tracking-wider">Copied to Clipboard!</span>
          </div>
        </div>
      )}

      {currentIndex !== null && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 md:p-10">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl animate-fadeIn"
               onClick={() => setCurrentIndex(null)}
          ></div>

          <div className="relative w-full max-w-5xl flex flex-col items-center animate-zoomIn">
            <button 
              onClick={() => setCurrentIndex(null)}
              className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="strokeLinejoin" strokeWidth={2} d="M6 16L18 6M6 6l12 12"/>
                </svg>
              </button>

              <div className="relative w-full flex items-center justify-center group">

                <button
                  onClick={() => setCurrentIndex((prev) => (prev === 0 ? selectedAkun.gallery.length - 1 : prev - 1))}
                  className="absolute left-0 md:left-16 z-10 p-3 bg-black/10 hover:bg-white hover:bg-white text-white hover:text-black rounded-full transition-all backdrop-blur-md opacity-0 group-hover:opacity-100"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <img 
                    src={selectedAkun.gallery[currentIndex]}
                    alt="Full Preview"
                    className="max-w-full max-h-[75vh] object-container rounded-2xl shadow-2xl border border-white/10 select-none transition-all duration-300"
                  />

                  <button
                    onClick={() => setCurrentIndex((prev) => (prev === selectedAkun.gallery.length - 1 ? 0 : prev + 1))}
                    className="absolute right-0 md:right-16 z-10 p-3 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-all backdrop-blur-md opacity-0 group-hover:opacity-100"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
              </div>

              <div className="mt-6 px-4 py-1.5 bg-white/10 rounded-full border border-white/10 text-white/70 text-xs font-bold tracking-widest uppercase">
                {currentIndex +1} / {selectedAkun.gallery.length}
              </div>

              <button
                onClick={() => setCurrentIndex(null)}
                className="mt-4 text-zinc-500 hover:text-white text-[10px] font-bold uppercase tracking-[0.3em] transition-colors"
                >
                  Close Preview
                </button>
          </div>
        </div>
      )}

      <footer className="relative z-10 mt-32">
        <div className="max-w-6xl mx-auto px-10 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src="icon.png" alt="logo" className="h-10 w-10" />
                <h2 className="text-white text-2xl font-black tracking-tighter">TIX<span className="text-blue-500">STORE</span></h2>
              </div>
              <p className="text-zinc-500 text-sm max-w-sm leading-relaxed">
                The most trusted marketplace for premium gaming accounts. Secure, fast, and reliable digital goods delivery.
              </p>
            </div>
            <div className="text-left md:text-right space-y-2">
              <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest">© 2025 TixStore Digital</p>
              <div className="flex md:justify-end gap-6 text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
                <a href="#" className="hover:text-blue-500 transition">Terms</a>
                <a href="#" className="hover:text-blue-500 transition">Privacy</a>
                <a href="https://wa.me/6285184552812" className="hover:text-blue-500 transition">Support</a>
              </div>
            </div>
          </div>
        </div>
            </footer>
          </main>
        );
      }
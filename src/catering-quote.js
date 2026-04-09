
// Packages with menu details and pricing <-- where one can add or delete a package of choice
// Follow format of existing packages to ensure proper display and calculation
const PACKAGES = {
  classic: {
    name: 'Classic Filipino Feast',
    pricePerPax: 650,
    main: ['Lechon Kawali', 'Kare-Kare', 'Chicken Adobo', 'Sinigang na Baboy', 'Pancit Bihon', 'Steamed Rice (unlimited)'],
    desserts: ['Leche Flan', 'Biko', 'Fresh Fruit Platter'],
    beverages: ['Calamansi Juice', 'Bottled Water'],
    inclusions: ['Buffet Setup & Chafing Dishes', 'Food Warmer Attendants (2)', 'Disposable Plates & Utensils', 'Basic Tablecloth'],
  },
  fiesta: {
    name: 'Fiesta Grande',
    pricePerPax: 950,
    main: ['Crispy Lechon Belly', 'Seafood Paella', 'Beef Caldereta', 'Grilled Bangus', 'Chicken Inasal', 'Dinuguan', 'Pancit Canton', 'Steamed Rice (unlimited)'],
    desserts: ['Bibingka', 'Halo-Halo Station', 'Leche Flan', 'Cassava Cake'],
    beverages: ['Buko Pandan Juice', 'Lemonade', 'Bottled Water'],
    inclusions: ['Full Buffet Setup', 'Uniformed Attendants (4)', 'Real Plates & Silverware', 'Linen Tablecloths', 'Buffet Signage', 'Chafing Dishes'],
  },
  corporate: {
    name: 'Corporate Set Menu',
    pricePerPax: 750,
    main: ['Roast Chicken', 'Fish Fillet in Butter Sauce', 'Pasta Aglio e Olio', 'Mixed Vegetable Stir-fry', 'Steamed Rice'],
    desserts: ['Mini Pastries Assortment', 'Fresh Fruit Cup'],
    beverages: ['Brewed Coffee & Tea', 'Bottled Water'],
    inclusions: ['Plated or Buffet Setup', 'Attendants (2)', 'Compostable Serviceware', 'Professional Setup'],
  },
  premium: {
    name: 'Premium Celebration',
    pricePerPax: 1400,
    main: ['Whole Lechon de Leche', 'Seafood Thermidor', 'Beef Tenderloin', 'Chicken Cordon Bleu', 'Lapu-Lapu Fillet', 'Chopsuey Premium', 'Pancit Palabok', 'Jasmine Rice (unlimited)'],
    desserts: ['Live Crepe Station', 'Mini Dessert Bar (6 varieties)', 'Espresso & Coffee Station', 'Artisanal Bread Basket'],
    beverages: ['Unlimited Softdrinks', 'Bottled Mineral Water', 'Fruit Punch Station'],
    inclusions: ['Premium Table Setup', 'Head Chef On-Site', 'Uniformed Attendants (6+)', 'Fine China & Silverware', 'Linen & Napkins', 'Free Taste (prior to event)', 'Coordinator Liaison'],
  },
};

// Extra add-ons <-- where one can add or delete an add-on of choice
const EXTRAS = [
  { id: 'drinks_extra', label: 'Unlimited Softdrinks Upgrade', price: 120, unit: '/pax' },
  { id: 'wine', label: 'Wine Service (1 bottle/10 pax)', price: 350, unit: '/10 pax' },
  { id: 'beer', label: 'Beer Station (San Miguel)', price: 180, unit: '/pax' },
  { id: 'juice_bar', label: 'Fresh Juice Bar (3 flavors)', price: 95, unit: '/pax' },
  { id: 'mocktail', label: 'Mocktail Station', price: 150, unit: '/pax' },
  { id: 'coffee_station', label: 'Coffee & Tea Station', price: 2500, unit: 'flat' },
  { id: 'birthday_cake', label: 'Custom Celebration Cake (1 tier)', price: 2800, unit: 'flat' },
  { id: 'pasta_station', label: 'Live Pasta Station', price: 4500, unit: 'flat' },
  { id: 'dessert_bar', label: 'Extra Dessert Variety (+4)', price: 3200, unit: 'flat' },
  { id: 'rentals', label: 'Extra Tables & Chairs (per 10)', price: 800, unit: '/10 pcs' },
  { id: 'backdrop', label: 'Linen Backdrop Setup', price: 1800, unit: 'flat' },
];

/* --- Build Extras Checkboxes --- */
function buildExtras() {
  const grid = document.getElementById('extrasGrid');
  grid.innerHTML = EXTRAS.map(e => `
    <label class="check-item" id="ei-${e.id}">
      <input type="checkbox" value="${e.id}" onchange="toggleExtra(this,'${e.id}')">
      <div>
        <div class="ci-label">${e.label}</div>
        <div class="ci-price">₱${e.price.toLocaleString()} ${e.unit}</div>
      </div>
    </label>
  `).join('');
}

/* --- Toggle Extra Checkbox --- */
function toggleExtra(el, id) {
  const wrapper = document.getElementById('ei-' + id);
  wrapper.classList.toggle('checked', el.checked);
  updateSummary();
}

/* --- Toggle Dietary Tag --- */
function toggleTag(el) {
  el.classList.toggle('active');
}

/* --- Update Package Display --- */
function updatePackage() {
  const val = document.getElementById('packageSelect').value;
  const display = document.getElementById('packageDisplay');
  if (!val) { display.classList.remove('visible'); updateSummary(); return; }

  const pkg = PACKAGES[val];
  document.getElementById('pkgName').textContent = pkg.name;
  document.getElementById('pkgPrice').textContent = '₱' + pkg.pricePerPax.toLocaleString() + ' / person';
  document.getElementById('pkgMainContent').innerHTML = `
    <div class="pkg-section-title">Main Dishes</div>
    <div class="pkg-items">${pkg.main.map(i => `<span class="pkg-chip">${i}</span>`).join('')}</div>
    <div class="pkg-section-title">Desserts</div>
    <div class="pkg-items">${pkg.desserts.map(i => `<span class="pkg-chip">${i}</span>`).join('')}</div>
    <div class="pkg-section-title">Beverages (Included)</div>
    <div class="pkg-items">${pkg.beverages.map(i => `<span class="pkg-chip">${i}</span>`).join('')}</div>
    <div class="pkg-section-title">Service Inclusions</div>
    <div class="pkg-items">${pkg.inclusions.map(i => `<span class="pkg-chip">${i}</span>`).join('')}</div>
  `;
  display.classList.add('visible');
  updateSummary();
}

/* --- Calculate Extras Total --- */
function getSelectedExtrasTotal(guests) {
  let total = 0;
  EXTRAS.forEach(e => {
    const cb = document.querySelector(`input[value="${e.id}"]`);
    if (cb && cb.checked) {
      if (e.unit === 'flat') total += e.price;
      else if (e.unit === '/pax') total += e.price * guests;
      else total += e.price;
    }
  });
  return total;
}

/* --- Update Sidebar Summary --- */
function updateSummary() {
  // Get current form values
  const eventName = document.getElementById('eventName').value || '—';
  const guests = parseInt(document.getElementById('guestCount').value) || 0;
  const dateVal = document.getElementById('eventDate').value;
  const pkgVal = document.getElementById('packageSelect').value;
  const pkg = pkgVal ? PACKAGES[pkgVal] : null;

  document.getElementById('sum-event').textContent = eventName;

  // Format and display date
  if (dateVal) {
    const d = new Date(dateVal + 'T00:00:00');
    document.getElementById('sum-date').textContent = d.toLocaleDateString('en-PH', { month: 'long', day: 'numeric', year: 'numeric' });
  } else {
    document.getElementById('sum-date').textContent = '—';
  }

  // Guests and package name
  document.getElementById('sum-guests').textContent = guests > 0 ? guests + ' pax' : '—';
  document.getElementById('sum-package').textContent = pkg ? pkg.name : '—';

  // Calculate totals if package and guest count are valid
  if (pkg && guests > 0) {
    const pkgSub = pkg.pricePerPax * guests;
    const extras = getSelectedExtrasTotal(guests);
    const preVAT = pkgSub + extras;
    const vat = preVAT * 0.12;
    const total = preVAT + vat;

    document.getElementById('sum-pkg-sub').textContent = '₱' + pkgSub.toLocaleString();
    document.getElementById('sum-extras').textContent = extras > 0 ? '₱' + extras.toLocaleString() : '₱ 0';
    document.getElementById('sum-vat').textContent = '₱' + Math.round(vat).toLocaleString();
    document.getElementById('sum-total').textContent = '₱' + Math.round(total).toLocaleString();
  } else {
    document.getElementById('sum-pkg-sub').textContent = '₱ —';
    document.getElementById('sum-extras').textContent = '₱ —';
    document.getElementById('sum-vat').textContent = '₱ —';
    document.getElementById('sum-total').textContent = '₱ —';
  }

  // Update progress bar
  const reviewProgress = document.getElementById('review_progress');
  const eventProgress = document.getElementById('event_progress');
  const packageProgress = document.getElementById('package_progress');
  const dietaryProgress = document.getElementById('dietary_progress');

  if (pkg && guests > 0 && eventName !== '—') {
    reviewProgress.classList.add('active');
    eventProgress.classList.remove('active');
    packageProgress.classList.remove('active');
    dietaryProgress.classList.remove('active');
  } else {
    reviewProgress.classList.remove('active');
    eventProgress.classList.add('active');
    packageProgress.classList.add('active');
    dietaryProgress.classList.add('active');
  }

}

/* --- Generate Reference Number --- */
function generateRef() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return 'GNG-' + Array.from({length: 8}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

/* --- Show Quote Modal --- */
function showQuote() {
  // Get current form values for quote generation
  const guests = parseInt(document.getElementById('guestCount').value) || 0;
  const pkgVal = document.getElementById('packageSelect').value;
  const pkg = pkgVal ? PACKAGES[pkgVal] : null;
  const fullName = document.getElementById('fullName').value;
  const eventName = document.getElementById('eventName').value;

  if (!pkg || !guests || !fullName) { // warning if the listed items are not filled out
    alert('Please fill in at least: Event Name, Full Name, Number of Guests, and a Package selection before generating a quote.');
    return;
  }

  // Calculate totals for quote
  const pkgSub = pkg.pricePerPax * guests;
  const extras = getSelectedExtrasTotal(guests);
  const preVAT = pkgSub + extras;
  const vat = preVAT * 0.12;
  const total = preVAT + vat;

  // Set quote details in modal
  document.getElementById('refNumber').textContent = generateRef();

  // Format date for quote
  const dateVal = document.getElementById('eventDate').value;
  let dateStr = '—';
  if (dateVal) {
    const d = new Date(dateVal + 'T00:00:00');
    dateStr = d.toLocaleDateString('en-PH', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  }

  // Get active dietary tags for quote
  const activeTags = [...document.querySelectorAll('.diet-tag.active')].map(t => t.textContent).join(', ') || 'None specified';

  // Build selected extras breakdown for quote
  const selectedExtrasHTML = EXTRAS.filter(e => {
    const cb = document.querySelector(`input[value="${e.id}"]`);
    return cb && cb.checked;
  }).map(e => {
    let amt;
    if (e.unit === 'flat') amt = e.price;
    else if (e.unit === '/pax') amt = e.price * guests;
    else amt = e.price;
    return `<div class="quote-line"><span class="ql-label">${e.label}</span><span>₱${amt.toLocaleString()}</span></div>`;
  }).join('') || '<div class="quote-line"><span class="ql-label" style="font-style:italic">No extras selected</span><span>₱0</span></div>';

  // Get special requests for quote
  const specialReq = document.getElementById('specialRequests').value || 'None';

  // Builds the quote modal
  document.getElementById('modalBody').innerHTML = `
    <div class="quote-section">
      <div class="quote-section-title">Client &amp; Event Details</div>
      <div class="quote-line"><span class="ql-label">Client Name</span><span>${fullName}</span></div>
      <div class="quote-line"><span class="ql-label">Email</span><span>${document.getElementById('email').value || '—'}</span></div>
      <div class="quote-line"><span class="ql-label">Mobile</span><span>${document.getElementById('phone').value || '—'}</span></div>
      <div class="quote-line"><span class="ql-label">Event</span><span>${eventName}</span></div>
      <div class="quote-line"><span class="ql-label">Event Type</span><span>${document.getElementById('eventType').value || '—'}</span></div>
      <div class="quote-line"><span class="ql-label">Date</span><span>${dateStr}</span></div>
      <div class="quote-line"><span class="ql-label">Venue</span><span>${document.getElementById('venue').value || '—'}</span></div>
      <div class="quote-line"><span class="ql-label">No. of Guests</span><span>${guests} pax</span></div>
    </div>

    <div class="quote-section">
      <div class="quote-section-title">Package</div>
      <div class="quote-line"><span class="ql-label">${pkg.name}</span><span>₱${pkg.pricePerPax.toLocaleString()} × ${guests} pax</span></div>
      <div class="quote-line"><span class="ql-label">Package Subtotal</span><span>₱${pkgSub.toLocaleString()}</span></div>
    </div>

    <div class="quote-section">
      <div class="quote-section-title">Extras &amp; Add-Ons</div>
      ${selectedExtrasHTML}
    </div>

    <div class="quote-section">
      <div class="quote-section-title">Dietary &amp; Special Notes</div>
      <div class="quote-line"><span class="ql-label">Dietary Tags</span><span style="text-align:right;max-width:280px">${activeTags}</span></div>
      <div class="quote-line"><span class="ql-label">Special Requests</span><span style="text-align:right;max-width:280px;white-space:pre-line">${specialReq}</span></div>
    </div>

    <div class="quote-section">
      <div class="quote-section-title">Price Breakdown</div>
      <div class="quote-line"><span class="ql-label">Package</span><span>₱${pkgSub.toLocaleString()}</span></div>
      <div class="quote-line"><span class="ql-label">Extras</span><span>₱${extras.toLocaleString()}</span></div>
      <div class="quote-line"><span class="ql-label">Sub-total (excl. VAT)</span><span>₱${preVAT.toLocaleString()}</span></div>
      <div class="quote-line"><span class="ql-label">VAT (12%)</span><span>₱${Math.round(vat).toLocaleString()}</span></div>
    </div>

    <div class="quote-total-row">
      <span class="qt-label">Estimated Grand Total</span>
      <span class="qt-val">₱${Math.round(total).toLocaleString()}</span>
    </div>

    <p style="font-size:0.75rem;color:var(--muted);margin-top:1rem;line-height:1.5">
      This quotation is an estimate only. Final pricing is subject to negotiation and written confirmation.
      Valid for 30 days from date of issuance. Grains and Greens Catering · BIR/DTI Registered.
    </p>
  `;

  // Show quote modal
  document.getElementById('quoteModal').classList.add('show');

  // Update progress bar
  document.getElementById('review_progress').classList.add('active');
  document.getElementById('event_progress').classList.remove('active');
  document.getElementById('package_progress').classList.remove('active');
  document.getElementById('dietary_progress').classList.remove('active');

  
}

/* --- Close Quote Modal --- */
function closeQuote() {
  document.getElementById('quoteModal').classList.remove('show');
}

/* --- Clear Form --- */
function clearForm() {
  if (!confirm('Clear all form entries?')) return;
  document.querySelectorAll('input, select, textarea').forEach(el => el.value = '');
  document.querySelectorAll('.diet-tag').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.check-item').forEach(el => el.classList.remove('checked'));
  document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
  document.getElementById('packageDisplay').classList.remove('visible');
  updateSummary();
}

/* --- Clear Form After Confirmation --- */
function clearAfterConfirmation() {
  document.querySelectorAll('input, select, textarea').forEach(el => el.value = '');
  document.querySelectorAll('.diet-tag').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.check-item').forEach(el => el.classList.remove('checked'));
  document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
  document.getElementById('packageDisplay').classList.remove('visible');
  updateSummary();
  closeQuote();
}

/* --- Event Listeners --- */
// --- Telegram Bot Configuration ---
// Replace these with your actual token and chat ID
const TELEGRAM_BOT_TOKEN = '8682639700:AAGecj3z4GOM3exY5Hv5AqwR3cHqmhiZskE';
const TELEGRAM_CHAT_ID = '8485504593';

async function submitRequestToTelegram() {
  const submitBtn = document.querySelector('.btn-primary');
  
  // 1. Gather ALL Data for a Better Summary
  const refNumber = document.getElementById('refNumber').innerText || 'N/A';
  const fullName = document.getElementById('fullName').value || 'Not provided';
  const email = document.getElementById('email').value || 'Not provided';
  const phone = document.getElementById('phone').value || 'Not provided';
  
  const eventName = document.getElementById('eventName').value || 'N/A';
  const eventDate = document.getElementById('eventDate').value || 'N/A';
  const venue = document.getElementById('venue').value || 'N/A';
  const guests = document.getElementById('guestCount').value || 'N/A';
  
  const packageType = document.getElementById('sum-package').innerText || 'N/A';
  const total = document.getElementById('sum-total').innerText || 'N/A';
  const specialRequests = document.getElementById('specialRequests').value || 'None';
  const activeAddonsList = EXTRAS.filter(e => {
    const cb = document.querySelector(`input[value="${e.id}"]`);
    return cb && cb.checked;
  }).map(e => e.label).join(', ') || 'None';
  const activeTags = Array.from(document.querySelectorAll('.diet-tag.active'))
                          .map(tag => tag.innerText).join(', ') || 'None';
// 2. Format the Detailed Message (Telegram Caption)
  const detailedMessage = `
🛎 *NEW ORDER: ${refNumber}*

👤 *CLIENT INFO*
• Name: ${fullName}
• Phone: ${phone}
• Email: ${email}

📅 *EVENT DETAILS*
• Event: ${eventName}
• Date: ${eventDate}
• Venue: ${venue}
• Pax: ${guests} guests

🍽 *CATERING SETUP*
• Package: ${packageType}
• Add-ons: ${activeAddonsList}
• Dietary Restrictions: ${activeTags}
• Special Notes: ${specialRequests}

💰 *ESTIMATED TOTAL:* ${total}
  `;

try {
    // UI Feedback
    submitBtn.innerText = "Generating PDF & Sending...";
    submitBtn.disabled = true;

    // 3. Prepare the element to be converted to PDF
    // INSTEAD of targeting the whole '.modal', we ONLY target the clean inner body
    const elementToPrint = document.getElementById('modalBody');
   
    const tempHeader = document.createElement('div');
    tempHeader.innerHTML = `
      <div style="text-align: center; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 1px solid #ddd;">
        <h2 style="margin: 0; font-family: 'Playfair Display', serif; color: #222;">Grains & Greens Catering</h2>
        <p style="margin: 5px 0 0 0; font-size: 14px; color: #555;">Quotation / Order ID: <strong style="color: #000;">${refNumber}</strong></p>
      </div>
    `;
    elementToPrint.prepend(tempHeader);
    
    // Temporarily force the text to be black and properly sized for a white piece of paper
    const originalCSS = elementToPrint.style.cssText;
    elementToPrint.style.cssText += `
      background: white !important;
      color: black !important;
      padding: 20px !important;
      width: 730px !important;
      max-width: none !important;
      font-size: 14px !important;
    `;

    // Configure PDF settings for a standard 8.5x11 page
    const opt = {
      margin:       0.5,
      filename:     `Grains_Greens_Quote_${refNumber}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { 
        scale: 2, 
        useCORS: true,
        letterRendering: true, // Helps with text spacing
        scrollY: 0 
      },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Generate the PDF as a Blob (binary file data)
    const pdfBlob = await html2pdf().set(opt).from(elementToPrint).output('blob');

    elementToPrint.removeChild(tempHeader);
    
    const fileURL = URL.createObjectURL(pdfBlob);
    const downloadLink = document.createElement('a');
    downloadLink.href = fileURL;
    downloadLink.download = `Grains_Greens_Quote_${refNumber}.pdf`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(fileURL); // Clean up memory

    // Restore the modal body to its normal look
    elementToPrint.style.cssText = originalCSS;

    // 4. Send File to Telegram using FormData
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`;
    
    const formData = new FormData();
    formData.append('chat_id', TELEGRAM_CHAT_ID);
    formData.append('document', pdfBlob, `Quote_${refNumber}.pdf`);
    formData.append('caption', detailedMessage);
    formData.append('parse_mode', 'Markdown'); 

    const response = await fetch(url, {
      method: 'POST',
      body: formData 
    });

    if (response.ok) {
      alert(`Success! Your request has been submitted.\n\nPlease save your Order ID for reference: ${refNumber}\n\nOur team will contact you shortly.`);
      if (typeof closeQuote === 'function') closeQuote(); 
    } else {
      const errorData = await response.text();
      console.error('Telegram API error:', errorData);
      alert('Failed to send request. Check console for details.');
    }

  } catch (error) {
    console.error('Error generating PDF or sending message:', error);
    alert('An error occurred. Please try again.');
  } finally {
    // Reset button UI
    submitBtn.innerText = "Submit Request →";
    submitBtn.disabled = false;
  }

}

document.addEventListener('DOMContentLoaded', () => {
  buildExtras();
});

/* ══════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════ */
const D = {
  students:[
    // ── Boys — Intermediate ──
    {id:'STU-2024-010',name:'Noman Arshad',father:'Arshad Mehmood',roll:'B-ICS-2024-01',gender:'Male',dept:'ICS (Boys)',cls:'Inter-ICS',section:'A',sem:'1st Year',fee:15000,status:'Pending',contact:'0300-9999222',address:'Township, Lahore'},
    {id:'STU-2024-012',name:'Kamran Ali',father:'Ali Raza',roll:'B-FSE-2024-01',gender:'Male',dept:'FSc Pre-Engineering (Boys)',cls:'Inter-FSc-Pre-Eng',section:'A',sem:'2nd Year',fee:14000,status:'Overdue',contact:'0300-9999444',address:'Faisal Town, Lahore'},
    {id:'STU-2024-014',name:'Shahid Hussain',father:'Hussain Bakhsh',roll:'B-FA-2024-01',gender:'Male',dept:'FA (Boys)',cls:'Inter-FA',section:'A',sem:'2nd Year',fee:12000,status:'Pending',contact:'0300-9999666',address:'Sant Nagar, Lahore'},
    {id:'STU-2024-016',name:'Asad Rehman',father:'Abdul Rehman',roll:'B-FSC-2024-01',gender:'Male',dept:'FSc Pre-Medical (Boys)',cls:'Inter-FSc-Pre-Med',section:'B',sem:'1st Year',fee:14000,status:'Paid',contact:'0300-9991111',address:'Gulshan Ravi, Lahore'},
    // ── Girls — Intermediate ──
    {id:'STU-2024-009',name:'Hina Bashir',father:'Bashir Ahmed',roll:'G-ICS-2024-01',gender:'Female',dept:'ICS (Girls)',cls:'Inter-ICS',section:'A',sem:'1st Year',fee:15000,status:'Paid',contact:'0300-9999111',address:'Ichhra, Lahore'},
    {id:'STU-2024-011',name:'Sana Tariq',father:'Tariq Butt',roll:'G-FSC-2024-01',gender:'Female',dept:'FSc Pre-Medical (Girls)',cls:'Inter-FSc-Pre-Med',section:'A',sem:'1st Year',fee:14000,status:'Paid',contact:'0300-9999333',address:'Shadman, Lahore'},
    {id:'STU-2024-013',name:'Rabia Malik',father:'Malik Nawaz',roll:'G-ICM-2024-01',gender:'Female',dept:'ICom (Girls)',cls:'Inter-ICom',section:'A',sem:'1st Year',fee:13000,status:'Paid',contact:'0300-9999555',address:'Cavalry Ground, Lahore'},
    {id:'STU-2024-015',name:'Nadia Khalid',father:'Khalid Mehmood',roll:'G-FA-2024-01',gender:'Female',dept:'FA (Girls)',cls:'Inter-FA',section:'B',sem:'2nd Year',fee:12000,status:'Overdue',contact:'0300-9992222',address:'Saggian, Lahore'},
  ],
  departments:['Computer Science','Mathematics','Physics','Commerce','Pre-Medical','Pre-Engineering','Arts','Administration'],
  employees:[
    {id:'EMP-2024-001',name:'Dr. Tariq Ahmed',desig:'Professor',dept:'Computer Science',salary:120000,allow:20000,contact:'0321-1111111',email:'tariq@gct.edu.pk',address:'DHA, Lahore',status:'Active'},
    {id:'EMP-2024-002',name:'Ms. Hina Batool',desig:'Lecturer',dept:'Mathematics',salary:80000,allow:12000,contact:'0321-2222222',email:'hina@gct.edu.pk',address:'Gulberg, Lahore',status:'Active'},
    {id:'EMP-2024-003',name:'Mr. Kashif Raza',desig:'Demonstrator',dept:'Physics',salary:55000,allow:8000,contact:'0321-3333333',email:'kashif@gct.edu.pk',address:'Model Town, Lahore',status:'Active'},
    {id:'EMP-2024-004',name:'Dr. Samina Akhtar',desig:'HOD',dept:'Commerce',salary:140000,allow:25000,contact:'0321-4444444',email:'samina@gct.edu.pk',address:'Johar Town, Lahore',status:'Active'},
    {id:'EMP-2024-005',name:'Mr. Adeel Hussain',desig:'Admin Officer',dept:'Administration',salary:65000,allow:10000,contact:'0321-5555555',email:'adeel@gct.edu.pk',address:'Allama Iqbal Town, Lahore',status:'Active'},
  ],
  fees:[
    // Inter Boys
    {student:'Noman Arshad',    roll:'B-ICS-2024-01',sem:'1st Year',amt:15000,date:'-',          method:'-',            receipt:'-',       status:'Pending',  dueDate:'2025-02-15',category:'Tuition'},
    {student:'Kamran Ali',      roll:'B-FSE-2024-01',sem:'2nd Year',amt:14000,date:'-',          method:'-',            receipt:'-',       status:'Overdue',  dueDate:'2025-01-05',category:'Tuition'},
    {student:'Shahid Hussain',  roll:'B-FA-2024-01', sem:'2nd Year',amt:12000,date:'-',          method:'-',            receipt:'-',       status:'Pending',  dueDate:'2025-02-20',category:'Tuition'},
    {student:'Asad Rehman',     roll:'B-FSC-2024-01',sem:'1st Year',amt:14000,date:'5 Jan 2025', method:'Cash',         receipt:'REC-1006',status:'Paid',    dueDate:'2025-01-10',category:'Tuition'},
    // Inter Girls
    {student:'Hina Bashir',     roll:'G-ICS-2024-01',sem:'1st Year',amt:15000,date:'3 Jan 2025', method:'Cash',         receipt:'REC-1007',status:'Paid',    dueDate:'2025-01-10',category:'Tuition'},
    {student:'Sana Tariq',      roll:'G-FSC-2024-01',sem:'1st Year',amt:14000,date:'7 Jan 2025', method:'Online',       receipt:'REC-1008',status:'Paid',    dueDate:'2025-01-15',category:'Tuition'},
    {student:'Rabia Malik',     roll:'G-ICM-2024-01',sem:'1st Year',amt:13000,date:'9 Jan 2025', method:'Cash',         receipt:'REC-1009',status:'Paid',    dueDate:'2025-01-15',category:'Tuition'},
    {student:'Nadia Khalid',    roll:'G-FA-2024-01', sem:'2nd Year',amt:12000,date:'-',          method:'-',            receipt:'-',       status:'Overdue',  dueDate:'2025-01-08',category:'Tuition'},
    // Example Admission / Transport fee records
    {student:'Noman Arshad',    roll:'B-ICS-2024-01',sem:'1st Year',amt:5000, date:'2 Jan 2025', method:'Cash',         receipt:'REC-1010',status:'Paid',    dueDate:'2025-01-05',category:'Admission'},
    {student:'Kamran Ali',      roll:'B-FSE-2024-01',sem:'2nd Year',amt:3000, date:'-',          method:'-',            receipt:'-',       status:'Overdue',  dueDate:'2025-01-05',category:'Transport'},
  ],
  salaries:[
    {salId:'SAL-2025-001',name:'Dr. Tariq Ahmed',desig:'Professor',basic:120000,allow:20000,deduct:0,month:'March 2025',status:'Paid'},
    {salId:'SAL-2025-002',name:'Ms. Hina Batool',desig:'Lecturer',basic:80000,allow:12000,deduct:0,month:'March 2025',status:'Paid'},
    {salId:'SAL-2025-003',name:'Mr. Kashif Raza',desig:'Demonstrator',basic:55000,allow:8000,deduct:0,month:'March 2025',status:'Paid'},
    {salId:'SAL-2025-004',name:'Dr. Samina Akhtar',desig:'HOD',basic:140000,allow:25000,deduct:0,month:'March 2025',status:'Pending'},
    {salId:'SAL-2025-005',name:'Mr. Adeel Hussain',desig:'Admin Officer',basic:65000,allow:10000,deduct:0,month:'March 2025',status:'Paid'},
  ],
  expCategories:[
    {name:'IT & Labs',   icon:'🖥️', color:'#20954a', budget:150000},
    {name:'Utilities',   icon:'🏢', color:'#f59e0b', budget:100000},
    {name:'Library',     icon:'📚', color:'#3b82f6', budget:80000},
    {name:'Maintenance', icon:'🧹', color:'#ef4444', budget:60000},
    {name:'Stationery',  icon:'✏️', color:'#8b5cf6', budget:30000},
    {name:'Transport',   icon:'🚌', color:'#06b6d4', budget:40000},
    {name:'Events',      icon:'🎉', color:'#ec4899', budget:50000},
    {name:'Other',       icon:'📦', color:'#6b7280', budget:20000},
  ],
  expenses:[
    {desc:'Lab Equipment Purchase',cat:'IT & Labs',  amt:42000,date:'5 Jan 2025', vendor:'Agha Steel',   approver:'Principal',status:'Approved',year:'2024-25'},
    {desc:'Electricity Bill',       cat:'Utilities',  amt:18000,date:'8 Jan 2025', vendor:'LESCO',        approver:'Admin',    status:'Approved',year:'2024-25'},
    {desc:'Library Books',          cat:'Library',    amt:15000,date:'10 Jan 2025',vendor:'Ali Books',    approver:'Principal',status:'Approved',year:'2024-25'},
    {desc:'Building Maintenance',   cat:'Maintenance',amt:12000,date:'12 Jan 2025',vendor:'Noor Const.',  approver:'Admin',    status:'Approved',year:'2024-25'},
    {desc:'Office Stationery',      cat:'Stationery', amt:5000, date:'15 Jan 2025',vendor:'Pak Traders',  approver:'Admin',    status:'Approved',year:'2024-25'},
    {desc:'Internet Connection',    cat:'Utilities',  amt:8000, date:'18 Jan 2025',vendor:'StormFiber',   approver:'IT Dept',  status:'Approved',year:'2024-25'},
    {desc:'Projector Repair',       cat:'IT & Labs',  amt:7500, date:'20 Jan 2025',vendor:'Tech Zone',    approver:'HOD',      status:'Approved',year:'2024-25'},
    {desc:'Sports Equipment',       cat:'Other',      amt:10000,date:'22 Jan 2025',vendor:'Sports World', approver:'Principal',status:'Approved',year:'2024-25'},
    {desc:'Annual Day Event',       cat:'Events',     amt:35000,date:'3 Feb 2025', vendor:'Event Co.',    approver:'Principal',status:'Approved',year:'2024-25'},
    {desc:'Bus Fuel & Maintenance', cat:'Transport',  amt:22000,date:'10 Feb 2025',vendor:'Shell',        approver:'Admin',    status:'Approved',year:'2024-25'},
  ],
  budget:[
    {dept:'ICS',           allocated:120000,spent:0,expCats:['IT & Labs'],   year:'2024-25'},
    {dept:'FSc Pre-Med',   allocated:110000,spent:0,expCats:['Maintenance'], year:'2024-25'},
    {dept:'FSc Pre-Eng',   allocated:110000,spent:0,expCats:[],              year:'2024-25'},
    {dept:'ICom',          allocated:80000, spent:0,expCats:['Stationery'],  year:'2024-25'},
    {dept:'FA',            allocated:70000, spent:0,expCats:['Events'],      year:'2024-25'},
    {dept:'Administration',allocated:120000,spent:0,expCats:['Utilities','Transport','Other'],year:'2024-25'},
    {dept:'Library',       allocated:80000, spent:0,expCats:['Library'],     year:'2024-25'},
  ],
  fines:[
    {fineId:'FIN-1',student:'Kamran Ali', roll:'B-FSE-2024-01', reason:'Uniform Violation', amt:500, date:'12 Jan 2025', status:'Pending'},
    {fineId:'FIN-2',student:'Nadia Khalid', roll:'G-FA-2024-01', reason:'Late Attendance', amt:300, date:'8 Jan 2025', status:'Paid'},
  ],
  // ── Payment History — one row per actual payment transaction ──
  // Separate from D.fees (which holds the running amt/paidAmt balance per
  // instalment) so that multiple partial payments against the same
  // instalment are never overwritten, only appended to.
  feePayments:[],
  tx:[],
  manualTx:[],
  seq:{fee:0,sal:0,exp:0,fine:2,tf:0,tftx:0},
  // ── Transport Fee module ── own record set, kept separate from the
  // general Tuition fee, since only some students actually use the
  // college transport/van — not everyone gets one. Has its own
  // Pending/Overdue/Paid lifecycle and its own dedicated voucher, mirroring
  // how the Disciplinary Fines module keeps its own independent records.
  transportFees:[
    {tfId:'TF-1', student:'Kamran Ali', roll:'B-FSE-2024-01', route:'Model Town → Campus', amt:2500, date:'-', method:'-', receipt:'-', status:'Overdue', dueDate:'2025-01-05'},
    {tfId:'TF-2', student:'Hina Bashir', roll:'G-ICS-2024-01', route:'Johar Town → Campus', amt:2500, date:'3 Jan 2025', method:'Cash', receipt:'TFR-2001', status:'Paid', dueDate:'2025-01-10'},
  ],
  increments:[],
  leaves:[],
  classes:[
    {id:'CLS-001', name:'ICS', code:'Inter-ICS', gender:'Boys', fee:15000, sections:['A','B','C']},
    {id:'CLS-002', name:'ICS', code:'Inter-ICS', gender:'Girls', fee:15000, sections:['A','B']},
    {id:'CLS-003', name:'FSc Pre-Medical', code:'Inter-FSc-Pre-Med', gender:'Boys', fee:14000, sections:['A','B','C']},
    {id:'CLS-004', name:'FSc Pre-Medical', code:'Inter-FSc-Pre-Med', gender:'Girls', fee:14000, sections:['A','B']},
    {id:'CLS-005', name:'FSc Pre-Engineering', code:'Inter-FSc-Pre-Eng', gender:'Boys', fee:14000, sections:['A','B']},
    {id:'CLS-006', name:'FSc Pre-Engineering', code:'Inter-FSc-Pre-Eng', gender:'Girls', fee:14000, sections:['A']},
    {id:'CLS-007', name:'ICom', code:'Inter-ICom', gender:'Boys', fee:13000, sections:['A','B']},
    {id:'CLS-008', name:'ICom', code:'Inter-ICom', gender:'Girls', fee:13000, sections:['A']},
    {id:'CLS-009', name:'FA', code:'Inter-FA', gender:'Boys', fee:12000, sections:['A']},
    {id:'CLS-010', name:'FA', code:'Inter-FA', gender:'Girls', fee:12000, sections:['A']},
  ],
  activeYear:'2024-25',
  settings:{
    instName:'Superior College',
    city:'Lahore',
    academicYear:'2024–25',
    adminEmail:'admin@superiorcollege.edu.pk',
    contact:'+92-300-0000000',
    address:'Main Campus, Lahore, Pakistan',
    lateFeePct:5,
    feeDueDay:25,
    sessionTimeoutMin:15,
    // ── Bank / payment details shown on every voucher — configurable here
    // instead of hard-coded in the voucher template (spec section 9).
    bankName:'MCB Bank Ltd',
    bankBranch:'Johar Town',
    bankAccountTitle:'Superior College',
    bankAccountNo:'0123456789',
    bankIBAN:'PK00MCB0000000123456789',
    customerCode:'SC',
    voucherPrefix:'FEE',
    // ── Default voucher instructions — configurable, not permanently
    // hard-coded (spec section 12). Edit this array from Settings.
    voucherInstructions:[
      'Fee must be deposited on or before the due date.',
      'Only the amount specified on the fee voucher is acceptable.',
      'Fee once paid is non-refundable and non-transferable, subject to institution policy.',
      'Students must retain the paid voucher/receipt for their records.',
      'For fee-related queries, contact the Accounts/Finance Office.',
      'Late payment may be subject to applicable late fees or institution policy.'
    ]
  },
  years:['2024-25','2025-26']
};

/* ══════════════════════════════════════════════════
   ACADEMIC YEAR MANAGEMENT
══════════════════════════════════════════════════ */
function initYearSwitcher(){
  const sel=$('yr-select');
  if(!sel)return;
  sel.innerHTML=D.years.map(y=>`<option value="${y}"${y===D.activeYear?' selected':''}>${y}</option>`).join('');
}

function addNewYear(){
  const input=prompt('Enter new academic year (e.g. 2026-27):');
  if(!input)return;
  const yr=input.trim();
  // Validate format: YYYY-YY or YYYY-YYYY
  if(!/^\d{4}-\d{2,4}$/.test(yr)){toast('❌ Format galat — e.g. 2026-27');return;}
  if(D.years.includes(yr)){toast('⚠️ '+yr+' already exists');return;}
  D.years.push(yr);
  initYearSwitcher();
  // Auto-switch to new year
  const sel=$('yr-select');
  if(sel) sel.value=yr;
  setActiveYear(yr);
  toast('✅ Year '+yr+' added!');
}

function setActiveYear(year){
  D.activeYear=year;
  // Sync dropdown visually
  const sel=$('yr-select');
  if(sel && sel.value!==year) sel.value=year;
  // Re-render all year-sensitive modules
  try{ rExpenses(); }catch(e){}
  try{ rBudget(); }catch(e){}
  try{ rDash(); }catch(e){}
  toast('📅 Year changed to '+year);
}

// helper — get expenses for active year only
function activeExpenses(){
  return D.expenses.filter(e=>!e.year||e.year===D.activeYear);
}

// helper — get budget items for active year only
function activeBudget(){
  return D.budget.filter(b=>!b.year||b.year===D.activeYear);
}


const $ = id => document.getElementById(id);
const fmt = v => Number(v).toLocaleString('en-PK');
// Net pay helper — clamps at 0 so a deduction larger than (basic+allow) can never
// flip the salary into a negative number (which would show as reversed/negative
// in the Expense ledger). Excess deduction beyond gross is simply capped at gross.
const netPay = s => Math.max(0, (Number(s.basic)||0) + (Number(s.allow)||0) - (Number(s.deduct)||0));
const todayStr = () => new Date().toLocaleDateString('en-PK',{day:'numeric',month:'short',year:'numeric'});
const isoDate = () => new Date().toISOString().slice(0,10);
const avC = i => ['av0','av1','av2','av3'][i%4];
const bdgCls = {Paid:'badge bg-g',Pending:'badge bg-y',Overdue:'badge bg-r',Active:'badge bg-g',Approved:'badge bg-g',Income:'badge bg-g',Expense:'badge bg-r','On Leave':'badge bg-y',Inactive:'badge bg-r',Partial:'badge bg-y','Partial-Overdue':'badge bg-r'};
const bdg = s => `<span class="${bdgCls[s]||'badge bg-y'}">${s==='Partial'?'PARTIALLY PAID':s==='Partial-Overdue'?'PARTIAL (OVERDUE)':s}</span>`;
const bs = 'padding:4px 9px;font-size:11px;border-radius:6px;cursor:pointer;font-family:inherit;border:none;margin-right:3px;';
const C = {g:'#20954a',g2:'#45d47a',o:'#f59e0b',r:'#ef4444',b:'#3b82f6',gr:'#e4ebe6'};
const charts = {};

function mkChart(id,type,data,opts={}) {
  try {
    if (charts[id]) { charts[id].destroy(); delete charts[id]; }
    const el = $(id);
    if (!el || typeof Chart==='undefined') return;
    const isDoughnut = type==='doughnut';
    charts[id] = new Chart(el,{type,data,options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{legend:{position:'bottom',labels:{boxWidth:11,font:{size:11,family:'Plus Jakarta Sans'},padding:10}},...(opts.plugins||{})},
      scales: isDoughnut?{}:{y:{grid:{color:'rgba(0,0,0,.04)'},ticks:{font:{size:11},callback:v=>v>=1000?'Rs'+(v/1000)+'K':'Rs'+v}},x:{grid:{display:false},ticks:{font:{size:11}}}},
    }});
  } catch(e) { console.warn('Chart error',id,e.message); }
}

function ensureTxSeq(){
  // Assigns a permanent sequence number to any record that doesn't have one yet.
  // Once assigned, a record's txSeq (and therefore its transaction ID) never
  // changes or gets reassigned to a different record, even after deletes.
  D.fees.forEach(f=>{if(f.txSeq==null)f.txSeq=++D.seq.fee;});
  D.salaries.forEach(s=>{if(s.txSeq==null)s.txSeq=++D.seq.sal;});
  D.expenses.forEach(e=>{if(e.txSeq==null)e.txSeq=++D.seq.exp;});
  D.transportFees.forEach(t=>{if(t.txSeq==null)t.txSeq=++D.seq.tftx;});
}
function buildTx() {
  ensureTxSeq();
  D.tx=[];
  D.fees.forEach((f,idx)=>{if(f.status==='Paid')D.tx.push({id:'TXN-'+String(f.txSeq).padStart(3,'0'),desc:'Fee - '+f.student,type:'Income',amt:f.amt,date:f.date,cat:'Fees',srcType:'fee',srcIdx:idx});});
  // Transport Fee is real college income too — include Paid transport fee
  // records in the Transactions ledger, same as regular tuition fee.
  D.transportFees.forEach((t,idx)=>{if(t.status==='Paid')D.tx.push({id:'TFTXN-'+String(t.txSeq).padStart(3,'0'),desc:'Transport Fee - '+t.student,type:'Income',amt:t.amt,date:t.date,cat:'Transport',srcType:'transportFee',srcIdx:idx});});
  D.salaries.forEach((s,idx)=>{if(s.status==='Paid')D.tx.push({id:'SAL-'+String(s.txSeq).padStart(2,'0'),desc:'Salary - '+s.name,type:'Expense',amt:netPay(s),date:s.month||todayStr(),cat:'Salaries',srcType:'salary',srcIdx:idx});});
  D.expenses.forEach((e,idx)=>{D.tx.push({id:'EXP-'+String(e.txSeq).padStart(2,'0'),desc:e.desc,type:'Expense',amt:e.amt,date:e.date,cat:e.cat,srcType:'expense',srcIdx:idx});});
  D.manualTx.forEach(m=>D.tx.push(m));
  const el=$('nb-t'); if(el) el.textContent=D.tx.length;
}
try{buildTx();}catch(e){console.warn(e);}

/* ══════════════════════════════════════════════════
   AUTO OVERDUE CHECKER
══════════════════════════════════════════════════ */
function autoCheckOverdue() {
  const today = new Date();
  today.setHours(0,0,0,0); // date only, no time
  let changed = 0;

  D.fees.forEach(f => {
    // Only check Pending fees — skip Paid and already Overdue
    if (f.status !== 'Pending') return;
    if (!f.dueDate) return;

    const due = new Date(f.dueDate);
    due.setHours(0,0,0,0);

    if (due < today) {
      f.status = 'Overdue';
      // Also update the student's status
      const stu = D.students.find(s => s.roll === f.roll);
      if (stu && stu.status !== 'Paid') stu.status = 'Overdue';
      changed++;
    }
  });

  let tfChanged = 0;
  D.transportFees.forEach(t => {
    if (t.status !== 'Pending' || !t.dueDate) return;
    const due = new Date(t.dueDate); due.setHours(0,0,0,0);
    if (due < today) { t.status = 'Overdue'; tfChanged++; }
  });

  if (changed > 0 || tfChanged > 0) {
    buildTx();
    // If the app is visible, refresh the views and show a toast
    if ($('app') && $('app').style.display !== 'none') {
      try { rFees(); } catch(e) {}
      try { rDash(); } catch(e) {}
      try { rStudents(); } catch(e) {}
      try { rTransportFee(); } catch(e) {}
      if (changed>0) try { toast('⚠️ ' + changed + ' fee' + (changed !== 1 ? 's' : '') + ' automatically marked as Overdue'); } catch(e) {}
    }
  }
  return changed + tfChanged;
}

// Check every 60 seconds (while the user has the page open)
setInterval(autoCheckOverdue, 60000);

function dlBlob(blob,name){
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);a.download=name;
  document.body.appendChild(a);a.click();
  document.body.removeChild(a);
  setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}

function buildPrintPage(title, headers, bodyRows, info){
  const ths=headers.map(h=>'<th>'+h+'</th>').join('');
  return '<html><head><meta charset="UTF-8"><style>*{box-sizing:border-box;}body{font-family:Arial,sans-serif;padding:22px;}h2{color:#1a6636;font-size:18px;margin-bottom:6px;}.inf{font-size:12px;color:#666;margin-bottom:12px;}table{width:100%;border-collapse:collapse;}th{background:#1a6636;color:#fff;padding:7px 9px;text-align:left;font-size:11px;}td{padding:7px 9px;border-bottom:1px solid #e0e0e0;font-size:12px;}tr:nth-child(even)td{background:#f5faf6;}@media print{.np{display:none;}}</style></head><body><h2>'+D.settings.instName+' - '+title+'</h2><div class="inf">Generated: '+new Date().toLocaleString()+' | '+info+'</div><table><thead><tr>'+ths+'</tr></thead><tbody>'+bodyRows+'</tbody></table><div class="np" style="margin-top:12px"><button onclick="window.print()" style="padding:7px 16px;background:#1a6636;color:#fff;border:none;border-radius:6px;cursor:pointer;">Print</button></div></body></html>';
}

/* ══════════════════════════════════════════════════
   MULTI-USER AUTH SYSTEM
══════════════════════════════════════════════════ */

// ── Password hashing ──
// NOTE: This is a single-file, client-side app — the full source (including this
// function) is visible to anyone who opens it, so no client-side scheme can give
// real cryptographic secrecy against a determined attacker with the file itself.
// The goal here is narrower: stop raw passwords from sitting in plaintext in the
// USERS array, the Edit User modal, localStorage, and exported/imported JSON
// backups, so a casual glance, a copy-pasted export, or a shoulder-surf doesn't
// hand over every user's real password. It's a simple salted non-cryptographic
// digest, not bcrypt/argon2 — good enough for "don't store/show plaintext",
// not a substitute for a real server-side auth system.
function hashPass(str) {
  const salted = 'scfs_v1::' + String(str);
  let h1 = 0x1505, h2 = 0x811c9dc5;
  for (let i = 0; i < salted.length; i++) {
    const c = salted.charCodeAt(i);
    h1 = (Math.imul(h1, 33) + c) >>> 0;
    h2 = (Math.imul(h2 ^ c, 16777619)) >>> 0;
  }
  return h1.toString(16).padStart(8, '0') + h2.toString(16).padStart(8, '0');
}

// Password strength policy: minimum length + at least one uppercase letter
// and one number. Returns an error message string, or null if the password
// passes. Single source of truth so both "Add/Edit User" and "Change
// Password" enforce the same rule.
function passwordPolicyError(pw) {
  if (pw.length < 8)      return 'Password must be at least 8 characters';
  if (!/[A-Z]/.test(pw))  return 'Password must contain at least one uppercase letter';
  if (!/[0-9]/.test(pw))  return 'Password must contain at least one number';
  return null;
}

// ── Role registry ──
// Single source of truth for a role's display metadata AND its permissions.
// To add a new role (e.g. "cashier"), add ONE entry here — the login role
// cards, the Add/Edit User role dropdown, the Users page role-count cards,
// and the Role Permissions table all render themselves from this object,
// instead of needing edits scattered across many separate places.
const ROLES = {
  admin:      {label:'Admin',      icon:'🛡️', badgeCls:'role-admin',      perms:{canEdit:true,  canDelete:true,  canManageUsers:true,  canViewAudit:true}},
  accountant: {label:'Accountant', icon:'🧾', badgeCls:'role-accountant', perms:{canEdit:true,  canDelete:false, canManageUsers:false, canViewAudit:true}},
  viewer:     {label:'Viewer',     icon:'👁️', badgeCls:'role-viewer',     perms:{canEdit:false, canDelete:false, canManageUsers:false, canViewAudit:false}},
};

// Derived for backward-compat with code that reads PERMS[role] directly.
const PERMS = Object.fromEntries(Object.entries(ROLES).map(([k, v]) => [k, v.perms]));

// ── User Registry ──
// Passwords are stored as hashPass(...) digests, never raw text (see note above).
const USERS = [
  {id:'admin',     name:'Principal Admin', role:'admin',      pass:hashPass('admin123'), active:true, lastLogin:null},
  {id:'accountant',name:'Razia Sultana',   role:'accountant', pass:hashPass('acc123'),   active:true, lastLogin:null},
  {id:'viewer',    name:'Zubair Ahmed',    role:'viewer',     pass:hashPass('view123'),  active:true, lastLogin:null},
];

// Users-list search/filter state (Users page)
let _userFilter = '';

// ── Session state ──
let SESSION = {user:null, loginTime:null, lastActive:null};
function getSessionTimeoutMs(){ return (D.settings.sessionTimeoutMin||15)*60*1000; }
let sessionTimer = null;

// ── Audit log ──
let AUDIT = [];
let _auditFilter = {q:'', type:'', from:'', to:'', page:1};
const AUDIT_PAGE_SIZE = 20;
const _loginAttempts = {}; // username → {count, lockedUntil}

/* ══════════════════════════════════════════════════
   PERSISTENCE — localStorage save/load so data (Settings,
   Students, Fees, Users, Audit Log, etc.) survives a page
   refresh instead of resetting to the seed defaults.
══════════════════════════════════════════════════ */
const STORAGE_KEY='scfs_data_v1';

function loadPersistedData(){
  try{
    const raw=localStorage.getItem(STORAGE_KEY);
    if(!raw)return;
    const saved=JSON.parse(raw);
    if(saved.D && typeof saved.D==='object'){
      Object.keys(saved.D).forEach(k=>{ D[k]=saved.D[k]; });
    }
    if(Array.isArray(saved.USERS)){ USERS.length=0; saved.USERS.forEach(u=>USERS.push(u)); }
    if(Array.isArray(saved.AUDIT)){
      // Revive time strings back into Date objects (JSON.stringify turns Dates into ISO strings)
      AUDIT=saved.AUDIT.map(a=>({...a, time:new Date(a.time)}));
    }
  }catch(e){ console.warn('Saved data could not be loaded, starting with defaults:',e); }
}

function saveData(){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify({D, USERS, AUDIT}));
  }catch(e){ console.warn('Could not save data to localStorage:',e); }
}

loadPersistedData();
try{ window.addEventListener('beforeunload', saveData); }catch(e){}

// Build the login screen's role cards from ROLES so a new role added there
// shows up as a selectable card here too, without editing this HTML.
function populateLoginRoleCards(){
  const wrap = document.querySelector('.role-sel');
  if(!wrap) return;
  wrap.innerHTML = Object.entries(ROLES).map(([key, r], i) =>
    `<div class="role-card${i===0?' active':''}" id="rc-${key}" onclick="selectRole('${key}')">
      <span class="rc-ico">${r.icon}</span>
      <div class="rc-lbl">${r.label}</div>
    </div>`
  ).join('');
}
populateLoginRoleCards();

function auditLog(type, action, overrideUser) {
  const u = overrideUser || SESSION.user;
  AUDIT.unshift({
    time: new Date(),
    username: u ? (u.id || u.username) : '?',
    name: u ? u.name : 'Unknown',
    role: u ? u.role : '-',
    type,  // login|logout|fail|action|change
    action
  });
  if (AUDIT.length > 500) AUDIT.pop();
  saveData(); // auditLog runs after almost every create/update/delete, so this is our autosave hook
}

// ── Role credentials map ──
const ROLE_CREDS = {
  admin:      {uid:'admin',       pass:'admin123', hint:'<strong>admin</strong> / admin123'},
  accountant: {uid:'accountant',  pass:'acc123',   hint:'<strong>accountant</strong> / acc123'},
  viewer:     {uid:'viewer',      pass:'view123',  hint:'<strong>viewer</strong> / view123'},
};

function selectRole(role) {
  Object.keys(ROLES).forEach(r => {
    const card = document.getElementById('rc-'+r);
    if(card) card.classList.toggle('active', r===role);
  });
  const creds = ROLE_CREDS[role];
  if(creds) {
    if($('uid'))       $('uid').value              = creds.uid;
    if($('upass'))     $('upass').value            = creds.pass;
    if($('credText'))  $('credText').innerHTML      = creds.hint;
  }
  if($('loginErr'))     $('loginErr').style.display='none';
  if($('loginLockErr')) $('loginLockErr').style.display='none';
}

// ── Login ──
function doLogin() {
  const uidEl  = $('uid');
  const passEl = $('upass');
  const errEl  = $('loginErr');
  const lockEl = $('loginLockErr');

  if (!uidEl || !passEl) { console.error('Login fields not found'); return; }

  // Normalize the username the same way it's stored (lowercase) so login
  // isn't case-sensitive on the User ID — "Admin" / "ADMIN" / "admin" all match.
  const uid  = uidEl.value.trim().toLowerCase();
  const pass = passEl.value.trim();

  if (errEl)  errEl.style.display  = 'none';
  if (lockEl) lockEl.style.display = 'none';

  if (!uid || !pass) {
    if (errEl) { errEl.textContent = '❌ User ID and Password are required'; errEl.style.display = 'flex'; }
    return;
  }

  // Brute-force lock check
  const att = _loginAttempts[uid] || {count:0, lockedUntil:0};
  if (att.lockedUntil > Date.now()) {
    if (lockEl) lockEl.style.display = 'flex';
    return;
  }

  const user = USERS.find(u => u.id.toLowerCase() === uid && u.pass === hashPass(pass) && u.active);
  if (user) {
    _loginAttempts[uid] = {count:0, lockedUntil:0};
    user.lastLogin = new Date();
    SESSION = {user, loginTime: new Date(), lastActive: Date.now()};
    auditLog('login', 'Logged in');
    const loginPage = $('loginPage');
    const appEl = $('app');
    if (loginPage) loginPage.style.display = 'none';
    if (appEl) { appEl.style.display = 'flex'; appEl.style.flexDirection = 'column'; appEl.style.minHeight = '100vh'; }
    updateSessionUI();
    applyRoleRestrictions();
    startSessionTimer();
    autoCheckOverdue(); // check immediately on login
    try { rDash(); } catch(e) { console.warn('rDash error:', e); }
    try { rClasses(); } catch(e) { console.warn('rClasses error:', e); }
    try { rFines(); } catch(e) { console.warn('rFines error:', e); }
    try { rTransportFee(); } catch(e) { console.warn('rTransportFee error:', e); }
    try { initYearSwitcher(); } catch(e) { console.warn('year switcher error:', e); }
  } else {
    att.count = (att.count||0) + 1;
    if (att.count >= 5) { att.lockedUntil = Date.now() + 30000; att.count = 0; }
    _loginAttempts[uid] = att;
    // Show the actually-attempted username in the log, and if it happens to
    // match a real account (wrong password case) surface that account's
    // name/role too — instead of always logging as "@?" / "Unknown".
    const attemptedAcct = USERS.find(u => u.id.toLowerCase() === uid);
    auditLog('fail', 'Failed login attempt for: ' + uid,
      attemptedAcct ? {id: attemptedAcct.id, name: attemptedAcct.name, role: attemptedAcct.role}
                    : {id: uid, name: 'Unknown user', role: '-'});
    if (errEl) { errEl.textContent = '❌ Incorrect credentials — please try again'; errEl.style.display = 'flex'; }
    if (passEl) { passEl.value = ''; passEl.focus(); }
  }
}

(function(){
  const el=$('upass');if(el)el.addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();});
  const el2=$('uid');if(el2)el2.addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();});
})();

function doLogout() {
  auditLog('logout', 'Logged out');
  stopSessionTimer();
  SESSION = {user:null, loginTime:null, lastActive:null};
  $('lockScreen').style.display = 'none';
  $('app').style.display = 'none';
  $('loginPage').style.display = 'flex';
  // Reset to dashboard
  document.querySelectorAll('.ps').forEach(p=>p.classList.remove('on'));
  const d=$('pg-dashboard');if(d)d.classList.add('on');
}

// ── Session timeout ──
function startSessionTimer() {
  stopSessionTimer();
  sessionTimer = setInterval(() => {
    if (!SESSION.user) return;
    if (Date.now() - SESSION.lastActive > getSessionTimeoutMs()) {
      lockSession();
    }
  }, 10000);
  // Track activity
  ['click','keydown','mousemove'].forEach(ev =>
    document.addEventListener(ev, refreshActivity, {passive:true})
  );
}
function stopSessionTimer() {
  if (sessionTimer) { clearInterval(sessionTimer); sessionTimer = null; }
  ['click','keydown','mousemove'].forEach(ev =>
    document.removeEventListener(ev, refreshActivity)
  );
}
function refreshActivity() { if(SESSION.user) SESSION.lastActive = Date.now(); }

function lockSession() {
  auditLog('action', 'Session auto-locked (inactivity)');
  $('lockpass').value = '';
  $('lock-err').style.display = 'none';
  $('lockScreen').style.display = 'flex';
}

function unlockSession() {
  const p = $('lockpass').value.trim();
  if (SESSION.user && SESSION.user.pass === hashPass(p)) {
    SESSION.lastActive = Date.now();
    $('lockScreen').style.display = 'none';
    $('lock-err').style.display = 'none';
    auditLog('action', 'Session unlocked');
  } else {
    $('lock-err').style.display = 'block';
  }
}

// ── Update UI after login ──
function updateSessionUI() {
  if (!SESSION.user) return;
  const u = SESSION.user;
  const init = u.name[0].toUpperCase();
  const roleLbl = {admin:'👑 Admin', accountant:'🧾 Accountant', viewer:'👁 Viewer'}[u.role] || u.role;
  if($('sb-av-init')) $('sb-av-init').textContent = init;
  if($('sb-username')) $('sb-username').textContent = u.name;
  if($('sb-userrole')) $('sb-userrole').textContent = roleLbl;
  if($('tb-av')) $('tb-av').textContent = init;
  if($('tb-username')) $('tb-username').textContent = u.name;
  if($('tb-rolebadge')) {
    const cls = {admin:'role-admin',accountant:'role-accountant',viewer:'role-viewer'}[u.role]||'role-viewer';
    $('tb-rolebadge').className = 'role-badge ' + cls;
    $('tb-rolebadge').textContent = u.role.charAt(0).toUpperCase()+u.role.slice(1);
  }
  if($('chgpass-who')) $('chgpass-who').textContent = u.name + ' (' + u.id + ')';
}

// ── Role-based restrictions ──
function applyRoleRestrictions() {
  if (!SESSION.user) return;
  const p = PERMS[SESSION.user.role] || PERMS.viewer;
  // Users nav: admin only
  const navUsers = $('nav-users');
  if (navUsers) navUsers.style.display = p.canManageUsers ? '' : 'none';
  // Clear Log button: only roles that can actually clear it should see it
  const clearAuditBtn = $('btn-clear-audit');
  if (clearAuditBtn) clearAuditBtn.style.display = p.canManageUsers ? '' : 'none';
  // Quick Add button
  const qa = document.querySelector('button[onclick*="quickAdd"]');
  if (qa) qa.style.display = p.canEdit ? '' : 'none';
  // Hide action buttons for viewer
  if (!p.canEdit) {
    document.querySelectorAll('.btn-green, .mo-save').forEach(b => {
      if (!b.closest('.lock-screen') && !b.closest('#mo-chgPass')) b.style.display = 'none';
    });
  }
}

function hasPerm(perm) {
  if (!SESSION.user) return false;
  return !!(PERMS[SESSION.user.role] || {})[perm];
}

function requirePerm(perm, action) {
  if (!hasPerm(perm)) {
    toast('🔒 ' + (SESSION.user?.role || 'Your role') + ' does not have permission for this');
    auditLog('action', 'Permission denied: ' + action);
    return false;
  }
  return true;
}

// ── Change Password ──
function doChangePassword() {
  const oldp = $('cp-old').value.trim();
  const newp = $('cp-new').value.trim();
  const conf = $('cp-conf').value.trim();
  const err  = $('cp-err');
  err.style.display = 'none';
  if (!SESSION.user) return;
  if (hashPass(oldp) !== SESSION.user.pass) { err.textContent='❌ Current password is wrong'; err.style.display='block'; return; }
  const pwErr = passwordPolicyError(newp);
  if (pwErr)                       { err.textContent='❌ ' + pwErr; err.style.display='block'; return; }
  if (newp !== conf)               { err.textContent='❌ Passwords do not match'; err.style.display='block'; return; }
  const idx = USERS.findIndex(u => u.id === SESSION.user.id);
  const newHash = hashPass(newp);
  if (idx >= 0) { USERS[idx].pass = newHash; SESSION.user.pass = newHash; }
  auditLog('change', 'Password changed');
  closeMo('chgPass');
  toast('✅ Password changed successfully!');
  $('cp-old').value='';$('cp-new').value='';$('cp-conf').value='';
}

// ── Users Management ──
// Build the Role <select> options from the ROLES registry so a new role
// (added to ROLES) shows up here automatically.
function populateRoleSelect(selected) {
  const sel = $('u-role');
  if (!sel) return;
  sel.innerHTML = Object.entries(ROLES).map(([key, r]) =>
    `<option value="${key}">${r.icon} ${r.label}${key==='admin'?' — Full access':key==='viewer'?' — Read only':' — Finance access'}</option>`
  ).join('');
  sel.value = selected;
}

function openAddUser() {
  if (!requirePerm('canManageUsers','add user')) return;
  $('editUserIdx').value = -1;
  $('addUserTitle').textContent = '👤 Add New User';
  $('u-username').value='';$('u-fullname').value='';$('u-pass').value='';
  $('u-pass').placeholder = 'Min 8 chars, 1 uppercase, 1 number';
  if($('u-pass-label')) $('u-pass-label').textContent = 'Password *';
  populateRoleSelect('accountant');
  $('u-username').disabled = false;
  $('adduser-err').style.display='none';
  showMo('addUser');
}

function openEditUser(idx) {
  if (!requirePerm('canManageUsers','edit user')) return;
  const u = USERS[idx];
  $('editUserIdx').value = idx;
  $('addUserTitle').textContent = '✏️ Edit User';
  $('u-username').value = u.id; $('u-username').disabled = true;
  $('u-fullname').value = u.name;
  populateRoleSelect(u.role);
  // We only ever store a password hash, which can't be turned back into the
  // original password — so the field is left blank rather than showing
  // anything, real or fake. Leaving it blank keeps the current password.
  $('u-pass').value = '';
  $('u-pass').placeholder = 'Leave blank to keep current password';
  if($('u-pass-label')) $('u-pass-label').textContent = 'Password (optional)';
  $('adduser-err').style.display='none';
  showMo('addUser');
}

function saveUser() {
  const idx     = parseInt($('editUserIdx').value);
  const uid     = $('u-username').value.trim().toLowerCase();
  const name    = $('u-fullname').value.trim();
  const role    = $('u-role').value;
  const passRaw = $('u-pass').value.trim();
  const errEl   = $('adduser-err');
  errEl.style.display='none';

  if (!uid || !name)          { errEl.textContent='❌ Username and Full Name are required'; errEl.style.display='block'; return; }
  if (idx < 0 && !passRaw)    { errEl.textContent='❌ Password is required for new users'; errEl.style.display='block'; return; }
  if (passRaw) {
    const pwErr = passwordPolicyError(passRaw);
    if (pwErr) { errEl.textContent = '❌ ' + pwErr; errEl.style.display='block'; return; }
  }

  if (idx < 0) {
    if (USERS.find(u=>u.id===uid)) { errEl.textContent='❌ Username "'+uid+'" already exists'; errEl.style.display='block'; return; }
    USERS.push({id:uid, name, role, pass:hashPass(passRaw), active:true, lastLogin:null});
    auditLog('change', 'User added: ' + uid + ' (' + role + ')');
    toast('✅ User added: ' + name);
  } else {
    const updated = {...USERS[idx], name, role};
    if (passRaw) updated.pass = hashPass(passRaw); // blank = keep existing password
    USERS[idx] = updated;
    auditLog('change', 'User updated: ' + uid);
    toast('✅ User updated: ' + name);
  }
  closeMo('addUser');
  rUsers();
}

function delUser(idx) {
  if (!requirePerm('canManageUsers','delete user')) return;
  const u = USERS[idx];
  if (u.id === SESSION.user?.id) { toast('❌ Cannot delete your own account'); return; }
  if (!confirm('Delete user: ' + u.name + '?')) return;
  auditLog('change', 'User deleted: ' + u.id);
  USERS.splice(idx, 1);
  rUsers();
  toast('User deleted');
}

function toggleUserActive(idx) {
  if (!requirePerm('canManageUsers','toggle user')) return;
  const u = USERS[idx];
  if (u.id === SESSION.user?.id) { toast('❌ Cannot deactivate your own account'); return; }
  u.active = !u.active;
  auditLog('change', (u.active?'Activated':'Deactivated') + ' user: ' + u.id);
  rUsers();
  toast(u.active ? '✅ User activated' : '⚠️ User deactivated');
}

// Manually unlock a user who is currently locked out from the brute-force
// login guard (5 failed attempts → 30 second lock), instead of making them
// just wait it out.
function unlockUserLogin(uid) {
  if (!requirePerm('canManageUsers','unlock user')) return;
  delete _loginAttempts[uid];
  auditLog('change', 'Manually unlocked login for: ' + uid);
  rUsers();
  toast('🔓 Login unlocked for ' + uid);
}

// Users-list search box handler
function fU(v) {
  _userFilter = v.trim().toLowerCase();
  rUsers();
}

// Keep the "Locked (Xs)" countdown on the Users page live while it's open,
// without needing a manual refresh.
setInterval(() => {
  const pg = $('pg-users');
  if (pg && pg.classList.contains('on')) rUsers();
}, 3000);

// Rows for the Role Permissions table. Each row maps a human label to either
// a key in PERMS[role] (so its ✅/❌ always reflects the real PERMS object),
// or null for things every logged-in role can do (plain viewing/exporting)
// that don't have their own PERMS flag. Because these rows read PERMS live,
// changing a permission there — or adding a whole new role to ROLES —
// updates this table automatically, no manual second edit required.
const PERM_TABLE_ROWS = [
  {label:'View Dashboard &amp; Reports',       key:null},
  {label:'View Students / Employees',          key:null},
  {label:'Add / Edit Students',                key:'canEdit'},
  {label:'Delete Students / Employees',        key:'canDelete'},
  {label:'Record Fee Payments',                key:'canEdit'},
  {label:'Manage Salaries &amp; Expenses',     key:'canEdit'},
  {label:'Export / Print Reports',             key:null},
  {label:'Manage Users',                       key:'canManageUsers'},
  {label:'View Audit Log',                     key:'canViewAudit'},
];

function renderPermsTable() {
  const roleKeys = Object.keys(ROLES);
  const thead = $('perms-thead');
  const tbody = $('perms-tbody');
  if (!thead || !tbody) return;
  thead.innerHTML = '<tr><th>Permission</th>' +
    roleKeys.map(k => `<th>${ROLES[k].label}</th>`).join('') + '</tr>';
  tbody.innerHTML = PERM_TABLE_ROWS.map(row => {
    const cells = roleKeys.map(k => {
      const allowed = row.key === null ? true : !!PERMS[k][row.key];
      return `<td>${allowed ? '✅' : '❌'}</td>`;
    }).join('');
    return `<tr><td>${row.label}</td>${cells}</tr>`;
  }).join('');
}

function rUsers() {
  // Role-count stat cards: one per role in ROLES, generated dynamically so
  // adding/removing a role doesn't require touching this HTML/JS by hand.
  const statsEl = $('role-stats-cards');
  if (statsEl) {
    statsEl.innerHTML = Object.entries(ROLES).map(([key, r]) => {
      const count = USERS.filter(u=>u.role===key).length;
      return `<div class="sc"><div class="sc-ico ig">${r.icon}</div><div class="sc-val">${count}</div><div class="sc-lbl">${r.label}s</div></div>`;
    }).join('');
  }

  const canManage = hasPerm('canManageUsers');
  const q = _userFilter;
  const filtered = USERS
    .map((u,i) => ({u, i}))
    .filter(({u}) => {
      if (!q) return true;
      const roleLbl = ((ROLES[u.role] && ROLES[u.role].label) || u.role).toLowerCase();
      return u.name.toLowerCase().includes(q) || u.id.toLowerCase().includes(q) || roleLbl.includes(q);
    });

  $('users-list').innerHTML = (filtered.length ? filtered.map(({u,i}) => {
    const roleCls = (ROLES[u.role] && ROLES[u.role].badgeCls) || 'role-viewer';
    const roleLbl = (ROLES[u.role] && ROLES[u.role].label) || u.role;
    const isMe = SESSION.user?.id === u.id;

    // Brute-force lock status: is this account currently locked out after
    // 5 failed login attempts?
    const att = _loginAttempts[u.id];
    const isLocked = att && att.lockedUntil > Date.now();
    const lockSecsLeft = isLocked ? Math.ceil((att.lockedUntil - Date.now())/1000) : 0;

    const lastLoginTxt = u.lastLogin ? new Date(u.lastLogin).toLocaleString() : 'Never';

    return `<div class="user-card">
      <div class="sb-av" style="width:42px;height:42px;font-size:16px;background:${u.active?'var(--g5)':'var(--s3)'}">${u.name[0]}</div>
      <div class="user-card-info">
        <h4>${u.name} ${isMe?'<span style="font-size:10px;color:var(--g6)">(You)</span>':''}</h4>
        <p>@${u.id} · ${u.active?'Active':'<span style="color:var(--rd)">Inactive</span>'}${isLocked?` · <span style="color:var(--rd)">🔒 Locked (${lockSecsLeft}s)</span>`:''}</p>
        <p style="font-size:11px;color:var(--s4);margin-top:2px">🕐 Last login: ${lastLoginTxt}</p>
      </div>
      <div class="user-card-acts">
        <span class="role-badge ${roleCls}">${roleLbl}</span>
        ${canManage && isLocked ? `<button class="btn btn-red" style="${bs}" onclick="unlockUserLogin('${u.id}')" title="Unlock this account now instead of waiting">🔓 Unlock</button>` : ''}
        ${canManage && !isMe ? `<button class="btn btn-yellow" style="${bs}" onclick="openEditUser(${i})">✏️</button>` : ''}
        ${canManage && !isMe ? `<button class="btn ${u.active?'btn-red':'btn-green'}" style="${bs}" onclick="toggleUserActive(${i})">${u.active?'🔒':'🔓'}</button>` : ''}
        ${canManage && !isMe ? `<button class="btn btn-red" style="${bs}" onclick="delUser(${i})">🗑</button>` : ''}
      </div>
    </div>`;
  }).join('') : `<div style="padding:24px;text-align:center;color:var(--s4);font-size:13px">No users match "${_userFilter}"</div>`);

  renderPermsTable();
}

// ── Audit Log ──
function rAuditLog() {
  const today = new Date().toDateString();
  const logins  = AUDIT.filter(a=>a.type==='login').length;
  const fails   = AUDIT.filter(a=>a.type==='fail').length;
  const actions = AUDIT.filter(a=>a.type==='action'||a.type==='change').length;
  const todayCount = AUDIT.filter(a=>a.time.toDateString()===today).length;
  if($('al-logins'))  $('al-logins').textContent  = logins;
  if($('al-fails'))   $('al-fails').textContent   = fails;
  if($('al-actions')) $('al-actions').textContent = actions;
  if($('al-today'))   $('al-today').textContent   = todayCount;
  renderAuditList();
}

function renderAuditList() {
  const q    = _auditFilter.q.toLowerCase();
  const type = _auditFilter.type;
  const fromD = _auditFilter.from ? new Date(_auditFilter.from) : null;
  // "To" date should include the whole day, not just midnight, so an entry
  // logged at 4pm on the selected end date isn't excluded.
  const toD = _auditFilter.to ? new Date(_auditFilter.to + 'T23:59:59.999') : null;
  const data = AUDIT.filter(a =>
    (!q    || a.username.includes(q) || a.action.toLowerCase().includes(q) || a.name.toLowerCase().includes(q)) &&
    (!type || a.type === type) &&
    (!fromD || a.time >= fromD) &&
    (!toD   || a.time <= toD)
  );
  const typeBadge = {login:'at-login',logout:'at-logout',fail:'at-fail',action:'at-action',change:'at-change'};
  const typeLabel = {login:'Login',logout:'Logout',fail:'Failed',action:'Action',change:'Change'};

  const total = data.length;
  const totalPages = Math.max(1, Math.ceil(total / AUDIT_PAGE_SIZE));
  if (_auditFilter.page > totalPages) _auditFilter.page = totalPages;
  if (_auditFilter.page < 1) _auditFilter.page = 1;
  const startIdx = (_auditFilter.page - 1) * AUDIT_PAGE_SIZE;
  const pageData = data.slice(startIdx, startIdx + AUDIT_PAGE_SIZE);

  // Count indicator: how many are shown vs how many exist in total, plus a
  // heads-up once the log is near/at its 500-entry cap (oldest entries get
  // silently dropped past that point).
  const countEl = $('al-count');
  if (countEl) {
    const isFiltered = q || type || fromD || toD;
    const rangeStart = total === 0 ? 0 : startIdx + 1;
    const rangeEnd = Math.min(startIdx + AUDIT_PAGE_SIZE, total);
    let txt = `Showing ${rangeStart}–${rangeEnd} of ${total}${isFiltered ? ' matching entries' : ' entries'}`;
    if (!isFiltered) txt += ` (log keeps the most recent 500${AUDIT.length >= 500 ? ' — oldest entries are now being dropped' : ''})`;
    countEl.textContent = txt;
  }

  if (!data.length) {
    $('audit-log-list').innerHTML = '<div style="padding:20px;text-align:center;color:var(--s4);font-size:13px">No log entries found</div>';
    if ($('al-pgn')) $('al-pgn').innerHTML = '';
    return;
  }
  $('audit-log-list').innerHTML = pageData.map(a => `
    <div class="audit-row">
      <span class="audit-time">${a.time.toLocaleString()}</span>
      <span class="audit-user">@${a.username}</span>
      <span class="audit-role"><span class="role-badge ${({admin:'role-admin',accountant:'role-accountant',viewer:'role-viewer'}[a.role]||'role-viewer')}" style="font-size:9px">${a.role}</span></span>
      <span class="audit-action">${a.action}</span>
      <span class="audit-type ${typeBadge[a.type]||'at-action'}">${typeLabel[a.type]||a.type}</span>
    </div>`).join('');

  const pgn = $('al-pgn');
  if (pgn) {
    pgn.innerHTML = `
      <button class="btn btn-outline" style="padding:5px 10px" ${_auditFilter.page<=1?'disabled':''} onclick="alSetPage(${_auditFilter.page-1})">‹ Prev</button>
      <span>Page ${_auditFilter.page} of ${totalPages}</span>
      <button class="btn btn-outline" style="padding:5px 10px" ${_auditFilter.page>=totalPages?'disabled':''} onclick="alSetPage(${_auditFilter.page+1})">Next ›</button>`;
  }
}

function alSetPage(n) { _auditFilter.page = n; renderAuditList(); }


function filterAudit(v) { _auditFilter.q = v; _auditFilter.page = 1; renderAuditList(); }
function filterAuditType(v) { _auditFilter.type = v; _auditFilter.page = 1; renderAuditList(); }
function filterAuditFrom(v) { _auditFilter.from = v; _auditFilter.page = 1; renderAuditList(); }
function filterAuditTo(v) { _auditFilter.to = v; _auditFilter.page = 1; renderAuditList(); }
function clearAuditDateRange() {
  _auditFilter.from = ''; _auditFilter.to = ''; _auditFilter.page = 1;
  if ($('al-from')) $('al-from').value = '';
  if ($('al-to'))   $('al-to').value   = '';
  renderAuditList();
}

function clearAuditLog() {
  if (!requirePerm('canManageUsers','clear audit log')) return;
  if (!AUDIT.length) { toast('ℹ️ Audit log is already empty'); return; }
  const count = AUDIT.length;
  const ok = confirm(
    `This will permanently delete all ${count} audit log entries.\n\n` +
    `Tip: use "⬇️ Export CSV" first to keep a backup — this cannot be undone.\n\n` +
    `Continue clearing the log?`
  );
  if (!ok) return;
  AUDIT = [];
  // The clear itself is deliberately logged AFTER wiping, so it becomes the
  // one entry that survives — there is always a trace of who cleared the
  // log and when, even though everything before it is gone. This is what
  // keeps the log tamper-evident instead of leaving zero history behind.
  auditLog('change', `Audit log cleared (${count} entries permanently deleted)`);
  rAuditLog();
  toast('🗑 Audit log cleared — this action itself has been recorded');
}

// ── Export the full audit log as a CSV file ──
function exportAuditLog() {
  if (!requirePerm('canViewAudit','export audit log')) return;
  if (!AUDIT.length) { toast('ℹ️ Audit log is empty'); return; }
  const esc=v=>'"'+String(v==null?'':v).replace(/"/g,'""')+'"';
  const rows=[['Time','User','Name','Role','Type','Action']]
    .concat(AUDIT.map(a=>[new Date(a.time).toLocaleString(), a.username, a.name, a.role, a.type, a.action]));
  const csv=rows.map(r=>r.map(esc).join(',')).join('\n');
  const blob=new Blob([csv],{type:'text/csv'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url; a.download='audit_log_'+new Date().toISOString().slice(0,10)+'.csv';
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
  toast('✅ Audit log exported!');
}



/* ══════════════════════════════════════════════════
   SETTINGS MODULE — Institution Info + Fee Configuration
   Single source of truth: D.settings (+ D.classes[].fee for program fees).
══════════════════════════════════════════════════ */
// Returns the list of distinct program names currently in D.classes, in
// first-seen order. Fee Configuration is built from this list, so adding a
// new program in the Classes module automatically gets a fee field here too
// — no code change needed.
function getProgramList(){
  const seen={};
  const list=[];
  D.classes.forEach(c=>{ if(!seen[c.name]){ seen[c.name]=true; list.push(c.name); } });
  return list;
}

// Pushes D.settings.instName/city/academicYear out to every static branding
// element on screen (login page, sidebar, topbar, browser tab title) so a
// Save in Settings is reflected everywhere immediately — not just in the form.
function applyInstBranding(){
  const s=D.settings;
  ['brand-instName-1','brand-instName-2','brand-instName-3'].forEach(id=>{
    const el=$(id); if(el) el.textContent=s.instName;
  });
  const foot=$('brand-foot');
  if(foot) foot.textContent=s.instName+' · '+s.academicYear+' Academic Year';
  if($('db-academic-year')) $('db-academic-year').textContent=s.academicYear;
  document.title=s.instName+' — CampusTreasury';
  if(s.logoDataUrl){
    ['brand-logo-1','brand-logo-2','brand-logo-3'].forEach(id=>{
      const el=$(id); if(el){ el.src=s.logoDataUrl; el.style.display=''; }
    });
  }
}
try{applyInstBranding();}catch(e){console.warn(e);}

// ── Institution logo upload: resized client-side to a small square PNG
// before storing, so it stays compact in localStorage. ──
function handleLogoUpload(input){
  if(!requirePerm('canEdit','update institution logo')){ input.value=''; return; }
  const file=input.files&&input.files[0];
  if(!file) return;
  if(!file.type.startsWith('image/')){ toast('❌ Please choose an image file'); input.value=''; return; }
  if(file.size>2*1024*1024){ toast('❌ Image is too large — please use one under 2MB'); input.value=''; return; }
  const reader=new FileReader();
  reader.onload=function(e){
    const img=new Image();
    img.onload=function(){
      const size=128;
      const canvas=document.createElement('canvas');
      canvas.width=size; canvas.height=size;
      const ctx=canvas.getContext('2d');
      ctx.fillStyle='#ffffff'; ctx.fillRect(0,0,size,size);
      const scale=Math.min(size/img.width, size/img.height);
      const w=img.width*scale, h=img.height*scale;
      ctx.drawImage(img,(size-w)/2,(size-h)/2,w,h);
      D.settings.logoDataUrl=canvas.toDataURL('image/png');
      applyInstBranding();
      renderSettingsPage();
      auditLog('change','Institution logo updated');
      toast('✅ Logo updated!');
    };
    img.onerror=function(){ toast('❌ Could not read this image'); };
    img.src=e.target.result;
  };
  reader.onerror=function(){ toast('❌ Could not read this file'); };
  reader.readAsDataURL(file);
  input.value='';
}

function clearLogo(){
  if(!requirePerm('canEdit','remove institution logo'))return;
  if(!D.settings.logoDataUrl){ toast('ℹ️ No custom logo set'); return; }
  if(!confirm('Remove the custom logo and go back to the default?')) return;
  delete D.settings.logoDataUrl;
  const defaultSrc='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22%231a6636%22%2F%3E%3Ctext%20x%3D%2250%22%20y%3D%2268%22%20font-size%3D%2255%22%20text-anchor%3D%22middle%22%3E%F0%9F%8E%93%3C%2Ftext%3E%3C%2Fsvg%3E';
  ['brand-logo-1','brand-logo-2','brand-logo-3'].forEach(id=>{
    const el=$(id); if(el){ el.style.display=''; el.src=defaultSrc; }
  });
  renderSettingsPage();
  auditLog('change','Institution logo removed');
  toast('✅ Logo removed');
}

// Reads the current fee for a program from D.classes (source of truth),
// falling back to whatever was last saved in D.settings if no class matches.
function getProgramFee(className){
  const c=D.classes.find(c=>c.name===className);
  return c?c.fee:0;
}

// Builds one fee input per distinct program found in D.classes. Each input
// carries the program name in data-fee-program so saveFeeConfigSettings()
// can read them back without needing a hardcoded list.
function renderFeeConfigInputs(){
  const container=$('st-fee-container');
  if(!container)return;
  container.innerHTML=getProgramList().map((name,i)=>
    `<div class="mf"><label>${name} Annual Fee (Rs)</label><input type="number" data-fee-program="${name}" id="st-fee-dyn-${i}" value="${getProgramFee(name)}"></div>`
  ).join('');
}

function renderSettingsPage(){
  const s=D.settings;
  if($('st-instName')) $('st-instName').value=s.instName;
  if($('st-city'))     $('st-city').value=s.city;
  if($('st-year'))     $('st-year').value=s.academicYear;
  if($('st-email'))    $('st-email').value=s.adminEmail;
  if($('st-contact'))  $('st-contact').value=s.contact;
  if($('st-address')) $('st-address').value=s.address;
  if($('st-logo-preview')) $('st-logo-preview').innerHTML=s.logoDataUrl?'<img src="'+s.logoDataUrl+'" style="width:100%;height:100%;object-fit:cover">':'🎓';
  renderFeeConfigInputs();
  if($('st-latepct'))  $('st-latepct').value=s.lateFeePct;
  if($('st-dueday'))   $('st-dueday').value=s.feeDueDay;
  if($('st-sesstimeout')) $('st-sesstimeout').value=s.sessionTimeoutMin||15;
  if($('st-bankName'))         $('st-bankName').value=s.bankName||'';
  if($('st-bankBranch'))       $('st-bankBranch').value=s.bankBranch||'';
  if($('st-bankAccountTitle')) $('st-bankAccountTitle').value=s.bankAccountTitle||'';
  if($('st-bankAccountNo'))    $('st-bankAccountNo').value=s.bankAccountNo||'';
  if($('st-bankIBAN'))         $('st-bankIBAN').value=s.bankIBAN||'';
  if($('st-customerCode'))     $('st-customerCode').value=s.customerCode||'';
  if($('st-voucherPrefix'))    $('st-voucherPrefix').value=s.voucherPrefix||'';
  if($('st-voucherInstructions')) $('st-voucherInstructions').value=(s.voucherInstructions||[]).join('\n');
}

function saveInstitutionSettings(){
  if(!requirePerm('canEdit','update settings'))return;
  const name=$('st-instName').value.trim();
  const city=$('st-city').value.trim();
  const year=$('st-year').value.trim();
  const email=$('st-email').value.trim();
  if(!name){toast('❌ Institution Name is required');return;}
  if(email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){toast('❌ Enter a valid admin email');return;}
  D.settings.instName=name||D.settings.instName;
  D.settings.city=city||D.settings.city;
  D.settings.academicYear=year||D.settings.academicYear;
  D.settings.adminEmail=email;
  D.settings.contact=$('st-contact').value.trim();
  D.settings.address=$('st-address').value.trim();
  applyInstBranding();
  auditLog('change','Institution settings updated: '+name);
  toast('✅ Settings saved! Applied across the whole system.');
}

function saveFeeConfigSettings(){
  if(!requirePerm('canEdit','update fee configuration'))return;
  const inputs=document.querySelectorAll('#st-fee-container [data-fee-program]');
  const vals={};
  let invalid=false;
  inputs.forEach(inp=>{
    const v=parseInt(inp.value);
    if(isNaN(v)||v<0) invalid=true;
    vals[inp.dataset.feeProgram]=v;
  });
  if(invalid){toast('❌ Please enter valid, non-negative fee amounts');return;}
  const latePct=parseInt($('st-latepct').value), dueDay=parseInt($('st-dueday').value);
  if(isNaN(latePct)||latePct<0||latePct>100){toast('❌ Late Fee Penalty must be between 0–100%');return;}
  if(isNaN(dueDay)||dueDay<1||dueDay>28){toast('❌ Fee Due Day must be between 1–28');return;}

  const affectedClasses=D.classes.filter(c=>Object.prototype.hasOwnProperty.call(vals,c.name)).length;
  if(!confirm('This will update fees for '+affectedClasses+' class section(s) across all Boys & Girls campuses, and apply the new late fee rules. Existing paid/pending fee records will not change. Continue?')) return;

  let updatedClasses=0;
  D.classes.forEach(c=>{
    if(Object.prototype.hasOwnProperty.call(vals,c.name)){ c.fee=vals[c.name]; updatedClasses++; }
  });
  D.settings.lateFeePct=latePct;
  D.settings.feeDueDay=dueDay;

  auditLog('change','Fee configuration updated ('+updatedClasses+' class sections affected)');
  toast('✅ Fee config saved! Updated '+updatedClasses+' class section(s).');
  try{rClasses();}catch(e){}
  try{rFees();}catch(e){}
}

// Suggested late-fee amount for an overdue fee record, based on the configured
// Late Fee Penalty %. Purely additive/informational — never auto-applied to a
// record without an explicit action, so existing paid/pending amounts are safe.
function suggestedLateFee(feeAmt){
  return Math.round((Number(feeAmt)||0) * (D.settings.lateFeePct||0) / 100);
}

// ── Bank / Online Payment details shown on every printed fee voucher ──
function saveBankSettings(){
  if(!requirePerm('canEdit','update bank/payment settings'))return;
  D.settings.bankName=$('st-bankName').value.trim();
  D.settings.bankBranch=$('st-bankBranch').value.trim();
  D.settings.bankAccountTitle=$('st-bankAccountTitle').value.trim();
  D.settings.bankAccountNo=$('st-bankAccountNo').value.trim();
  D.settings.bankIBAN=$('st-bankIBAN').value.trim();
  D.settings.customerCode=$('st-customerCode').value.trim();
  D.settings.voucherPrefix=$('st-voucherPrefix').value.trim()||'FEE';
  auditLog('change','Bank / online payment settings updated');
  toast('✅ Bank details saved! Will appear on the next voucher printed.');
}

// ── Payment instructions printed at the bottom of every fee voucher ──
function saveInstructionsSettings(){
  if(!requirePerm('canEdit','update payment instructions'))return;
  const lines=$('st-voucherInstructions').value.split('\n').map(l=>l.trim()).filter(l=>l);
  if(!lines.length){toast('❌ Add at least one instruction');return;}
  D.settings.voucherInstructions=lines;
  auditLog('change','Voucher payment instructions updated');
  toast('✅ Payment instructions saved! Will appear on the next voucher printed.');
}

// ── Security settings (session auto-lock timeout) ──
function saveSecuritySettings(){
  if(!requirePerm('canEdit','update security settings'))return;
  const mins=parseInt($('st-sesstimeout').value);
  if(isNaN(mins)||mins<1||mins>120){toast('❌ Auto-Lock timeout must be between 1–120 minutes');return;}
  D.settings.sessionTimeoutMin=mins;
  auditLog('change','Security settings updated: auto-lock set to '+mins+' minute(s)');
  toast('✅ Security settings saved!');
}

// ── Full data backup: export everything as a downloadable JSON file ──
function exportBackup(){
  if(!requirePerm('canEdit','export a backup'))return;
  try{
    const payload={D, USERS, AUDIT, exportedAt:new Date().toISOString(), version:'scfs_data_v1'};
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;
    a.download=(D.settings.instName||'college').replace(/\s+/g,'_')+'_backup_'+new Date().toISOString().slice(0,10)+'.json';
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
    auditLog('action','Data backup exported');
    toast('✅ Backup downloaded!');
  }catch(e){ console.warn(e); toast('❌ Could not create backup file'); }
}

// ── Restore from a previously exported backup file ──
function restoreBackup(input){
  if(!requirePerm('canEdit','restore a backup')){ input.value=''; return; }
  const file=input.files&&input.files[0];
  if(!file) return;
  if(!confirm('Restoring a backup will replace ALL current data (students, fees, salaries, settings, users) with the contents of this file. This cannot be undone. Continue?')){ input.value=''; return; }
  const reader=new FileReader();
  reader.onload=function(e){
    try{
      const saved=JSON.parse(e.target.result);
      if(!saved || typeof saved.D!=='object'){ toast('❌ This file does not look like a valid backup'); return; }
      Object.keys(saved.D).forEach(k=>{ D[k]=saved.D[k]; });
      if(Array.isArray(saved.USERS)){ USERS.length=0; saved.USERS.forEach(u=>USERS.push(u)); }
      if(Array.isArray(saved.AUDIT)) AUDIT=saved.AUDIT.map(a=>({...a, time:new Date(a.time)}));
      auditLog('change','Data restored from backup file');
      toast('✅ Backup restored! Reloading…');
      setTimeout(()=>location.reload(), 900);
    }catch(err){ console.warn(err); toast('❌ Could not read this backup file'); }
    finally{ input.value=''; }
  };
  reader.readAsText(file);
}

// ── Reset Settings (Institution Info + Fee Config + Security) to system defaults.
// Deliberately does NOT touch students/fees/salaries/expenses/users/audit log. ──
function resetSettingsToDefault(){
  if(!requirePerm('canEdit','reset settings'))return;
  if(!confirm('Reset Institution Info, Late Fee %/Due Day, and Security settings back to system defaults? Program fee amounts, and all student/fee/salary/user records will NOT be affected. Continue?')) return;
  D.settings.instName='Superior College';
  D.settings.city='Lahore';
  D.settings.academicYear='2024–25';
  D.settings.adminEmail='admin@superiorcollege.edu.pk';
  D.settings.contact='+92-300-0000000';
  D.settings.address='Main Campus, Lahore, Pakistan';
  D.settings.lateFeePct=5;
  D.settings.feeDueDay=25;
  D.settings.sessionTimeoutMin=15;
  delete D.settings.logoDataUrl;
  const defaultSrc='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%20fill%3D%22%231a6636%22%2F%3E%3Ctext%20x%3D%2250%22%20y%3D%2268%22%20font-size%3D%2255%22%20text-anchor%3D%22middle%22%3E%F0%9F%8E%93%3C%2Ftext%3E%3C%2Fsvg%3E';
  ['brand-logo-1','brand-logo-2','brand-logo-3'].forEach(id=>{ const el=$(id); if(el){ el.style.display=''; el.src=defaultSrc; } });
  applyInstBranding();
  renderSettingsPage();
  auditLog('change','Settings reset to system defaults');
  toast('✅ Settings reset to defaults!');
}

/* ══════════════════════════════════════════════════
   SIDEBAR
══════════════════════════════════════════════════ */
function openSB(){$('sidebar').classList.add('open');$('sbOv').classList.add('on');}
function closeSB(){$('sidebar').classList.remove('open');$('sbOv').classList.remove('on');}

/* ══════════════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════════════ */
const PT={dashboard:'Dashboard',students:'Students',classes:'Classes & Sections',employees:'Employees',fees:'Fee Management',transportFee:'Transport Fee',fines:'Disciplinary Fines',salaries:'Salaries',expenses:'Expenses',budget:'Budget Planner',reports:'Reports',transactions:'Transactions',settings:'Settings',users:'Users',auditlog:'Audit Log'};
const PF={dashboard:rDash,students:rStudents,classes:rClasses,employees:rEmployees,fees:rFees,transportFee:rTransportFee,fines:rFines,salaries:rSalaries,expenses:rExpenses,budget:rBudget,reports:rReports,transactions:rTx,settings:renderSettingsPage,users:rUsers,auditlog:rAuditLog};

function goTo(pg,el){
  // Permission guard for users/auditlog pages
  if(pg==='users' && !hasPerm('canManageUsers')){ toast('🔒 Admin access required'); return; }
  if(pg==='auditlog' && !hasPerm('canViewAudit')){ toast('🔒 Admin or Accountant access required'); return; }
  document.querySelectorAll('.ps').forEach(p=>p.classList.remove('on'));
  const p=$('pg-'+pg);if(p)p.classList.add('on');
  document.querySelectorAll('.ni').forEach(n=>n.classList.remove('on'));
  if(el)el.classList.add('on');
  $('pgTitle').textContent=PT[pg]||pg;
  closeSB();
  if(PF[pg])try{PF[pg]();}catch(e){console.warn(e);}
}

/* ══════════════════════════════════════════════════
   MODALS
══════════════════════════════════════════════════ */
function showMo(id){
  const el=$('mo-'+id);if(el)el.classList.add('open');
  // Update counts
  if(id==='exportStu'){const c=$('expStuCnt');if(c)c.textContent=D.students.length;}
  if(id==='exportEmp'){const c=$('expEmpCnt');if(c)c.textContent=D.employees.length;}
}
function closeMo(id){const el=$('mo-'+id);if(el)el.classList.remove('open');}
document.querySelectorAll('.mo').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('open');}));

/* ══════════════════════════════════════════════════
   TOAST
══════════════════════════════════════════════════ */
function toast(msg){
  const t=$('toastEl');t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3000);
}

/* ══════════════════════════════════════════════════
   3-DOTS ACTION MENU HELPERS
══════════════════════════════════════════════════ */
function toggleActionMenu(btn){
  const dropdown=btn.nextElementSibling;
  const isOpen=dropdown.classList.contains('open');
  closeAllMenus();
  if(!isOpen) dropdown.classList.add('open');
}
function closeAllMenus(){
  document.querySelectorAll('.action-dropdown.open').forEach(d=>d.classList.remove('open'));
}
document.addEventListener('click',function(e){
  if(!e.target.closest('.action-menu-wrap')) closeAllMenus();
});

/* ══════════════════════════════════════════════════
   ═══════════════════ EXPORT ENGINE ════════════════
══════════════════════════════════════════════════ */
const EXPORT_CFG = {
  students:{
    title:'Student List',
    headers:['Student ID','Name','Father Name','Roll No','Gender','Department','Class','Section','Semester','Fee (Rs)','Status','Contact','Address'],
    rows:()=>D.students.map(s=>[s.id||'',s.name,s.father||'',s.roll,s.gender||'',s.dept,s.cls||'',s.section||'',s.sem,s.fee,s.status,s.contact||'',s.address||'']),
    colWidths:[15,22,22,15,10,22,10,8,8,12,10,15,25]
  },
  employees:{
    title:'Employee List',
    headers:['Emp ID','Name','Designation','Department','Basic (Rs)','Allowance (Rs)','Net Pay (Rs)','Contact','Email','Status'],
    rows:()=>D.employees.map(e=>[e.id||'',e.name,e.desig,e.dept,e.salary,e.allow,e.salary+e.allow,e.contact||'',e.email||'',e.status]),
    colWidths:[15,25,20,22,14,14,14,16,24,10]
  },
  fees:{
    title:'Fee Records',
    headers:['Receipt','Student','Roll No','Category','Semester','Amount (Rs)','Date','Method','Status'],
    rows:()=>D.fees.map(f=>[f.receipt||'',f.student,f.roll,f.category||'Tuition',f.sem,f.amt,f.date,f.method,f.status]),
    colWidths:[14,24,14,12,10,14,14,16,10]
  },
  salaries:{
    title:'Salary Records',
    headers:['Name','Designation','Basic (Rs)','Allowances (Rs)','Deductions (Rs)','Net Pay (Rs)','Month','Status'],
    rows:()=>D.salaries.map(s=>[s.name,s.desig,s.basic,s.allow,s.deduct||0,netPay(s),s.month,s.status]),
    colWidths:[25,20,14,16,14,14,16,10]
  },
  expenses:{
    title:'Expense Records',
    headers:['Description','Category','Amount (Rs)','Date','Approved By','Status'],
    rows:()=>D.expenses.map(e=>[e.desc,e.cat,e.amt,e.date,e.approver,e.status]),
    colWidths:[35,18,14,14,18,12]
  },
  transactions:{
    title:'Transaction History',
    headers:['ID','Description','Type','Amount (Rs)','Date','Category','Balance (Rs)'],
    rows:()=>{const bm=txRunningBalances();return txChronological().map(t=>[t.id,t.desc,t.type,t.amt,t.date,t.cat,bm[t.id]||0]);},
    colWidths:[12,29,9,13,13,12,12]
  }
};

function doExport(module, format) {
  const cfg = EXPORT_CFG[module];
  if (!cfg) return;
  if (format==='csv')   exportCSV(cfg, module);
  else if (format==='excel') exportExcel(cfg, module);
  else if (format==='pdf')   exportPDF(cfg, module);
}


/* ── PRINT / PDF PREVIEW (same-origin, no iframe) ── */
// Print preview state
let _printHTML = '';
let _currentPrintFilename = 'download.html';

/* ─── showPrintPreview: loads HTML into hidden iframe for preview ─── */
function showPrintPreview(htmlContent, title) {
  var $o = document.getElementById('printOverlay');
  var $f = document.getElementById('printFrame');
  var $t = document.getElementById('printTitle');
  var $d = document.getElementById('printDlBtn');
  if (!$o || !$f) return;

  _printHTML = htmlContent;
  _currentPrintFilename = title.replace(/[^\w\s-]/g,'').replace(/\s+/g,'_').toLowerCase() + '_' + isoDate() + '.html';

  if ($t) $t.textContent = title;

  // Write HTML into iframe — iframe is isolated, window.print() won't affect main page
  var doc = $f.contentDocument || $f.contentWindow.document;
  doc.open();
  doc.write(htmlContent);
  doc.close();

  // Every generated template also embeds its own "Print" button so the
  // downloaded standalone HTML file stays printable on its own. Inside our
  // preview overlay that duplicates the toolbar's Print button above ("double
  // print button" look) — so hide just those buttons here. This only touches
  // the live preview DOM, not _printHTML (used for Download), and paper output
  // was already fine since these buttons carry @media print{display:none}.
  try {
    doc.querySelectorAll('button').forEach(function(b){
      var oc = b.getAttribute('onclick') || '';
      if (oc.indexOf('window.print()') !== -1) b.style.display = 'none';
    });
  } catch(e) {}

  if ($d) {
    $d.style.display = 'inline-flex';
    $d.textContent = '⬇ Download HTML';
    $d.onclick = function() {
      dlBlob(new Blob([htmlContent], {type:'text/html;charset=utf-8'}), _currentPrintFilename);
    };
  }

  $o.classList.add('show');
}

/* ─── doPrint: prints only the iframe content — NO page loop ─── */
function doPrint() {
  var $f = document.getElementById('printFrame');
  if (!$f) return;
  var fw = $f.contentWindow;
  if (!fw) return;
  // Print just the iframe — main page is untouched, no loop possible
  fw.focus();
  fw.print();
}

/* ─── closePrintOverlay: hides overlay and clears iframe ─── */
function closePrintOverlay() {
  var $o = document.getElementById('printOverlay');
  var $f = document.getElementById('printFrame');
  if ($o) $o.classList.remove('show');
  if ($f) {
    var doc = $f.contentDocument || $f.contentWindow.document;
    doc.open(); doc.write(''); doc.close();
  }
  _printHTML = '';
}

function triggerIframePrint() { doPrint(); }

function showPdfPreview(pdfBlob, title, filename) {
  dlBlob(pdfBlob, filename);
  toast('PDF saved: ' + filename);
}


function exportCSV(cfg, module) {
  const headerLine = cfg.headers.map(h=>`"${h}"`).join(',');
  const dataLines  = cfg.rows().map(row => row.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(','));
  const csv = [headerLine, ...dataLines].join('\r\n');
  dlBlob(new Blob(['\uFEFF'+csv,],{type:'text/csv;charset=utf-8'}), module+'_'+isoDate()+'.csv');
  toast('CSV exported successfully!');
}

function exportExcel(cfg, module) {
  if (typeof XLSX==='undefined') { toast('Excel library loading, please try again...'); return; }
  try {
    const wsData = [cfg.headers, ...cfg.rows()];
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    // Style header row
    const range = XLSX.utils.decode_range(ws['!ref']);
    for (let c=range.s.c; c<=range.e.c; c++) {
      const cell = ws[XLSX.utils.encode_cell({r:0,c})];
      if(cell) cell.s = {font:{bold:true},fill:{fgColor:{rgb:'1A6636'}},alignment:{horizontal:'center'}};
    }
    ws['!cols'] = cfg.colWidths.map(w=>({wch:w}));
    ws['!freeze'] = {xSplit:0,ySplit:1};
    XLSX.utils.book_append_sheet(wb, ws, cfg.title.slice(0,31));
    XLSX.writeFile(wb, module+'_'+isoDate()+'.xlsx');
    toast('Excel exported successfully!');
  } catch(e) { toast('Excel export error: '+e.message); }
}

function exportPDF(cfg, module) {
  if (typeof window.jspdf === 'undefined') { toast('PDF library loading... try again in a moment'); return; }
  try {
    const { jsPDF } = window.jspdf;
    const isLandscape = cfg.headers.length > 5;
    const doc = new jsPDF({ orientation: isLandscape ? 'landscape' : 'portrait', unit: 'mm', format: 'a4' });
    // Page dimensions
    const pageW  = doc.internal.pageSize.getWidth();
    const pageH  = doc.internal.pageSize.getHeight();
    const margin = 10;
    const usable = pageW - margin * 2;  // usable width
    // Header bar
    doc.setFillColor(26, 102, 54);
    doc.rect(0, 0, pageW, 22, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(13); doc.setFont('helvetica', 'bold');
    doc.text(D.settings.instName + ' - ' + cfg.title, margin, 10);
    doc.setFontSize(8); doc.setFont('helvetica', 'normal');
    doc.text(D.settings.instName + ', ' + D.settings.city, margin, 17);
    doc.text('Generated: ' + new Date().toLocaleString(), pageW - 72, 17);
    doc.setTextColor(30, 43, 34);
    // Scale column widths so their SUM equals exactly the usable width
    const rawWidths = cfg.colWidths;
    const rawTotal  = rawWidths.reduce((a, b) => a + b, 0);
    // Floor each scaled width, then add any rounding remainder to the last column
    let scaledWidths = rawWidths.map(w => Math.floor((w / rawTotal) * usable));
    const allocTotal = scaledWidths.reduce((a, b) => a + b, 0);
    scaledWidths[scaledWidths.length - 1] += (usable - allocTotal); // absorb rounding error
    const colStyles  = scaledWidths.reduce((o, w, i) => { o[i] = { cellWidth: w }; return o; }, {});
    doc.autoTable({
      startY: 26,
      head:   [cfg.headers],
      body:   cfg.rows().map(row => row.map(v => (v === null || v === undefined) ? '' : String(v))),
      styles: {
        fontSize: 7.5, cellPadding: 2,
        overflow: 'linebreak',
        font: 'helvetica',
        lineColor: [220, 228, 222], lineWidth: 0.2,
        cellWidth: 'nowrap'
      },
      headStyles:  { fillColor: [26, 102, 54], textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 8 },
      alternateRowStyles: { fillColor: [237, 250, 243] },
      columnStyles: colStyles,
      tableWidth: usable,
      margin: { left: margin, right: margin, top: 26 },
      didDrawPage: function(data) {
        // Re-draw header on each page
        doc.setFillColor(26, 102, 54);
        doc.rect(0, 0, pageW, 22, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(11); doc.setFont('helvetica', 'bold');
        doc.text(D.settings.instName + ' - ' + cfg.title, margin, 9);
        doc.setFontSize(7); doc.setFont('helvetica', 'normal');
        doc.text(D.settings.instName + ', ' + D.settings.city + '  |  Generated: ' + new Date().toLocaleString(), margin, 17);
        doc.setTextColor(150);
        doc.text(
          'Page ' + data.pageNumber + ' of ' + doc.internal.getNumberOfPages() + '  -  ' + D.settings.instName,
          margin, pageH - 5
        );
      }
    });
    const pdfBlob = doc.output('blob');
    showPdfPreview(pdfBlob, cfg.title, module + '_' + isoDate() + '.pdf');
    toast('PDF generated — ' + module + '_' + isoDate() + '.pdf');
  } catch (e) {
    console.error('exportPDF error:', e);
    toast('PDF error: ' + e.message);
  }
}


/* ══════════════════════════════════════════════════
   ═════════════════ IMPORT ENGINE ══════════════════
══════════════════════════════════════════════════ */
let impErrors=[], impWarnings=[];

function resetImp(){
  $('impResult').innerHTML='';
  const pb=$('impPbar');if(pb)pb.style.display='none';
  $('impPfill').style.width='0%';
  impErrors=[];impWarnings=[];
}

function impDrop(e){
  e.preventDefault();
  $('impZone').classList.remove('drag');
  const f=e.dataTransfer.files[0];
  if(f) processImpFile(f);
}
function impHandle(input){
  const f=input.files[0];if(f)processImpFile(f);
  input.value='';
}

function processImpFile(file){
  const ext=file.name.split('.').pop().toLowerCase();
  const pb=$('impPbar');if(pb)pb.style.display='block';
  setImpProgress(20);
  $('impResult').innerHTML='<div style="font-size:13px;color:var(--s4);padding:6px 0">Processing file...</div>';

  const reader=new FileReader();

  if(ext==='csv'){
    reader.onload=e=>{
      setImpProgress(70);
      const rows=parseCSV(e.target.result);
      setImpProgress(100);
      runImport(rows,file.name);
    };
    reader.readAsText(file);
  } else if(ext==='xlsx'||ext==='xls'){
    if(typeof XLSX==='undefined'){
      $('impResult').innerHTML=errBox('Excel (XLSX) library not loaded yet. Please wait a moment and try again.');
      return;
    }
    reader.onload=e=>{
      setImpProgress(70);
      try{
        const wb=XLSX.read(new Uint8Array(e.target.result),{type:'array'});
        const ws=wb.Sheets[wb.SheetNames[0]];
        const rows=XLSX.utils.sheet_to_json(ws,{header:1,defval:''});
        setImpProgress(100);
        runImport(rows,file.name);
      }catch(err){
        $('impResult').innerHTML=errBox('Could not read Excel file: '+err.message);
      }
    };
    reader.readAsArrayBuffer(file);
  } else {
    $('impResult').innerHTML=errBox('Unsupported file type. Please use .csv or .xlsx');
  }
}

function setImpProgress(pct){
  const el=$('impPfill');if(el)el.style.width=pct+'%';
}

function parseCSV(text){
  return text.split(/\r?\n/).filter(l=>l.trim()).map(line=>{
    const cols=[]; let cur='',inQ=false;
    for(let i=0;i<line.length;i++){
      const ch=line[i];
      if(ch==='"'&&!inQ){inQ=true;}
      else if(ch==='"'&&inQ&&line[i+1]==='"'){cur+='"';i++;}
      else if(ch==='"'&&inQ){inQ=false;}
      else if(ch===','&&!inQ){cols.push(cur.trim());cur='';}
      else{cur+=ch;}
    }
    cols.push(cur.trim());
    return cols;
  });
}

function findCol(header,names){
  for(const n of names){
    const idx=header.indexOf(n);if(idx>=0)return idx;
    const p=header.findIndex(h=>h.includes(n));if(p>=0)return p;
  }
  return -1;
}

function runImport(rows,filename){
  if(rows.length<2){$('impResult').innerHTML=errBox('File has no data rows (only header or empty).');return;}
  const header=rows[0].map(h=>String(h||'').toLowerCase().trim());

  const col={
    name:   findCol(header,['name','full name','student name','student']),
    roll:   findCol(header,['roll','roll no','roll number','rollno']),
    father: findCol(header,['father','father name','guardian']),
    gender: findCol(header,['gender','sex','male/female']),
    dept:   findCol(header,['dept','department']),
    cls:    findCol(header,['class','cls','program']),
    sec:    findCol(header,['section','sec']),
    sem:    findCol(header,['semester','sem']),
    fee:    findCol(header,['fee','fee rs','fee amount','amount']),
    status: findCol(header,['status','fee status']),
    contact:findCol(header,['contact','phone','mobile']),
    address:findCol(header,['address','home address']),
  };

  const missing=[];
  if(col.name<0)missing.push('Name');
  if(col.roll<0)missing.push('Roll No');
  if(col.dept<0)missing.push('Department');
  if(missing.length){
    $('impResult').innerHTML=errBox(
      '<strong>Required columns not found:</strong> '+missing.join(', ')+
      '<br><span style="font-size:11px;color:var(--s4);margin-top:4px;display:block">Columns in file: '+rows[0].join(', ')+'</span>'
    );
    return;
  }

  const errors=[]; const warnings=[]; const toAdd=[];

  for(let i=1;i<rows.length;i++){
    const r=rows[i];
    const rowNum=i+1;
    if(!r||r.every(c=>!String(c||'').trim()))continue;

    const nameVal  = col.name>=0  ? String(r[col.name]||'').trim()  : '';
    const rollVal  = col.roll>=0  ? String(r[col.roll]||'').trim()  : '';
    const deptVal  = col.dept>=0  ? String(r[col.dept]||'').trim()  : '';
    const feeRaw   = col.fee>=0   ? String(r[col.fee] ||'').trim()  : '';
    const statusRaw= col.status>=0? String(r[col.status]||'').trim(): 'Pending';

    // Required checks
    if(!nameVal){errors.push({row:rowNum,field:'Name',msg:'Name is required'});continue;}
    if(!rollVal){errors.push({row:rowNum,field:'Roll No',msg:'Roll No required for: '+nameVal});continue;}
    if(!deptVal){warnings.push({row:rowNum,field:'Department',msg:'Missing for '+nameVal+' - defaulting to Computer Science'});}

    // Duplicate check
    const dupDB=D.students.find(s=>s.roll.toLowerCase()===rollVal.toLowerCase());
    if(dupDB){errors.push({row:rowNum,field:'Roll No',msg:`Duplicate: "${rollVal}" already exists (${dupDB.name}, ${dupDB.id||'-'})`});continue;}
    const dupBatch=toAdd.find(s=>s.roll.toLowerCase()===rollVal.toLowerCase());
    if(dupBatch){errors.push({row:rowNum,field:'Roll No',msg:`Duplicate in file: "${rollVal}" appears more than once`});continue;}

    // Fee validation
    const feeNum=parseInt(feeRaw);
    if(feeRaw&&isNaN(feeNum)){warnings.push({row:rowNum,field:'Fee',msg:`Invalid fee "${feeRaw}" for ${nameVal} - defaulting to 25000`});}

    // Status normalise
    const sMap={'paid':'Paid','pending':'Pending','overdue':'Overdue'};
    const finalStatus=sMap[statusRaw.toLowerCase()]||'Pending';
    if(statusRaw&&!sMap[statusRaw.toLowerCase()]){warnings.push({row:rowNum,field:'Status',msg:`Unknown status "${statusRaw}" - defaulting to Pending`});}

    toAdd.push({
      id:      genStuId_for_import(toAdd.length),
      name:    nameVal,
      father:  col.father>=0?(String(r[col.father]||'').trim()||'-'):'-',
      roll:    rollVal,
      dept:    deptVal||'Computer Science',
      cls:     col.cls>=0?(String(r[col.cls]||'').trim()||'Inter-ICS'):'Inter-ICS',
      section: col.sec>=0?(String(r[col.sec]||'').trim()||'A'):'A',
      sem:     col.sem>=0?(String(r[col.sem]||'').trim()||'1st'):'1st',
      fee:     isNaN(feeNum)?25000:feeNum,
      status:  finalStatus,
      contact: col.contact>=0?(String(r[col.contact]||'').trim()||'-'):'-',
      address: col.address>=0?(String(r[col.address]||'').trim()||'-'):'-',
    });
  }

  impErrors=errors; impWarnings=warnings;
  toAdd.forEach(s=>D.students.push(s));
  buildTx(); rStudents(); rFees(); rDash();

  // Build result HTML
  let html='';
  html+=`<div class="rpt-success"><div class="rpt-success-t">✅ ${toAdd.length} student${toAdd.length!==1?'s':''} imported from "${filename}"</div></div>`;
  if(warnings.length){
    html+=`<div class="rpt-warn"><div class="rpt-warn-t">⚠️ ${warnings.length} Warning${warnings.length!==1?'s':''}</div>`;
    warnings.slice(0,5).forEach(w=>{html+=`<div class="rpt-row"><span class="rpt-rnum">Row ${w.row}</span><span class="rpt-field">[${w.field}]</span><span>${w.msg}</span></div>`;});
    if(warnings.length>5)html+=`<div class="rpt-row" style="color:var(--s4);font-style:italic">... and ${warnings.length-5} more warnings</div>`;
    html+='</div>';
  }
  if(errors.length){
    html+=`<div class="rpt-err"><div class="rpt-err-t">❌ ${errors.length} row${errors.length!==1?'s':''} skipped</div>`;
    errors.slice(0,6).forEach(e=>{html+=`<div class="rpt-row"><span class="rpt-rnum">Row ${e.row}</span><span class="rpt-field">[${e.field}]</span><span>${e.msg}</span></div>`;});
    if(errors.length>6)html+=`<div class="rpt-row" style="color:var(--s4);font-style:italic">... and ${errors.length-6} more errors</div>`;
    html+='</div>';
  }
  if(errors.length||warnings.length){
    html+=`<button class="mo-save" style="font-size:12px;padding:7px 14px;margin-top:10px" onclick="showFullReport()">📋 Full Report</button>`;
  }
  $('impResult').innerHTML=html;
}

function genStuId_for_import(offset){
  const yr=new Date().getFullYear();
  const maxId=D.students.reduce((mx,s)=>{const m=s.id?parseInt((s.id.split('-')[2])||0):0;return m>mx?m:mx;},0);
  return 'STU-'+yr+'-'+String(maxId+offset+1).padStart(3,'0');
}

function errBox(msg){return `<div class="rpt-err"><div class="rpt-err-t">❌ Import Error</div><div class="rpt-row" style="color:#991b1b">${msg}</div></div>`;}

function showFullReport(){
  let html='';
  if(impErrors.length){
    html+=`<div class="rpt-err" style="margin-bottom:12px"><div class="rpt-err-t">❌ Skipped Rows (${impErrors.length})</div>`;
    impErrors.forEach(e=>{html+=`<div class="rpt-row"><span class="rpt-rnum">Row ${e.row}</span><span class="rpt-field">[${e.field}]</span><span>${e.msg}</span></div>`;});
    html+='</div>';
  }
  if(impWarnings.length){
    html+=`<div class="rpt-warn"><div class="rpt-warn-t">⚠️ Warnings (${impWarnings.length})</div>`;
    impWarnings.forEach(w=>{html+=`<div class="rpt-row"><span class="rpt-rnum">Row ${w.row}</span><span class="rpt-field">[${w.field}]</span><span>${w.msg}</span></div>`;});
    html+='</div>';
  }
  if(!html)html='<div class="rpt-success"><div class="rpt-success-t">No errors or warnings found</div></div>';
  $('impReportBody').innerHTML=html;
  showMo('impReport');
}

function dlErrReport(){
  const lines=['Import Error Report - '+D.settings.instName,'Generated: '+new Date().toLocaleString(),''];
  if(impErrors.length){lines.push('ERRORS ('+impErrors.length+')','Row,Field,Message',...impErrors.map(e=>`${e.row},"${e.field}","${e.msg.replace(/"/g,"'")}"`));}
  if(impWarnings.length){lines.push('','WARNINGS ('+impWarnings.length+')','Row,Field,Message',...impWarnings.map(w=>`${w.row},"${w.field}","${w.msg.replace(/"/g,"'")}"`));}
  dlBlob(new Blob([lines.join('\r\n')],{type:'text/csv'}), 'import_report_'+isoDate()+'.csv');
  toast('Error report downloaded');
}

function dlTemplate(){
  const h='Name,Father Name,Roll No,Department,Class,Section,Semester,Fee,Status,Contact,Address';
  const s1='"Ali Khan","Muhammad Khan","ICS-2025-01","ICS (Boys)","Inter-ICS","A","1st Year","15000","Pending","0300-1234567","House 1, Lahore"';
  const s2='"Sara Ahmed","Ahmed Raza","ICS-2025-02","ICS (Girls)","Inter-ICS","B","1st Year","15000","Paid","0300-7654321","Street 2, Lahore"';
  dlBlob(new Blob([[h,s1,s2].join('\r\n')],{type:'text/csv'}), 'students_import_template.csv');
  toast('Template downloaded!');
}

/* ══════════════════════════════════════════════════
   STUDENTS
══════════════════════════════════════════════════ */
let SF={q:'',st:'',dp:'',sec:'',cls:'',gn:'',lv:''};

// ── Department / Class definitions per gender + level ──
const DEPT_MAP = {
  Male: {
    Inter: [
      {dept:'ICS (Boys)',                    cls:'Inter-ICS'},
      {dept:'FSc Pre-Medical (Boys)',        cls:'Inter-FSc-Pre-Med'},
      {dept:'FSc Pre-Engineering (Boys)',    cls:'Inter-FSc-Pre-Eng'},
      {dept:'ICom (Boys)',                   cls:'Inter-ICom'},
      {dept:'FA (Boys)',                     cls:'Inter-FA'},
    ]
  },
  Female: {
    Inter: [
      {dept:'ICS (Girls)',                   cls:'Inter-ICS'},
      {dept:'FSc Pre-Medical (Girls)',       cls:'Inter-FSc-Pre-Med'},
      {dept:'FSc Pre-Engineering (Girls)',   cls:'Inter-FSc-Pre-Eng'},
      {dept:'ICom (Girls)',                  cls:'Inter-ICom'},
      {dept:'FA (Girls)',                    cls:'Inter-FA'},
    ]
  }
};

const CLS_LABELS = {
  'Inter-ICS':'ICS','Inter-FSc-Pre-Med':'FSc Pre-Medical','Inter-FSc-Pre-Eng':'FSc Pre-Engineering',
  'Inter-ICom':'ICom','Inter-FA':'FA'
};

function populateStuDeptCls() {
  if(!D.classes) D.classes=[];
  const gender = ($('sgender')||{}).value || 'Male';
  const genderKey = gender==='Male'?'Boys':'Girls';
  const clsSel = $('scls');
  if (!clsSel) return;
  // Filter classes by campus
  const filteredCls = D.classes.filter(c=>c.gender===genderKey);
  clsSel.innerHTML = filteredCls.length
    ? filteredCls.map(c=>`<option value="${c.code}">${c.name}</option>`).join('')
    : '<option value="">— No classes added yet —</option>';
  onStuClsChange();
}

function onStuGenderChange() { populateStuDeptCls(); }
function onStuLevelChange()  { populateStuDeptCls(); }
function onStuDeptChange()   { onStuClsChange(); }

function onStuClsChange() {
  const gender = ($('sgender')||{}).value || 'Male';
  const genderKey = gender==='Male'?'Boys':'Girls';
  const clsCode = ($('scls')||{}).value || '';
  const secSel = $('ssec');
  const sem = $('ssm');
  const fee = $('sfa');
  // Find matching class object
  const clsObj = D.classes ? D.classes.find(c=>c.code===clsCode&&c.gender===genderKey) : null;
  // Populate sections from class
  if(secSel){
    const secs = clsObj ? (clsObj.sections||[]) : [];
    secSel.innerHTML = secs.length
      ? secs.map(s=>`<option value="${s}">${s}</option>`).join('')
      : '<option value="A">A</option>';
  }
  if (sem) sem.innerHTML = '<option>1st Year</option><option>2nd Year</option>';
  // Set default fee from class
  const isEdit = parseInt(($('stuIdx')||{}).value) >= 0;
  if (fee && !isEdit && clsObj && clsObj.fee) fee.value=clsObj.fee;
  // Set dept
  const deptSel=$('sdp');
  if(deptSel && clsObj) deptSel.innerHTML=`<option value="${clsObj.name} (${clsObj.gender})">${clsObj.name} (${clsObj.gender})</option>`;
}



function genStuId(){
  const yr=new Date().getFullYear();
  const mx=D.students.reduce((m,s)=>{const n=s.id?parseInt((s.id.split('-')[2])||0):0;return n>m?n:m;},0);
  return 'STU-'+yr+'-'+String(mx+1).padStart(3,'0');
}

function openAddStu(){
  $('stuIdx').value=-1;
  $('stuMoTitle').textContent='Add New Student';
  $('stuIdPrev').textContent=genStuId();
  ['sn','sfn','sr','sc','sadr'].forEach(id=>{const el=$(id);if(el)el.value='';});
  $('sfa').value='15000';
  if($('sgender')) $('sgender').value='Male';
  if($('slevel'))  $('slevel').value='Inter';
  populateStuDeptCls();
  $('ssec').value='A';
  // Default due date driven by Settings → Fee Configuration → Fee Due Day
  // (falls back to the 25th if not configured)
  const dueDay=(D.settings&&D.settings.feeDueDay)||25;
  const now=new Date();
  let d=new Date(now.getFullYear(),now.getMonth(),dueDay);
  if(d<now) d=new Date(now.getFullYear(),now.getMonth()+1,dueDay);
  if($('s-fdue')) $('s-fdue').value=d.toISOString().slice(0,10);
  if($('s-ftype')) $('s-ftype').value='full';
  if($('s-finst-wrap')) $('s-finst-wrap').style.display='none';
  if($('s-finst-count')) $('s-finst-count').value='2';
  if($('s-fee-preview')) $('s-fee-preview').style.display='none';
  stuFeePreview();
  clearStuErr();
  showMo('addStu');
}

function openEditStu(idx){
  const s=D.students[idx];
  $('stuIdx').value=idx;
  $('stuMoTitle').textContent='Edit Student';
  $('stuIdPrev').textContent=s.id||'-';
  $('sn').value=s.name||'';$('sfn').value=s.father||'';$('sr').value=s.roll||'';
  $('sc').value=s.contact||'';$('sadr').value=s.address||'';$('sfa').value=s.fee||25000;
  if($('sgender')) $('sgender').value=s.gender||'Male';
  if($('slevel'))  $('slevel').value='Inter';
  populateStuDeptCls();
  // Set cls after populating
  if($('scls')) $('scls').value=s.cls||'';
  onStuClsChange(); // This will populate sections
  // Now set the section
  setTimeout(()=>{
    if($('ssec')) $('ssec').value=s.section||'A';
  },10);
  $('ssm').value=s.sem||'1st Year';
  // Fee plan fields - show existing due date if any
  const existFee=D.fees.find(f=>f.roll===s.roll&&f.status!=='Paid');
  if($('s-fdue')) $('s-fdue').value=existFee&&existFee.dueDate?existFee.dueDate:'';
  if($('s-ftype')) $('s-ftype').value='full';
  if($('s-finst-wrap')) $('s-finst-wrap').style.display='none';
  if($('s-fee-preview')) $('s-fee-preview').style.display='none';
  clearStuErr();
  showMo('addStu');
}

function clearStuErr(){
  ['sn','sfn','sr','sfa'].forEach(id=>{
    const el=$(id);if(el)el.classList.remove('err');
    const em=$('em-'+id);if(em)em.remove();
  });
}

function setFieldErr(id,msg){
  const el=$(id);if(!el)return;
  el.classList.add('err');
  let em=$('em-'+id);
  if(!em){em=document.createElement('div');em.id='em-'+id;em.className='err-msg';el.parentNode.insertBefore(em,el.nextSibling);}
  em.textContent='✗ '+msg;
}

function rStudents(){
  const data=D.students.filter(s=>{
    const q=SF.q;
    return(!q||s.name.toLowerCase().includes(q)||(s.id||'').toLowerCase().includes(q)||s.roll.toLowerCase().includes(q)||(s.father||'').toLowerCase().includes(q))
      &&(!SF.st||s.status===SF.st)
      &&(!SF.sec||s.section===SF.sec)
      &&(!SF.cls||s.cls===SF.cls)
      &&(!SF.gn||s.gender===SF.gn);
  });
  // Stats
  const boysCount=D.students.filter(s=>s.gender==='Male').length;
  const girlsCount=D.students.filter(s=>s.gender==='Female').length;
  // Fee stats from D.fees (+ Transport Fee, which is real income too).
  // Uses feePaidAmt/feeRemainingAmt so a partially-paid instalment counts
  // its paid portion as collected and only the true remaining balance as
  // outstanding — a plain status==='Paid' filter would miss partial cash
  // already received, and status==='Overdue' alone would double-count the
  // paid portion of a partially-paid-but-overdue instalment as still owed.
  const paidAmt=D.fees.reduce((a,b)=>a+feePaidAmt(b),0)+D.transportFees.filter(t=>t.status==='Paid').reduce((a,b)=>a+b.amt,0);
  const pendingAmt=D.fees.filter(f=>f.status==='Pending'||f.status==='Partial').reduce((a,b)=>a+feeRemainingAmt(b),0)+D.transportFees.filter(t=>t.status==='Pending').reduce((a,b)=>a+b.amt,0);
  const overdueAmt=D.fees.filter(f=>f.status==='Overdue'||f.status==='Partial-Overdue').reduce((a,b)=>a+feeRemainingAmt(b),0)+D.transportFees.filter(t=>t.status==='Overdue').reduce((a,b)=>a+b.amt,0);
  const unpaidAmt=pendingAmt+overdueAmt;
  const overdueCount=D.students.filter(s=>s.status==='Overdue').length;
  const pendingCount=D.students.filter(s=>s.status==='Pending').length;
  const paidStuCount=D.students.filter(s=>s.status==='Paid').length;
  $('s-tot').textContent=D.students.length;
  if($('s-boys'))  $('s-boys').textContent=boysCount;
  if($('s-girls')) $('s-girls').textContent=girlsCount;
  if($('s-paid-count')) $('s-paid-count').textContent=paidStuCount;
  if($('s-fee-paid-amt'))  $('s-fee-paid-amt').textContent='Rs '+fmt(paidAmt);
  if($('s-fee-pending-count')) $('s-fee-pending-count').textContent=pendingCount;
  if($('s-fee-pending-amt-sub')) $('s-fee-pending-amt-sub').textContent='Rs '+fmt(pendingAmt);
  if($('s-overdue-count')) $('s-overdue-count').textContent=overdueCount;
  if($('s-fee-unpaid-amt')) $('s-fee-unpaid-amt').textContent='Rs '+fmt(unpaidAmt);
  $('nb-s').textContent=D.students.length;
  // Populate filter dropdowns dynamically
  populateFilterDropdowns();
  $('stuTB').innerHTML=data.map(s=>{
    const idx=D.students.indexOf(s);
    const isBoy=s.gender==='Male';
    const genderBadge=isBoy
      ?`<span style="font-size:9px;background:#dbeafe;color:#1d4ed8;padding:2px 7px;border-radius:50px;font-weight:700">Boy</span>`
      :`<span style="font-size:9px;background:#ede9fe;color:#5b21b6;padding:2px 7px;border-radius:50px;font-weight:700">Girl</span>`;
    const clsObj=D.classes?D.classes.find(c=>c.code===s.cls&&c.gender===(s.gender==='Male'?'Boys':'Girls')):null;
    const clsLabel=clsObj?clsObj.name:(s.cls||'-');
    return`<tr>
      <td><code class="id-tag">${s.id||'-'}</code></td>
      <td><div style="display:flex;align-items:center;gap:8px"><div class="av ${avC(idx)}">${s.name[0]}</div><div><div style="font-weight:600">${s.name}</div><div style="font-size:11px;color:var(--s4)">${s.address||''}</div></div></div></td>
      <td>${s.father||'-'}</td>
      <td style="font-weight:600">${s.roll}</td>
      <td>${genderBadge}</td>
      <td><strong>${clsLabel}</strong> / ${s.section||'-'}</td>
      <td style="font-size:12px">${s.dept}</td>
      <td>${s.sem}</td>
      <td>${s.contact||'-'}</td>
      <td>${bdg(s.status)}</td>
      <td><strong>Rs ${fmt(s.fee)}</strong></td>
      <td style="white-space:nowrap">
        <div class="action-menu-wrap">
          <button class="action-dots-btn" onclick="toggleActionMenu(this)" title="Actions">⋯</button>
          <div class="action-dropdown">
            <button onclick="openEditStu(${idx});closeAllMenus()">✏️ Edit Student</button>
            <button onclick="viewStu(${idx});closeAllMenus()">👁 View Details</button>
            <button onclick="openAddFee();closeAllMenus()">💳 Record Fee</button>
            <hr>
            <button class="adt-red" onclick="delStu(${idx});closeAllMenus()">🗑 Delete</button>
          </div>
        </div>
      </td>
    </tr>`;
  }).join('');
}

function populateFilterDropdowns(){
  if(!D.classes) return;
  const clsSel=$('filter-cls');
  const secSel=$('filter-sec');
  if(clsSel){
    const cur=clsSel.value;
    const allCls=[...new Set(D.classes.map(c=>c.code))];
    clsSel.innerHTML='<option value="">All Classes</option>'+allCls.map(code=>{
      const c=D.classes.find(x=>x.code===code);
      return`<option value="${code}"${cur===code?' selected':''}>${c?c.name:code}</option>`;
    }).join('');
  }
  if(secSel){
    const cur=secSel.value;
    const allSecs=[...new Set(D.classes.flatMap(c=>c.sections||[]))].sort();
    secSel.innerHTML='<option value="">All Sections</option>'+allSecs.map(s=>`<option value="${s}"${cur===s?' selected':''}>${s}</option>`).join('');
  }
}

function fS(v){SF.q=v.toLowerCase();rStudents();}
function fSSt(v){SF.st=v;rStudents();}
function fSSec(v){SF.sec=v;rStudents();}
function fSCls(v){SF.cls=v;rStudents();}
function fSGn(v){SF.gn=v;rStudents();}
function fSLv(v){SF.lv=v;rStudents();}

/* ══════════════════════════════════════════════════
   CLASSES & SECTIONS MANAGEMENT
══════════════════════════════════════════════════ */

function rClasses(){
  if(!D.classes) D.classes=[];
  const tb=$('clsTB');
  if(!tb) return;
  const campusFilter=($('cls-campus-filter')||{}).value||'';
  // Stats row
  const sr=$('cls-stats-row');
  if(sr){
    const totalCls=D.classes.length;
    const totalSecs=D.classes.reduce((a,c)=>a+(c.sections||[]).length,0);
    sr.innerHTML=`
      <div class="sc"><div class="sc-ico ig">🏫</div><div class="sc-val">${totalCls}</div><div class="sc-lbl">Total Classes</div></div>
      <div class="sc"><div class="sc-ico ib">📋</div><div class="sc-val">${totalSecs}</div><div class="sc-lbl">Total Sections</div></div>
      <div class="sc"><div class="sc-ico ib">👦</div><div class="sc-val">${D.classes.filter(c=>c.gender==='Boys').length}</div><div class="sc-lbl">Boys Campus</div></div>
      <div class="sc"><div class="sc-ico ip">👧</div><div class="sc-val">${D.classes.filter(c=>c.gender==='Girls').length}</div><div class="sc-lbl">Girls Campus</div></div>`;
  }
  const filtered=campusFilter?D.classes.filter(c=>c.gender===campusFilter):D.classes;
  if(filtered.length===0){
    tb.innerHTML=`<tr><td colspan="6" style="text-align:center;padding:32px;color:var(--s4);font-size:13px">${campusFilter?`No classes in ${campusFilter} Campus`:'No classes added yet'}</td></tr>`;
    return;
  }
  tb.innerHTML=filtered.map((c,i)=>{
    const realIdx=D.classes.indexOf(c);
    const stuCount=D.students.filter(s=>s.cls===c.code&&s.gender===(c.gender==='Boys'?'Male':'Female')).length;
    const secTags=(c.sections||[]).map(s=>{
      const cap=c.sectionCapacity&&c.sectionCapacity[s]?` <span style="font-size:9px;color:var(--s4)">(${c.sectionCapacity[s]})</span>`:'';
      return`<span style="background:var(--g1);color:var(--g7);padding:2px 8px;border-radius:50px;font-size:11px;font-weight:700;margin:1px">${s}${cap}</span>`;
    }).join('');
    const gBadge=c.gender==='Boys'
      ?`<span style="font-size:11px;background:#dbeafe;color:#1d4ed8;padding:3px 10px;border-radius:50px;font-weight:700">👦 Boys</span>`
      :`<span style="font-size:11px;background:#ede9fe;color:#5b21b6;padding:3px 10px;border-radius:50px;font-weight:700">👧 Girls</span>`;
    return`<tr>
      <td><strong>${c.name}</strong></td>
      <td><code class="id-tag">${c.code}</code></td>
      <td><div style="display:flex;flex-wrap:wrap;gap:3px">${secTags||'<span style="font-size:11px;color:var(--s4);font-style:italic">No sections</span>'}</div></td>
      <td>${gBadge}</td>
      <td><strong>${stuCount}</strong></td>
      <td style="white-space:nowrap">
        <button onclick="openEditClass(${realIdx})" class="btn-yellow btn" style="${bs}">✏️ Edit</button>
        <button onclick="delClass(${realIdx})" class="btn-red btn" style="${bs}">🗑 Delete</button>
      </td>
    </tr>`;
  }).join('');
}

function genClsId(){
  const mx=D.classes.reduce((m,c)=>{const n=parseInt((c.id||'CLS-000').split('-')[1]||0);return n>m?n:m;},0);
  return 'CLS-'+String(mx+1).padStart(3,'0');
}

function openAddClass(){
  $('clsIdx').value=-1;
  $('clsMoTitle').textContent='🏫 Add New Class';
  $('cls-name').value='';
  $('cls-code').value='';
  $('cls-gender').value='Boys';
  showMo('addClass');
}

function openEditClass(i){
  const c=D.classes[i];
  $('clsIdx').value=i;
  $('clsMoTitle').textContent='✏️ Edit Class';
  $('cls-name').value=c.name||'';
  $('cls-code').value=c.code||'';
  $('cls-gender').value=c.gender||'Boys';
  showMo('addClass');
}


function saveClass(){
  const name=($('cls-name').value||'').trim();
  const code=($('cls-code').value||'').trim();
  const gender=$('cls-gender').value;
  if(!name){toast('⚠️ Class name required!');return;}
  if(!code){toast('⚠️ Class code required!');return;}
  const idx=parseInt($('clsIdx').value);
  const existing=idx>=0?D.classes[idx]:{};
  const obj={id:idx>=0?D.classes[idx].id:genClsId(),name,code,gender,
    sections:existing.sections||[],
    sectionCapacity:existing.sectionCapacity||{}};
  if(idx>=0) D.classes[idx]=obj;
  else D.classes.push(obj);
  closeMo('addClass');
  rClasses();
  rStudents();
  populateStuDeptCls();
  toast('✅ Class saved!');
}

function delClass(i){
  const c=D.classes[i];
  if(!confirm(`Delete class "${c.name}"? Students assigned to this class won't be removed.`)) return;
  D.classes.splice(i,1);
  rClasses();
  rStudents();
  populateStuDeptCls();
  toast('🗑️ Class deleted!');
}

/* ─── Standalone Add Section ─── */
function openAddSection(){
  if(!D.classes||D.classes.length===0){toast('⚠️ Please add a class first!');return;}
  if($('sec-campus')) $('sec-campus').value='';
  const sel=$('sec-cls-select');
  if(sel){sel.innerHTML='<option value="">— Select campus first —</option>';sel.disabled=true;}
  if($('sec-name-input')) $('sec-name-input').value='';
  if($('sec-capacity')) $('sec-capacity').value='';
  if($('sec-existing')) $('sec-existing').innerHTML='';
  showMo('addSection');
}

function secCampusChange(){
  const campus=($('sec-campus')||{}).value||'';
  const sel=$('sec-cls-select');
  if(!sel) return;
  if(!campus){sel.innerHTML='<option value="">— Select campus first —</option>';sel.disabled=true;if($('sec-existing'))$('sec-existing').innerHTML='';return;}
  const filtered=D.classes.filter(c=>c.gender===campus);
  if(filtered.length===0){
    sel.innerHTML='<option value="">— No classes in this campus —</option>';
    sel.disabled=true;
    if($('sec-existing'))$('sec-existing').innerHTML=`<div style="font-size:12px;color:var(--rd)">No classes found in ${campus} Campus. Add a class first.</div>`;
    return;
  }
  sel.innerHTML=filtered.map((c,i)=>`<option value="${D.classes.indexOf(c)}">${c.name}</option>`).join('');
  sel.disabled=false;
  secClsChange();
}

function secClsChange(){
  const idx=parseInt(($('sec-cls-select')||{}).value)||0;
  const c=D.classes[idx];
  const el=$('sec-existing');
  if(!el||!c) return;
  const secs=c.sections||[];
  if(secs.length===0){el.innerHTML='<div style="font-size:12px;color:var(--s4)">No sections in this class yet.</div>';return;}
  el.innerHTML=`<div style="font-size:11px;font-weight:700;color:var(--s4);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Existing Sections</div>
  <div style="display:flex;flex-wrap:wrap;gap:6px">${secs.map(s=>{
    const cap=c.sectionCapacity&&c.sectionCapacity[s]?` · cap: ${c.sectionCapacity[s]}`:'';
    return`<span style="background:var(--g1);color:var(--g7);padding:3px 10px;border-radius:50px;font-size:12px;font-weight:700">${s}${cap}</span>`;
  }).join('')}</div>`;
}

function saveSection(){
  const idx=parseInt(($('sec-cls-select')||{}).value);
  const secName=(($('sec-name-input')||{}).value||'').trim();
  const capacity=parseInt(($('sec-capacity')||{}).value)||0;
  if(isNaN(idx)||!D.classes[idx]){toast('⚠️ Select a class!');return;}
  if(!secName){toast('⚠️ Section name required!');return;}
  const c=D.classes[idx];
  if(!c.sections) c.sections=[];
  if(c.sections.includes(secName)){toast('⚠️ Section already exists in this class!');return;}
  c.sections.push(secName);
  if(capacity>0){
    if(!c.sectionCapacity) c.sectionCapacity={};
    c.sectionCapacity[secName]=capacity;
  }
  closeMo('addSection');
  rClasses();
  rStudents();
  populateStuDeptCls();
  toast(`✅ Section "${secName}" added to ${c.name}!`);
}


function delStu(i){
  if(!requirePerm('canDelete','delete student'))return;
  if(confirm('Delete student: '+D.students[i].name+'?')){
    auditLog('action','Student deleted: '+D.students[i].name);
    D.students.splice(i,1);buildTx();rStudents();rDash();toast('Student deleted');
  }
}

function viewStu(idx){
  const s=D.students[idx];
  $('vStuName').textContent=s.name;
  $('vStuBody').innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:13px;margin-bottom:14px">
      ${[['Student ID',`<code class="id-tag">${s.id||'-'}</code>`],['Full Name',`<strong>${s.name}</strong>`],['Father Name',s.father||'-'],['Roll Number',`<strong>${s.roll}</strong>`],['Gender',s.gender==='Male'?'<span style="background:#dbeafe;color:#1d4ed8;padding:2px 9px;border-radius:50px;font-size:11px;font-weight:700">Male (Boy)</span>':'<span style="background:#ede9fe;color:#5b21b6;padding:2px 9px;border-radius:50px;font-size:11px;font-weight:700">Female (Girl)</span>'],['Department',s.dept],['Program / Section',`${(s.cls||'-').replace('Inter-','')} / ${s.section||'-'}`],['Year / Semester',s.sem],['Contact',s.contact||'-'],['Fee Amount',`<strong class="pos">Rs ${fmt(s.fee)}</strong>`],['Fee Status',bdg(s.status)]].map(([k,v])=>`<div><div style="font-size:10px;font-weight:700;color:var(--s4);text-transform:uppercase;letter-spacing:1px;margin-bottom:3px">${k}</div><div>${v}</div></div>`).join('')}
    </div>
    <div style="background:var(--s1);border-radius:var(--rads);padding:12px">
      <div style="font-size:10px;font-weight:700;color:var(--s4);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px">Home Address</div>
      <div style="font-size:13px">${s.address||'-'}</div>
    </div>`;
  showMo('viewStu');
}

function saveStu(){
  if(!requirePerm('canEdit','save student'))return;
  clearStuErr();
  const editIdx=parseInt($('stuIdx').value);
  const isEdit=editIdx>=0;
  const nameVal=$('sn').value.trim();
  const rollVal=$('sr').value.trim();
  const feeVal =$('sfa').value.trim();
  let hasErr=false;

  if(!nameVal){setFieldErr('sn','Full Name is required');hasErr=true;}
  if(!rollVal){setFieldErr('sr','Roll Number is required');hasErr=true;}
  if(!feeVal||isNaN(parseInt(feeVal))){setFieldErr('sfa','Valid fee amount is required');hasErr=true;}
  if(rollVal){
    const dup=D.students.findIndex(s=>s.roll.toLowerCase()===rollVal.toLowerCase());
    if(dup>=0&&dup!==editIdx){
      setFieldErr('sr',`Roll No "${rollVal}" already used by ${D.students[dup].name}`);
      hasErr=true;
    }
  }
  if(hasErr)return;

  const feeAmt=parseInt(feeVal)||25000;
  const dueDate=($('s-fdue')||{}).value||'';
  const feeType=($('s-ftype')||{}).value||'full';
  // Add Student always creates the Tuition fee record — other fee types
  // (Lab, Sports, Transport, etc.) are added later via Fee Management's
  // "Bulk Assign Fee" or "Record Payment", not at admission time.
  const feeCat='Tuition';
  const instCount=parseInt(($('s-finst-count')||{}).value)||2;
  const today=new Date(); today.setHours(0,0,0,0);
  const dueDt=dueDate?new Date(dueDate):null;
  if(dueDt) dueDt.setHours(0,0,0,0);
  const isOverdue=dueDt&&dueDt<today;
  const autoStatus=isOverdue?'Overdue':'Pending';

  const clsCode=($('scls')||{}).value||'';
  const gender=($('sgender')||{}).value||'Male';
  const genderKey=gender==='Male'?'Boys':'Girls';
  const clsObj=(D.classes||[]).find(c=>c.code===clsCode&&(c.gender===genderKey||c.gender==='Both'));
  const deptVal=clsObj?`${clsObj.name} (${clsObj.gender})`:clsCode;

  const s={
    id:isEdit?D.students[editIdx].id:genStuId(),
    name:nameVal,father:$('sfn').value.trim()||'-',
    roll:rollVal,contact:$('sc').value.trim()||'-',address:$('sadr').value.trim()||'-',
    gender:gender,
    dept:deptVal,cls:clsCode,section:($('ssec')||{}).value||'A',sem:($('ssm')||{}).value||'1st Year',
    fee:feeAmt,status:autoStatus,
  };

  if(isEdit){
    D.students[editIdx]=s;
    auditLog('action','Student updated: '+s.name);
    toast('Student updated: '+s.name);
  } else {
    D.students.push(s);
    auditLog('action','Student added: '+s.name+' ('+s.id+')');

    if(feeType==='instalment'){
      // Create instalment fee records with level-aware intervals
      const perAmt=Math.floor(feeAmt/instCount);
      const remainder=feeAmt-(perAmt*instCount);
      const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      const baseDate=dueDt||new Date();
      const interval=getInstInterval(s.cls,instCount);
      for(let i=0;i<instCount;i++){
        feeRC++;
        const instAmt=i===instCount-1?perAmt+remainder:perAmt;
        const instDue=new Date(baseDate.getFullYear(),baseDate.getMonth()+(i*interval),baseDate.getDate());
        const instDueStr=instDue.toISOString().slice(0,10);
        const instOverdue=instDue<today;
        D.fees.push({
          student:s.name,roll:s.roll,sem:s.sem,
          amt:instAmt,date:'-',method:'-',
          receipt:'INST-'+feeRC,
          status:instOverdue?'Overdue':'Pending',
          dueDate:instDueStr,
          isInstalment:true,
          instPart:(i+1)+'/'+instCount,
          instMonth:months[instDue.getMonth()]+' '+instDue.getFullYear(),
          instTotal:feeAmt,
          instInterval:interval,
          category:feeCat
        });
      }
      toast('✅ Student added with '+instCount+' instalment plan (every '+interval+' month(s))! ID: '+s.id);
    } else {
      // Single fee record
      D.fees.push({
        student:s.name,roll:s.roll,sem:s.sem,
        amt:feeAmt,date:'-',method:'-',
        receipt:'FEE-'+(++feeRC),
        status:autoStatus,
        dueDate:dueDate||'',
        category:feeCat
      });
      toast('Student added! ID: '+s.id+(isOverdue?' ⚠️ Fee is Overdue':''));
    }
  }
  buildTx();rStudents();rFees();rTx();rDash();closeMo('addStu');
}

function printStudents(){
  const rows=D.students.map(s=>[s.id||'-',s.name,s.father||'-',s.roll,s.dept,(s.cls||'-')+'/'+(s.section||'-'),s.sem,'Rs '+s.fee.toLocaleString(),s.status,s.contact||'-']);
  const thead='<th>ID</th><th>Name</th><th>Father</th><th>Roll</th><th>Dept</th><th>Class/Sec</th><th>Sem</th><th>Fee</th><th>Status</th><th>Contact</th>';
  const body=rows.map(r=>'<tr>'+r.map(c=>'<td>'+c+'</td>').join('')+'</tr>').join('');
  const h='<html><head><meta charset="UTF-8"><style>*{box-sizing:border-box;}body{font-family:Arial,sans-serif;padding:22px;}h2{color:#1a6636;font-size:18px;margin-bottom:6px;}.inf{font-size:12px;color:#666;margin-bottom:12px;}table{width:100%;border-collapse:collapse;}th{background:#1a6636;color:#fff;padding:7px 9px;text-align:left;font-size:11px;}td{padding:7px 9px;border-bottom:1px solid #e0e0e0;font-size:12px;}tr:nth-child(even)td{background:#f5faf6;}@media print{.np{display:none;}}</style></head><body><h2>'+D.settings.instName+' - Student List</h2><div class="inf">Generated: '+new Date().toLocaleString()+' | Total: '+D.students.length+'</div><table><thead><tr>'+thead+'</tr></thead><tbody>'+body+'</tbody></table><div class="np" style="margin-top:12px"><button onclick="window.print()" style="padding:7px 16px;background:#1a6636;color:#fff;border:none;border-radius:6px;cursor:pointer;">Print</button></div></body></html>';
  showPrintPreview(h,'Student List');
}

/* ══════════════════════════════════════════════════
   EMPLOYEES
══════════════════════════════════════════════════ */
let EF={q:'',dp:'',st:''};

function genEmpId(){
  const yr=new Date().getFullYear();
  const mx=D.employees.reduce((m,e)=>{const n=e.id?parseInt((e.id.split('-')[2])||0):0;return n>m?n:m;},0);
  return 'EMP-'+yr+'-'+String(mx+1).padStart(3,'0');
}

function openAddEmp(){
  fillDeptDropdowns();
  $('empIdx').value=-1;$('empMoTitle').textContent='Add New Employee';
  $('empIdPrev').textContent=genEmpId();
  ['en','ed','ec','eaddr','ee'].forEach(id=>{const el=$(id);if(el)el.value='';});
  $('es').value='80000';$('ea').value='15000';$('edp').value=D.departments[0]||'';$('est').value='Active';
  showMo('addEmp');
}

function openEditEmp(idx){
  fillDeptDropdowns();
  const e=D.employees[idx];$('empIdx').value=idx;$('empMoTitle').textContent='Edit Employee';
  $('empIdPrev').textContent=e.id||'-';
  $('en').value=e.name||'';$('ed').value=e.desig||'';$('ec').value=e.contact||'';
  $('eaddr').value=e.address||'';$('ee').value=e.email||'';
  $('es').value=e.salary||80000;$('ea').value=e.allow||15000;
  $('edp').value=e.dept||D.departments[0]||'';$('est').value=e.status||'Active';
  showMo('addEmp');
}


function fillDeptDropdowns(){
  const depts=D.departments;
  const empForm=$('edp');
  if(empForm){
    const cur=empForm.value;
    empForm.innerHTML=depts.map(d=>`<option value="${d}">${d}</option>`).join('');
    if(cur&&depts.includes(cur))empForm.value=cur;
  }
  const empFilter=$('empDeptFilter');
  if(empFilter){
    const cur2=empFilter.value;
    empFilter.innerHTML='<option value="">All Departments</option>'+depts.map(d=>`<option value="${d}">${d}</option>`).join('');
    if(cur2)empFilter.value=cur2;
  }
}

function openManageDepts(){
  renderDeptManager();
  showMo('manageDepts');
}

function renderDeptManager(){
  const b=$('deptList');
  if(!b)return;
  b.innerHTML=D.departments.map((d,i)=>`
    <div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:var(--s1);border-radius:8px;margin-bottom:6px">
      <span style="flex:1;font-size:13px;font-weight:500">${d}</span>
      <span style="font-size:11px;color:var(--s4)">${D.employees.filter(e=>e.dept===d).length} emp</span>
      <button onclick="deleteDept(${i})" class="btn btn-red" style="padding:3px 8px;font-size:11px" title="Delete">🗑</button>
    </div>`).join('');
}

function addDept(){
  const inp=$('newDeptInput');
  const name=inp.value.trim();
  if(!name){toast('Please enter a department name');return;}
  if(D.departments.includes(name)){toast('This department already exists!');return;}
  D.departments.push(name);
  inp.value='';
  fillDeptDropdowns();
  renderDeptManager();
  toast('Department added: '+name);
}

function deleteDept(i){
  const d=D.departments[i];
  const inUse=D.employees.filter(e=>e.dept===d).length;
  if(inUse>0){toast(d+' has '+inUse+' employee(s) — reassign them first');return;}
  if(!confirm('Delete department: '+d+'?'))return;
  D.departments.splice(i,1);
  fillDeptDropdowns();
  renderDeptManager();
  toast('Department deleted');
}

function rEmployees(){
  const data=D.employees.filter(e=>
    (!EF.q||e.name.toLowerCase().includes(EF.q)||e.desig.toLowerCase().includes(EF.q)||(e.id||'').toLowerCase().includes(EF.q))
    &&(!EF.dp||e.dept===EF.dp)&&(!EF.st||e.status===EF.st)
  );
  const payroll=D.employees.reduce((a,b)=>a+b.salary+b.allow,0);
  const depts=new Set(D.employees.map(e=>e.dept)).size;
  $('e-tot').textContent=D.employees.length;
  $('e-act').textContent=D.employees.filter(e=>e.status==='Active').length;
  $('e-pay').textContent=fmt(payroll);
  $('e-dept').textContent=depts;
  $('nb-e').textContent=D.employees.length;
  $('empTB').innerHTML=data.map(e=>{
    const idx=D.employees.indexOf(e);
    return`<tr>
      <td><code class="id-tag">${e.id||'-'}</code></td>
      <td><div style="display:flex;align-items:center;gap:8px"><div class="av ${avC(idx)}">${e.name[0]}</div><div><div style="font-weight:600">${e.name}</div><div style="font-size:11px;color:var(--s4)">${e.email||''}</div></div></div></td>
      <td><span style="font-size:11px;background:var(--s1);color:var(--s5);padding:3px 10px;border-radius:50px;font-weight:700;white-space:nowrap">${e.desig}</span></td>
      <td><span style="font-size:12px;font-weight:600;color:var(--s5)">${e.dept}</span></td>
      <td>Rs ${fmt(e.salary)}</td><td>Rs ${fmt(e.allow)}</td>
      <td><strong>Rs ${fmt(e.salary+e.allow)}</strong></td>
      <td><code class="id-tag" style="background:var(--s1);color:var(--s5)">${e.contact||'-'}</code></td><td>${bdg(e.status)}</td>
      <td style="white-space:nowrap">
        <div class="action-menu-wrap">
          <button class="action-dots-btn" onclick="toggleActionMenu(this)" title="Actions">⋯</button>
          <div class="action-dropdown">
            <button onclick="openEditEmp(${idx});closeAllMenus()">✏️ Edit Employee</button>
            <button onclick="viewEmp(${idx});closeAllMenus()">👁 View Details</button>
            <button onclick="printPayslip(${idx});closeAllMenus()">🧾 Salary Slip</button>
            <button onclick="openIncrementModal(${idx});closeAllMenus()">📈 Salary Increment</button>
            <button onclick="showIncHistory(${idx});closeAllMenus()">📋 Increment History</button>
            <hr>
            <button class="adt-red" onclick="delEmp(${idx});closeAllMenus()">🗑 Delete</button>
          </div>
        </div>
      </td>
    </tr>`;
  }).join('');
}
function fE(v){EF.q=v.toLowerCase();rEmployees();}
function fEDp(v){EF.dp=v;rEmployees();}
function fESt(v){EF.st=v;rEmployees();}
function delEmp(i){
  if(!requirePerm('canDelete','delete employee'))return;
  const emp=D.employees[i];
  const salCount=D.salaries.filter(s=>s.name===emp.name||(emp.id&&s.empId===emp.id)).length;
  const msg=salCount>0
    ?`Delete "${emp.name}"?\n⚠️ This employee has ${salCount} salary record(s) in the system.\nThose records will become orphaned if you proceed.\n\nDelete anyway?`
    :`Delete: ${emp.name}?`;
  if(confirm(msg)){
    auditLog('action','Employee deleted: '+emp.name);
    D.employees.splice(i,1);
    buildTx();rEmployees();
    toast('Employee deleted');
  }
}

function viewEmp(idx){
  const e=D.employees[idx];
  const history=D.salaries.filter(s=>s.name===e.name||(e.id&&s.empId===e.id)).sort((a,b)=>{
    const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
    const parse=m=>{const p=(m||'').split(' ');return p.length===2?parseInt(p[1])*12+months.indexOf(p[0]):0;};
    return parse(b.month)-parse(a.month);
  });
  const totalPaid=history.filter(s=>s.status==='Paid').reduce((a,s)=>a+netPay(s),0);
  const avgNet=history.length?Math.round(history.reduce((a,s)=>a+netPay(s),0)/history.length):0;
  $('vEmpName').textContent=e.name;
  $('vEmpBody').innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:13px;margin-bottom:14px">
      ${[['Employee ID',`<code class="id-tag">${e.id||'-'}</code>`],['Designation',e.desig],['Department',e.dept],['Status',bdg(e.status)],['Basic Salary',`<strong>Rs ${fmt(e.salary)}</strong>`],['Allowances',`Rs ${fmt(e.allow)}`],['Net Pay',`<strong class="pos">Rs ${fmt(e.salary+e.allow)}</strong>`],['Contact',e.contact||'-'],['Email',`<span style="font-size:11px">${e.email||'-'}</span>`],['Address',e.address||'-']].map(([k,v])=>`<div style="background:var(--s1);border-radius:8px;padding:9px 11px"><div style="font-size:10px;font-weight:700;color:var(--s4);text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px">${k}</div><div>${v}</div></div>`).join('')}
    </div>
    <div style="border-top:1.5px solid var(--s2);padding-top:14px;margin-bottom:10px">
      <div style="font-size:12px;font-weight:700;color:var(--s5);text-transform:uppercase;letter-spacing:.8px;margin-bottom:10px">📊 Salary History (${history.length} records)</div>
      ${history.length===0?`<div style="text-align:center;padding:20px;color:var(--s4);font-size:13px">Koi salary record nahi mila</div>`:`
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:12px">
        <div style="background:#f0fdf4;border-radius:8px;padding:10px 12px;text-align:center">
          <div style="font-size:10px;color:#15803d;font-weight:700;text-transform:uppercase;letter-spacing:.5px">Total Paid</div>
          <div style="font-size:15px;font-weight:800;color:#0d3b1e;margin-top:3px">Rs ${fmt(totalPaid)}</div>
        </div>
        <div style="background:#eff6ff;border-radius:8px;padding:10px 12px;text-align:center">
          <div style="font-size:10px;color:#1d4ed8;font-weight:700;text-transform:uppercase;letter-spacing:.5px">Avg Net Pay</div>
          <div style="font-size:15px;font-weight:800;color:#1e3a8a;margin-top:3px">Rs ${fmt(avgNet)}</div>
        </div>
        <div style="background:#fef3c7;border-radius:8px;padding:10px 12px;text-align:center">
          <div style="font-size:10px;color:#92400e;font-weight:700;text-transform:uppercase;letter-spacing:.5px">Records</div>
          <div style="font-size:15px;font-weight:800;color:#78350f;margin-top:3px">${history.length} months</div>
        </div>
      </div>
      <div style="max-height:220px;overflow-y:auto;border:1px solid var(--s2);border-radius:8px">
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="background:var(--s1);position:sticky;top:0">
            <th style="padding:7px 10px;text-align:left;font-size:10px;color:var(--s4);font-weight:700;text-transform:uppercase;letter-spacing:.5px">Month</th>
            <th style="padding:7px 10px;text-align:right;font-size:10px;color:var(--s4);font-weight:700;text-transform:uppercase;letter-spacing:.5px">Basic</th>
            <th style="padding:7px 10px;text-align:right;font-size:10px;color:var(--s4);font-weight:700;text-transform:uppercase;letter-spacing:.5px">Allowance</th>
            <th style="padding:7px 10px;text-align:right;font-size:10px;color:var(--rd);font-weight:700;text-transform:uppercase;letter-spacing:.5px">Deduct</th>
            <th style="padding:7px 10px;text-align:right;font-size:10px;color:var(--s4);font-weight:700;text-transform:uppercase;letter-spacing:.5px">Net Pay</th>
            <th style="padding:7px 10px;text-align:center;font-size:10px;color:var(--s4);font-weight:700;text-transform:uppercase;letter-spacing:.5px">Status</th>
            <th style="padding:7px 10px;text-align:center;font-size:10px;color:var(--s4);font-weight:700;text-transform:uppercase;letter-spacing:.5px">Slip</th>
          </tr></thead>
          <tbody>
          ${history.map(s=>{
            const net=netPay(s);
            const sidx=D.salaries.indexOf(s);
            return`<tr style="border-top:1px solid var(--s2)">
              <td style="padding:8px 10px;font-weight:600">${s.month}</td>
              <td style="padding:8px 10px;text-align:right">Rs ${fmt(s.basic)}</td>
              <td style="padding:8px 10px;text-align:right">Rs ${fmt(s.allow)}</td>
              <td style="padding:8px 10px;text-align:right;color:var(--rd)">${s.deduct?'- Rs '+fmt(s.deduct):'-'}</td>
              <td style="padding:8px 10px;text-align:right;font-weight:700">Rs ${fmt(net)}</td>
              <td style="padding:8px 10px;text-align:center">${bdg(s.status)}</td>
              <td style="padding:8px 10px;text-align:center"><button onclick="printSalSlip(${sidx})" class="btn" style="padding:2px 8px;font-size:11px">🧾</button></td>
            </tr>`;
          }).join('')}
          </tbody>
        </table>
      </div>`}
    </div>
    <div style="display:flex;gap:8px;margin-top:4px">
      <button class="mo-save" onclick="printPayslip(${idx});closeMo('viewEmp')">🧾 Latest Payslip</button>
      <button class="btn btn-green" onclick="closeMo('viewEmp');openAddSal();setTimeout(()=>{if($('sln-sel'))$('sln-sel').value='${e.name}';salEmpSelected('${e.name}');},100)">+ Process Salary</button>
    </div>`;
  showMo('viewEmp');
}

function saveEmp(){
  if(!requirePerm('canEdit','save employee'))return;
  const editIdx=parseInt($('empIdx').value);const isEdit=editIdx>=0;
  const nameVal=$('en').value.trim();const desigVal=$('ed').value.trim();
  if(!nameVal){toast('Employee name is required');return;}
  const e={id:isEdit?D.employees[editIdx].id:genEmpId(),name:nameVal,desig:desigVal||'Staff',contact:$('ec').value.trim()||'-',address:$('eaddr').value.trim()||'-',email:$('ee').value.trim()||'-',dept:$('edp').value,salary:parseInt($('es').value)||60000,allow:parseInt($('ea').value)||10000,status:$('est').value};
  if(isEdit){
    const old=D.employees[editIdx];
    const salaryChanged=old.salary!==e.salary||old.allow!==e.allow||old.desig!==e.desig||old.dept!==e.dept;
    D.employees[editIdx]=e;
    auditLog('action','Employee updated: '+e.name);
    // Improvement 4: Auto-sync PENDING salary records when employee data changes
    if(salaryChanged){
      const pendingSals=D.salaries.filter(s=>s.status==='Pending'&&(s.name===e.name||(e.id&&s.empId===e.id)));
      if(pendingSals.length>0){
        pendingSals.forEach(s=>{s.basic=e.salary;s.allow=e.allow;s.desig=e.desig;s.dept=e.dept;s.empId=e.id;});
        auditLog('action',`Auto-synced ${pendingSals.length} pending salary record(s) for ${e.name}`);
        toast(`Employee updated! ✅ ${pendingSals.length} pending salary record(s) auto-synced`);
      } else {
        toast('Employee updated! (Paid salaries unchanged — use Sync manually if needed)');
      }
    } else {
      toast('Employee updated!');
    }
  }
  else{D.employees.push(e);auditLog('action','Employee added: '+e.name+' ('+e.id+')');toast('Employee added! ID: '+e.id);}
  buildTx();rEmployees();closeMo('addEmp');
}

function printPayslip(idx){
  const e=D.employees[idx];const net=e.salary+e.allow;
  const h='<html><head><meta charset="UTF-8"><style>body{font-family:Arial,sans-serif;padding:28px;max-width:560px;margin:0 auto}.hdr{text-align:center;border-bottom:3px solid #1a6636;padding-bottom:12px;margin-bottom:18px}.hdr h1{color:#1a6636;font-size:20px;margin:0}.row{display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #eee;font-size:13px}.sec{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#999;margin:14px 0 7px}.total{background:#1a6636;color:#fff;padding:11px;border-radius:8px;display:flex;justify-content:space-between;font-weight:700;margin-top:14px;font-size:15px}@media print{.np{display:none}}</style></head><body><div class="hdr"><h1>'+D.settings.instName+'</h1><p style="color:#666;font-size:12px;margin:4px 0 0">'+D.settings.instName+', '+D.settings.city+'</p><p style="font-weight:700;margin:6px 0 0">SALARY SLIP</p></div><div class="sec">Employee</div><div class="row"><span>ID</span><strong>'+( e.id||'-')+'</strong></div><div class="row"><span>Name</span><strong>'+e.name+'</strong></div><div class="row"><span>Designation</span><span>'+e.desig+'</span></div><div class="row"><span>Department</span><span>'+e.dept+'</span></div><div class="sec">Salary</div><div class="row"><span>Basic</span><span>Rs '+e.salary.toLocaleString()+'</span></div><div class="row"><span>Allowances</span><span>Rs '+e.allow.toLocaleString()+'</span></div><div class="row"><span>Deductions</span><span>Rs 0</span></div><div class="total"><span>Net Pay</span><span>Rs '+net.toLocaleString()+'</span></div><p style="text-align:center;font-size:11px;color:#999;margin-top:14px">Generated: '+new Date().toLocaleString()+'</p><div class="np" style="margin-top:12px"><button onclick="window.print()" style="padding:7px 16px;background:#1a6636;color:#fff;border:none;border-radius:6px;cursor:pointer">Print</button></div></body></html>';
  showPrintPreview(h,'Salary Slip - '+e.name);
}

function printEmp(){
  const rows=D.employees.map(e=>[e.id||'-',e.name,e.desig,e.dept,'Rs '+e.salary.toLocaleString(),'Rs '+e.allow.toLocaleString(),'Rs '+(e.salary+e.allow).toLocaleString(),e.status]);
  const thead='<th>ID</th><th>Name</th><th>Designation</th><th>Dept</th><th>Basic</th><th>Allowance</th><th>Net Pay</th><th>Status</th>';
  const body=rows.map(r=>'<tr>'+r.map(c=>'<td>'+c+'</td>').join('')+'</tr>').join('');
  const h='<html><head><meta charset="UTF-8"><style>*{box-sizing:border-box;}body{font-family:Arial,sans-serif;padding:22px;}h2{color:#1a6636;font-size:18px;margin-bottom:6px;}.inf{font-size:12px;color:#666;margin-bottom:12px;}table{width:100%;border-collapse:collapse;}th{background:#1a6636;color:#fff;padding:7px 9px;text-align:left;font-size:11px;}td{padding:7px 9px;border-bottom:1px solid #e0e0e0;font-size:12px;}tr:nth-child(even)td{background:#f5faf6;}@media print{.np{display:none;}}</style></head><body><h2>'+D.settings.instName+' - Employee List</h2><div class="inf">Generated: '+new Date().toLocaleString()+' | Total: '+D.employees.length+'</div><table><thead><tr>'+thead+'</tr></thead><tbody>'+body+'</tbody></table><div class="np" style="margin-top:12px"><button onclick="window.print()" style="padding:7px 16px;background:#1a6636;color:#fff;border:none;border-radius:6px;cursor:pointer;">Print</button></div></body></html>';
  showPrintPreview(h,'Employee List');
}

/* ══════════════════════════════════════════════════
   FEES
══════════════════════════════════════════════════ */
let FF={q:'',st:'',mt:'',gn:'',cls:'',sec:''};
let feeRC=1010;
let voucherRC=5001; // Persistent voucher counter — increments each time a voucher is printed
let instVoucherRC=1; // Persistent counter for the instalment voucher scheme (FEE-YYYY-000001), any N — never reused
function nextInstVoucherNo(){
  const yr=new Date().getFullYear();
  return `${D.settings.voucherPrefix||'FEE'}-${yr}-${String(instVoucherRC++).padStart(6,'0')}`;
}

function rFees(){
  // Populate fee filter dropdowns
  populateFeeFilterDropdowns();
  const data=D.fees.filter(f=>{
    const stu=D.students.find(s=>s.roll===f.roll);
    return(!FF.q||f.student.toLowerCase().includes(FF.q)||f.roll.toLowerCase().includes(FF.q)||(f.receipt||'').toLowerCase().includes(FF.q))
      &&(!FF.st||f.status===FF.st)
      &&(!FF.mt||f.method===FF.mt)
      &&(!FF.gn||!stu||(stu.gender||'')=== FF.gn)
      &&(!FF.cls||!stu||stu.cls===FF.cls)
      &&(!FF.sec||!stu||stu.section===FF.sec);
  });
  const paid=D.fees.reduce((a,b)=>a+feePaidAmt(b),0);
  const pend=D.fees.filter(f=>f.status==='Pending'||f.status==='Partial').reduce((a,b)=>a+feeRemainingAmt(b),0);
  const over=D.fees.filter(f=>f.status==='Overdue'||f.status==='Partial-Overdue').reduce((a,b)=>a+feeRemainingAmt(b),0);
  const tot=paid+pend+over;
  $('f-c').textContent=fmt(paid);$('f-p').textContent=fmt(pend);$('f-o').textContent=fmt(over);
  $('f-r').textContent=(tot>0?Math.round((paid/tot)*100):0)+'%';
  $('feeTB').innerHTML=data.map(f=>{
    const idx=D.fees.findIndex(x=>x===f);
    const fStu=D.students.find(s=>s.roll===f.roll);
    const gnBadge=fStu?(fStu.gender==='Male'?'<span style="font-size:9px;background:#dbeafe;color:#1d4ed8;padding:2px 7px;border-radius:50px;font-weight:700">Boy</span>':'<span style="font-size:9px;background:#ede9fe;color:#5b21b6;padding:2px 7px;border-radius:50px;font-weight:700">Girl</span>'):'—';
    // Instalment progress badge
    let instBadge='';
    let totalInst=0;
    if(f.isInstalment){
      const allInst=D.fees.filter(x=>x.roll===f.roll&&x.isInstalment&&x.instTotal===f.instTotal);
      const paidInst=allInst.filter(x=>feeComputeStatus(x)==='Paid').length;
      totalInst=allInst.length||parseInt((f.instPart||'1/1').split('/')[1])||1;
      const progColor=paidInst===totalInst?'var(--g5)':paidInst>0?'var(--yl)':'#92400e';
      instBadge=`<span style="font-size:9px;background:#fef3cd;color:${progColor};padding:2px 7px;border-radius:50px;font-weight:700;margin-left:4px">📆 Inst ${f.instPart||''} · ${paidInst}/${totalInst} paid</span>`;
    }

    // Due date display
    let dueDateDisplay='—';
    if(f.dueDate){
      const today=new Date(); today.setHours(0,0,0,0);
      const due=new Date(f.dueDate); due.setHours(0,0,0,0);
      const diffDays=Math.ceil((due-today)/(1000*60*60*24));
      if(f.status==='Paid'){
        dueDateDisplay=`<span style="color:var(--s4);font-size:12px">${f.dueDate}</span>`;
      } else if(diffDays<0){
        dueDateDisplay=`<span style="color:var(--rd);font-weight:700;font-size:12px">⚠️ ${f.dueDate}<br><span style="font-size:10px">${Math.abs(diffDays)} days overdue</span></span>`;
      } else if(diffDays<=7){
        dueDateDisplay=`<span style="color:#d97706;font-weight:700;font-size:12px">⏰ ${f.dueDate}<br><span style="font-size:10px">${diffDays} days remaining</span></span>`;
      } else {
        dueDateDisplay=`<span style="color:var(--s5);font-size:12px">${f.dueDate}<br><span style="font-size:10px;color:var(--s4)">${diffDays} days remaining</span></span>`;
      }
    }

    return`<tr>
      <td><code class="id-tag">${f.receipt||'-'}</code>${instBadge}</td>
      <td><strong>${f.student}</strong></td>
      <td>${f.roll}</td><td>${gnBadge}</td><td>${f.sem}</td>
      <td><strong>Rs ${fmt(f.amt)}</strong></td>
      <td>${dueDateDisplay}</td>
      <td style="font-size:12px;color:var(--s4)">${f.date!=='-'?f.date:'—'}</td>
      <td>${f.method!=='-'?f.method:'—'}</td>
      <td>${bdg(f.status)}</td>
      <td style="white-space:nowrap">
        <div class="action-menu-wrap">
          <button class="action-dots-btn" onclick="toggleActionMenu(this)" title="Actions">⋯</button>
          <div class="action-dropdown">
            ${f.status==='Paid'
              ?`<button onclick="printReceipt(${idx});closeAllMenus()">🧾 Print Receipt</button>`
              :`<button onclick="quickCollect(${idx});closeAllMenus()">💳 Collect Payment</button>
                <button onclick="printVoucher(${idx});closeAllMenus()">🖨️ Print Fee Voucher</button>`
            }
            ${f.isInstalment?`
                <hr>
                <button onclick="printInstalmentVouchers('${f.roll}',${f.instTotal},'all');closeAllMenus()">📄 Generate All ${totalInst} Vouchers</button>
                <button onclick="printInstalmentVouchers('${f.roll}',${f.instTotal},'paid');closeAllMenus()">✅ Generate Paid Vouchers</button>
                <button onclick="printInstalmentVouchers('${f.roll}',${f.instTotal},'remaining');closeAllMenus()">⏳ Generate Remaining Vouchers</button>
            `:''}
            ${f.status==='Overdue'&&!f.lateFeeApplied
              ?`<button onclick="applyLateFee(${idx});closeAllMenus()">⚠️ Apply Late Fee</button>`
              :''}
            <button onclick="viewFee(${idx});closeAllMenus()">👁 View Details</button>
            <button onclick="openEditFee(${idx});closeAllMenus()">✏️ Edit</button>
            <hr>
            <button class="adt-red" onclick="delFee(${idx});closeAllMenus()">🗑 Delete</button>
          </div>
        </div>
      </td>
    </tr>`;
  }).join('');
}

// Manually applies the configured Late Fee Penalty % to an Overdue fee record.
// Never runs automatically — staff must trigger this themselves (button in the
// fee row's action menu, or the button shown in View Details for overdue fees).
// Guarded by f.lateFeeApplied so the same record can't be charged twice.
function applyLateFee(idx){
  if(!requirePerm('canEdit','apply late fee'))return;
  const f=D.fees[idx];
  if(!f||f.status!=='Overdue'){toast('❌ Late fee can only be applied to Overdue records');return;}
  if(f.lateFeeApplied){toast('⚠️ Late fee already applied to this record');return;}
  const lateAmt=suggestedLateFee(f.amt);
  f.amt+=lateAmt;
  f.lateFeeApplied=true;
  f.appliedLateFeeAmt=lateAmt;
  auditLog('action','Late fee applied: '+f.student+' — Rs '+lateAmt+' ('+D.settings.lateFeePct+'% of original amount)');
  buildTx();rFees();rTx();rDash();rStudents();
  toast('✅ Late fee of Rs '+fmt(lateAmt)+' added to '+f.student+"'s fee");
}
function fF(v){FF.q=v.toLowerCase();rFees();}
function fFSt(v){FF.st=v;rFees();}
function fFMt(v){FF.mt=v;rFees();}
function fFGn(v){FF.gn=v;rFees();}
function fFCls(v){FF.cls=v;rFees();}
function fFSec(v){FF.sec=v;rFees();}

function populateFeeFilterDropdowns(){
  if(!D.classes) return;
  const clsSel=$('fee-filter-cls');
  const secSel=$('fee-filter-sec');
  if(clsSel){
    const cur=clsSel.value;
    const allCls=[...new Set(D.classes.map(c=>c.code))];
    clsSel.innerHTML='<option value="">All Classes</option>'+allCls.map(code=>{
      const c=D.classes.find(x=>x.code===code);
      return`<option value="${code}"${cur===code?' selected':''}>${c?c.name:code}</option>`;
    }).join('');
  }
  if(secSel){
    const cur=secSel.value;
    const allSecs=[...new Set(D.classes.flatMap(c=>c.sections||[]))].sort();
    secSel.innerHTML='<option value="">All Sections</option>'+allSecs.map(s=>`<option value="${s}"${cur===s?' selected':''}>${s}</option>`).join('');
  }
}
function delFee(i){
  if(!requirePerm('canEdit','delete fee'))return;
  const fee=D.fees[i];
  if(!fee){toast('Record not found');return;}
  if(!confirm('Delete fee record for '+fee.student+'?')) return;
  const linkedTx=D.tx.find(t=>t.srcType==='fee'&&t.srcIdx===i);
  auditLog('action','Fee deleted: '+fee.student+' Rs '+fee.amt);
  D.fees.splice(i,1);
  buildTx();rFees();rTx();rDash();rStudents();
  if(linkedTx)auditLog('action','Transaction voided: '+linkedTx.id+' (Rs '+fmt(linkedTx.amt)+') — removed as linked fee record was deleted');
  toast('Fee record deleted');
}
function sendReminders(){
  const rolls=new Set();
  D.fees.filter(f=>f.status!=='Paid').forEach(f=>rolls.add(f.roll));
  D.transportFees.filter(t=>t.status!=='Paid').forEach(t=>rolls.add(t.roll));
  toast(`Reminders sent to ${rolls.size} students`);
}

/* ══════════════════════════════════════════════════
   DISCIPLINARY FINES — separate from fee/late-fee system.
   Staff can charge a student a fine for a rule violation
   (uniform, attendance, misconduct, etc.) independent of
   their tuition/transport/admission fee records.
══════════════════════════════════════════════════ */
let FNF={q:'',st:''};
let _fineSelectedStu=null;

function rFines(){
  const badge=$('nb-f');
  const pendingCount=D.fines.filter(f=>f.status==='Pending').length;
  if(badge) badge.textContent=pendingCount;

  const data=D.fines.filter(f=>
    (!FNF.q||f.student.toLowerCase().includes(FNF.q)||f.roll.toLowerCase().includes(FNF.q)||(f.reason||'').toLowerCase().includes(FNF.q))
    &&(!FNF.st||f.status===FNF.st)
  );
  const total=D.fines.reduce((a,b)=>a+b.amt,0);
  const paid=D.fines.filter(f=>f.status==='Paid').reduce((a,b)=>a+b.amt,0);
  const pending=D.fines.filter(f=>f.status==='Pending').reduce((a,b)=>a+b.amt,0);
  if($('fn-t'))$('fn-t').textContent=fmt(total);
  if($('fn-p'))$('fn-p').textContent=fmt(paid);
  if($('fn-pd'))$('fn-pd').textContent=fmt(pending);
  if($('fn-c'))$('fn-c').textContent=D.fines.length;

  const tb=$('fineTB');
  if(!tb)return;
  if(!data.length){
    tb.innerHTML='<tr><td colspan="7" style="text-align:center;padding:20px;color:var(--s4);font-size:13px">No fines found</td></tr>';
    return;
  }
  tb.innerHTML=data.map(f=>{
    const idx=D.fines.indexOf(f);
    return`<tr>
      <td><strong>${f.student}</strong></td>
      <td>${f.roll}</td>
      <td>${f.reason}</td>
      <td><strong>Rs ${fmt(f.amt)}</strong></td>
      <td style="font-size:12px;color:var(--s4)">${f.date||'—'}</td>
      <td>${bdg(f.status)}</td>
      <td style="white-space:nowrap">
        ${f.status==='Pending'?`<button class="btn btn-outline" style="font-size:11px;padding:5px 9px" onclick="markFinePaid(${idx})">✅ Mark Paid</button>`:''}
        <button class="btn btn-outline" style="font-size:11px;padding:5px 9px" onclick="openEditFine(${idx})">✏️ Edit</button>
        <button class="btn btn-outline" style="font-size:11px;padding:5px 9px;color:var(--rd);border-color:#fca5a5" onclick="delFine(${idx})">🗑 Delete</button>
      </td>
    </tr>`;
  }).join('');
}
function fnF(v){FNF.q=v.toLowerCase();rFines();}
function fnFSt(v){FNF.st=v;rFines();}

function fineReasonChange(val){
  $('fn-reason-other-wrap').style.display=val==='Other'?'block':'none';
}

function fineSearchStu(q){
  const list=$('fnstu-list');
  if(!q){list.innerHTML='';return;}
  const ql=q.toLowerCase();
  const results=D.students.filter(s=>
    s.name.toLowerCase().includes(ql)||s.roll.toLowerCase().includes(ql)
  ).slice(0,8);
  if(!results.length){list.innerHTML='<div style="padding:12px;text-align:center;color:var(--s4);font-size:12px">No student found</div>';return;}
  list.innerHTML=results.map(s=>`
    <div onclick="fineSelectStu('${s.roll}')"
      style="display:flex;align-items:center;gap:10px;padding:9px 12px;cursor:pointer;border-bottom:1px solid var(--s1)"
      onmouseover="this.style.background='var(--g0)'" onmouseout="this.style.background=''">
      <div style="width:28px;height:28px;border-radius:50%;background:${s.gender==='Male'?'var(--bl)':'var(--pu)'};color:#fff;font-weight:700;font-size:11px;display:flex;align-items:center;justify-content:center;flex-shrink:0">${s.name[0]}</div>
      <div style="flex:1;min-width:0"><div style="font-weight:700;font-size:13px;color:var(--s6)">${s.name}</div>
      <div style="font-size:11px;color:var(--s4)">${s.roll} · ${s.dept}</div></div>
    </div>`).join('');
}

function fineSelectStu(roll){
  const s=D.students.find(st=>st.roll===roll);
  if(!s)return;
  _fineSelectedStu=s;
  $('fn-name').value=s.name;
  $('fn-roll').value=s.roll;
  $('fnstu-selected').style.display='block';
  $('fnstu-av').textContent=s.name[0];
  $('fnstu-av').style.background=s.gender==='Male'?'var(--bl)':'var(--pu)';
  $('fnstu-nm').textContent=s.name;
  $('fnstu-info').textContent=(s.roll||'')+(s.dept?' · '+s.dept:'');
  $('fnstu-list').innerHTML='';
  $('fnstu-search').value='';
}

function fineDeselectStu(){
  _fineSelectedStu=null;
  $('fn-name').value='';
  $('fn-roll').value='';
  $('fnstu-selected').style.display='none';
}

function openAddFine(){
  if(!requirePerm('canEdit','add fine'))return;
  _fineSelectedStu=null;
  $('fineEditIdx').value='-1';
  $('fineMoTitle').textContent='🚨 Add Disciplinary Fine';
  $('fn-name').value='';$('fn-roll').value='';
  $('fnstu-search').value='';$('fnstu-list').innerHTML='';
  $('fnstu-selected').style.display='none';
  $('fn-reason').value='Uniform Violation';
  fineReasonChange('Uniform Violation');
  $('fn-reason-other').value='';
  $('fn-amt').value='500';
  $('fn-date').value=isoDate();
  $('fn-status').value='Pending';
  showMo('addFine');
}

function openEditFine(idx){
  if(!requirePerm('canEdit','edit fine'))return;
  const f=D.fines[idx];
  if(!f)return;
  const stu=D.students.find(s=>s.roll===f.roll);
  $('fineEditIdx').value=idx;
  $('fineMoTitle').textContent='✏️ Edit Disciplinary Fine';
  $('fn-name').value=f.student;$('fn-roll').value=f.roll;
  if(stu) fineSelectStu(stu.roll);
  else { $('fnstu-selected').style.display='block';$('fnstu-nm').textContent=f.student;$('fnstu-info').textContent=f.roll;$('fnstu-av').textContent=f.student[0]; }
  const knownReasons=['Uniform Violation','Late Attendance','Indiscipline / Misconduct','Property Damage','Unauthorized Mobile Use','Skipping Class'];
  if(knownReasons.includes(f.reason)){
    $('fn-reason').value=f.reason;
    fineReasonChange(f.reason);
  } else {
    $('fn-reason').value='Other';
    fineReasonChange('Other');
    $('fn-reason-other').value=f.reason;
  }
  $('fn-amt').value=f.amt;
  $('fn-date').value=f.date||isoDate();
  $('fn-status').value=f.status;
  showMo('addFine');
}

function saveFine(){
  if(!requirePerm('canEdit','save fine'))return;
  const editIdx=parseInt($('fineEditIdx').value);
  const isEdit=editIdx>=0;
  const stuName=$('fn-name').value||'';
  const stuRoll=$('fn-roll').value||'';
  if(!stuName||!stuRoll){toast('❌ Please select a student');return;}
  const reasonSel=$('fn-reason').value;
  const reason=reasonSel==='Other'?($('fn-reason-other').value.trim()||'Other'):reasonSel;
  const amt=parseInt($('fn-amt').value)||0;
  if(!amt||amt<0){toast('❌ Valid fine amount is required');return;}
  const date=$('fn-date').value||isoDate();
  const status=$('fn-status').value;
  if(isEdit){
    const fineId=D.fines[editIdx].fineId||('FIN-'+(++D.seq.fine));
    const f={fineId:fineId,student:stuName,roll:stuRoll,reason:reason,amt:amt,date:date,status:status};
    D.fines[editIdx]=f;
    syncFeeForFine(f);
    auditLog('action','Fine updated: '+stuName+' — '+reason);
    toast('✅ Fine updated');
  } else {
    const fineId='FIN-'+(++D.seq.fine);
    const f={fineId:fineId,student:stuName,roll:stuRoll,reason:reason,amt:amt,date:date,status:status};
    D.fines.push(f);
    syncFeeForFine(f);
    auditLog('action','Fine issued: '+stuName+' — '+reason+' (Rs '+amt+')');
    toast('✅ Fine of Rs '+fmt(amt)+' added for '+stuName+(status==='Pending'?' — will be added to their next fee payment automatically':''));
  }
  buildTx();rFines();rFees();rTx();rDash();
  closeMo('addFine');
  fineDeselectStu();
}

// Only used when a fine is Paid straight away (e.g. staff collected cash on
// the spot when issuing it). Creates/updates a matching Paid fee record so
// there's a receipt/audit trail in Fee Management + Transactions.
// Pending fines are NOT given their own fee row — instead they get merged
// automatically into whatever fee the student next pays (see
// checkPendingFines() + its use in quickCollect / feeSelectStu / saveFee).
function syncFeeForFine(fine){
  if(!fine||!fine.fineId||fine.status!=='Paid')return;
  let linkedFee=D.fees.find(x=>x.linkedFineId===fine.fineId);
  if(linkedFee){
    linkedFee.amt=fine.amt;
    if(linkedFee.status!=='Paid'){
      linkedFee.status='Paid';
      linkedFee.date=todayStr();
      linkedFee.method=linkedFee.method&&linkedFee.method!=='-'?linkedFee.method:'Cash';
      linkedFee.receipt=linkedFee.receipt&&linkedFee.receipt!=='-'?linkedFee.receipt:'FIN-RCPT-'+(++feeRC);
    }
  } else {
    feeRC++;
    D.fees.push({
      student:fine.student,roll:fine.roll,sem:(D.students.find(s=>s.roll===fine.roll)||{}).sem||'',
      amt:fine.amt,date:todayStr(),method:'Cash',receipt:'FIN-RCPT-'+feeRC,
      status:'Paid',dueDate:fine.date,category:'Fine',linkedFineId:fine.fineId
    });
  }
}

// Called whenever a Fee record's status changes to Paid — if that fee is
// linked to a disciplinary fine (category "Fine"), marks the fine itself as
// Paid too, so Disciplinary Fines auto-reflects payment made through the
// regular fee-collection flow (covers the case where a fine's own Paid fee
// row above gets edited later).
function syncFineFromFee(feeRecord){
  if(!feeRecord||!feeRecord.linkedFineId)return;
  const fine=D.fines.find(x=>x.fineId===feeRecord.linkedFineId);
  if(!fine)return;
  if(feeRecord.status==='Paid'&&fine.status!=='Paid'){
    fine.status='Paid';
    auditLog('action','Fine auto-marked Paid via fee collection: '+fine.student+' — '+fine.reason);
  }
}

// ── Auto-merging a student's unpaid disciplinary fines into their fee payment ──
// This is the core "fine gets added to fee automatically" behavior: whenever
// staff select a student to record a payment, or collect an existing
// pending/overdue fee, we check for unpaid fines on that roll and fold their
// total straight into the amount about to be collected. Once that fee is
// saved as Paid, the folded-in fines are auto-marked Paid too — so the
// disciplinary fine settles itself, with no separate row to remember to
// collect.
function checkPendingFines(roll){
  const list=D.fines.filter(x=>x.roll===roll&&x.status==='Pending');
  const sum=list.reduce((a,b)=>a+b.amt,0);
  return {sum,list};
}

let _feeIncludedFineIds=[];
function applyPendingFinesToFeeModal(roll,baseAmt){
  const {sum,list}=checkPendingFines(roll);
  const note=$('fee-fine-note');
  if(!sum){
    _feeIncludedFineIds=[];
    if(note)note.style.display='none';
    return baseAmt;
  }
  _feeIncludedFineIds=list.map(f=>f.fineId);
  if(note){
    const reasons=list.map(f=>f.reason+' (Rs '+fmt(f.amt)+')').join(', ');
    note.innerHTML='🚨 Includes Rs '+fmt(sum)+' outstanding disciplinary fine — '+reasons+'. Will be marked Paid along with this fee.';
    note.style.display='block';
  }
  return baseAmt+sum;
}

function markFinePaid(idx){
  if(!requirePerm('canEdit','mark fine paid'))return;
  const f=D.fines[idx];
  if(!f)return;
  f.status='Paid';
  syncFeeForFine(f);
  auditLog('action','Fine marked Paid: '+f.student+' — '+f.reason);
  buildTx();rFines();rFees();rTx();rDash();
  toast('✅ Fine marked as Paid');
}

function delFine(idx){
  if(!requirePerm('canEdit','delete fine'))return;
  const f=D.fines[idx];
  if(!f)return;
  if(!confirm('Delete this fine for '+f.student+'?'))return;
  // Remove the linked fee-dues record too, but only if it hasn't been
  // collected yet — a Paid record stays as the payment's audit trail.
  const linkedIdx=D.fees.findIndex(x=>x.linkedFineId===f.fineId&&x.status!=='Paid');
  if(linkedIdx>=0) D.fees.splice(linkedIdx,1);
  D.fines.splice(idx,1);
  auditLog('action','Fine deleted: '+f.student+' — '+f.reason);
  buildTx();rFines();rFees();rTx();rDash();
  toast('Fine deleted');
}

/* ══════════════════════════════════════════════════
   TRANSPORT FEE — own module, own records. Not every
   student uses the college van, so this is assigned
   per-student (search & select, like Disciplinary
   Fines) rather than being folded into the general
   Tuition fee or bulk-assigned to everyone. Has its
   own Pending/Overdue/Paid lifecycle and its own
   dedicated printable voucher (see printTransportVoucher).
══════════════════════════════════════════════════ */
let TFF={q:'',st:'',gn:'',cls:'',sec:'',route:''};
let _tfSelectedStu=null;

function rTransportFee(){
  populateTransportFilterDropdowns();
  const data=D.transportFees.filter(t=>{
    const stu=D.students.find(s=>s.roll===t.roll);
    return(!TFF.q||t.student.toLowerCase().includes(TFF.q)||t.roll.toLowerCase().includes(TFF.q)||(t.route||'').toLowerCase().includes(TFF.q))
      &&(!TFF.st||t.status===TFF.st)
      &&(!TFF.gn||!stu||(stu.gender||'')===TFF.gn)
      &&(!TFF.cls||!stu||stu.cls===TFF.cls)
      &&(!TFF.sec||!stu||stu.section===TFF.sec)
      &&(!TFF.route||t.route===TFF.route);
  });
  const total=D.transportFees.reduce((a,b)=>a+b.amt,0);
  const paid=D.transportFees.filter(t=>t.status==='Paid').reduce((a,b)=>a+b.amt,0);
  const pending=D.transportFees.filter(t=>t.status!=='Paid').reduce((a,b)=>a+b.amt,0);
  if($('tf-total'))  $('tf-total').textContent=fmt(total);
  if($('tf-paid'))   $('tf-paid').textContent=fmt(paid);
  if($('tf-pending'))$('tf-pending').textContent=fmt(pending);
  if($('tf-count'))  $('tf-count').textContent=D.transportFees.length;

  const tb=$('tfTB');
  if(!tb)return;
  if(!data.length){
    tb.innerHTML='<tr><td colspan="7" style="text-align:center;padding:20px;color:var(--s4);font-size:13px">No transport fee records found</td></tr>';
    return;
  }
  tb.innerHTML=data.map(t=>{
    const idx=D.transportFees.indexOf(t);
    return`<tr>
      <td><strong>${t.student}</strong></td>
      <td>${t.roll}</td>
      <td style="font-size:12px;color:var(--s4)">${t.route||'—'}</td>
      <td><strong>Rs ${fmt(t.amt)}</strong></td>
      <td>${t.dueDate||'—'}</td>
      <td>${bdg(t.status)}</td>
      <td style="white-space:nowrap">
        <div class="action-menu-wrap">
          <button class="action-dots-btn" onclick="toggleActionMenu(this)" title="Actions">⋯</button>
          <div class="action-dropdown">
            ${t.status==='Paid'
              ?`<button onclick="printTransportVoucher(${idx});closeAllMenus()">🧾 Print Receipt</button>`
              :`<button onclick="collectTransportFee(${idx});closeAllMenus()">💳 Collect Payment</button>
                <button onclick="printTransportVoucher(${idx});closeAllMenus()">🖨️ Print Voucher</button>`
            }
            <button onclick="openEditTransportFee(${idx});closeAllMenus()">✏️ Edit</button>
            <hr>
            <button class="adt-red" onclick="delTransportFee(${idx});closeAllMenus()">🗑 Delete</button>
          </div>
        </div>
      </td>
    </tr>`;
  }).join('');
}
function tfF(v){TFF.q=v.toLowerCase();rTransportFee();}
function tfFSt(v){TFF.st=v;rTransportFee();}
function tfFGn(v){TFF.gn=v;rTransportFee();}
function tfFCls(v){TFF.cls=v;rTransportFee();}
function tfFSec(v){TFF.sec=v;rTransportFee();}
function tfFRoute(v){TFF.route=v;rTransportFee();}

function populateTransportFilterDropdowns(){
  if(!D.classes) return;
  const clsSel=$('transport-filter-cls');
  const secSel=$('transport-filter-sec');
  const routeSel=$('transport-filter-route');
  if(clsSel){
    const cur=clsSel.value;
    const allCls=[...new Set(D.classes.map(c=>c.code))];
    clsSel.innerHTML='<option value="">All Classes</option>'+allCls.map(code=>{
      const c=D.classes.find(x=>x.code===code);
      return`<option value="${code}"${cur===code?' selected':''}>${c?c.name:code}</option>`;
    }).join('');
  }
  if(secSel){
    const cur=secSel.value;
    const allSecs=[...new Set(D.classes.flatMap(c=>c.sections||[]))].sort();
    secSel.innerHTML='<option value="">All Sections</option>'+allSecs.map(s=>`<option value="${s}"${cur===s?' selected':''}>${s}</option>`).join('');
  }
  if(routeSel){
    const cur=routeSel.value;
    const allRoutes=[...new Set(D.transportFees.map(t=>t.route).filter(Boolean))].sort();
    routeSel.innerHTML='<option value="">All Routes</option>'+allRoutes.map(r=>`<option value="${r}"${cur===r?' selected':''}>${r}</option>`).join('');
  }
}

function transportSearchStu(q){
  const list=$('tfstu-list');
  if(!q){list.innerHTML='';return;}
  const ql=q.toLowerCase();
  const results=D.students.filter(s=>
    s.name.toLowerCase().includes(ql)||s.roll.toLowerCase().includes(ql)
  ).slice(0,8);
  if(!results.length){list.innerHTML='<div style="padding:12px;text-align:center;color:var(--s4);font-size:12px">No student found</div>';return;}
  list.innerHTML=results.map(s=>`
    <div onclick="transportSelectStu('${s.roll}')"
      style="display:flex;align-items:center;gap:10px;padding:9px 12px;cursor:pointer;border-bottom:1px solid var(--s1)"
      onmouseover="this.style.background='var(--g0)'" onmouseout="this.style.background=''">
      <div style="width:28px;height:28px;border-radius:50%;background:${s.gender==='Male'?'var(--bl)':'var(--pu)'};color:#fff;font-weight:700;font-size:11px;display:flex;align-items:center;justify-content:center;flex-shrink:0">${s.name[0]}</div>
      <div style="flex:1;min-width:0"><div style="font-weight:700;font-size:13px;color:var(--s6)">${s.name}</div>
      <div style="font-size:11px;color:var(--s4)">${s.roll} · ${s.dept}</div></div>
    </div>`).join('');
}
function transportSelectStu(roll){
  const s=D.students.find(st=>st.roll===roll);
  if(!s)return;
  _tfSelectedStu=s;
  $('tf-name').value=s.name;
  $('tf-roll').value=s.roll;
  $('tfstu-selected').style.display='block';
  $('tfstu-av').textContent=s.name[0];
  $('tfstu-av').style.background=s.gender==='Male'?'var(--bl)':'var(--pu)';
  $('tfstu-nm').textContent=s.name;
  $('tfstu-info').textContent=(s.roll||'')+(s.dept?' · '+s.dept:'');
  $('tfstu-list').innerHTML='';
  $('tfstu-search').value='';
}
function transportDeselectStu(){
  _tfSelectedStu=null;
  $('tf-name').value='';
  $('tf-roll').value='';
  $('tfstu-selected').style.display='none';
}

function openAddTransportFee(){
  if(!requirePerm('canEdit','assign transport fee'))return;
  _tfSelectedStu=null;
  $('tf-editIdx').value='-1';
  $('tfMoTitle').textContent='🚌 Assign Transport Fee';
  $('tf-name').value='';$('tf-roll').value='';
  $('tfstu-search').value='';$('tfstu-list').innerHTML='';
  $('tfstu-selected').style.display='none';
  $('tf-route').value='';
  $('tf-amt').value='2500';
  $('tf-due').value=isoDate();
  $('tf-status').value='Pending';
  showMo('addTransportFee');
}
function openEditTransportFee(idx){
  if(!requirePerm('canEdit','edit transport fee'))return;
  const t=D.transportFees[idx];
  if(!t)return;
  const stu=D.students.find(s=>s.roll===t.roll);
  $('tf-editIdx').value=idx;
  $('tfMoTitle').textContent='✏️ Edit Transport Fee';
  $('tf-name').value=t.student;$('tf-roll').value=t.roll;
  if(stu) transportSelectStu(stu.roll);
  else { $('tfstu-selected').style.display='block';$('tfstu-nm').textContent=t.student;$('tfstu-info').textContent=t.roll;$('tfstu-av').textContent=t.student[0]; }
  $('tf-route').value=t.route||'';
  $('tf-amt').value=t.amt;
  $('tf-due').value=t.dueDate||isoDate();
  $('tf-status').value=t.status==='Overdue'?'Pending':t.status;
  showMo('addTransportFee');
}
function saveTransportFee(){
  if(!requirePerm('canEdit','save transport fee'))return;
  const editIdx=parseInt($('tf-editIdx').value);
  const isEdit=editIdx>=0;
  const stuName=$('tf-name').value||'';
  const stuRoll=$('tf-roll').value||'';
  if(!stuName||!stuRoll){toast('❌ Please select a student');return;}
  const route=$('tf-route').value.trim();
  const amt=parseInt($('tf-amt').value)||0;
  if(!amt||amt<0){toast('❌ Valid amount is required');return;}
  const due=$('tf-due').value;
  if(!due){toast('❌ Due date is required');return;}
  const statusSel=$('tf-status').value;
  const today=new Date(); today.setHours(0,0,0,0);
  const dueDt=new Date(due); dueDt.setHours(0,0,0,0);
  const status=statusSel==='Paid'?'Paid':(dueDt<today?'Overdue':'Pending');
  if(isEdit){
    const t=D.transportFees[editIdx];
    const wasPaid=t.status==='Paid';
    t.student=stuName;t.roll=stuRoll;t.route=route;t.amt=amt;t.dueDate=due;
    if(statusSel==='Paid'&&!wasPaid){
      t.status='Paid';t.date=todayStr();t.method=t.method&&t.method!=='-'?t.method:'Cash';
      t.receipt=t.receipt&&t.receipt!=='-'?t.receipt:'TFR-'+(2000+D.transportFees.length);
    } else if(statusSel!=='Paid'){
      t.status=status;
    }
    auditLog('action','Transport fee updated: '+stuName);
    toast('✅ Transport fee updated');
  } else {
    D.seq.tf=(D.seq.tf||0)+1;
    const t={tfId:'TF-'+D.seq.tf,student:stuName,roll:stuRoll,route:route,amt:amt,dueDate:due,status:status,
      date:status==='Paid'?todayStr():'-', method:status==='Paid'?'Cash':'-',
      receipt:status==='Paid'?('TFR-'+(2000+D.transportFees.length+1)):'-'};
    D.transportFees.push(t);
    auditLog('action','Transport fee assigned: '+stuName+' — Rs '+amt);
    toast('✅ Transport fee of Rs '+fmt(amt)+' assigned to '+stuName);
  }
  buildTx();rTransportFee();rDash();
  closeMo('addTransportFee');
  transportDeselectStu();
}
function collectTransportFee(idx){
  if(!requirePerm('canEdit','collect transport fee'))return;
  const t=D.transportFees[idx];
  if(!t)return;
  t.status='Paid';
  t.date=todayStr();
  t.method='Cash';
  t.receipt=t.receipt&&t.receipt!=='-'?t.receipt:'TFR-'+(2000+idx+1);
  auditLog('action','Transport fee collected: '+t.student+' — Rs '+t.amt);
  buildTx();rTransportFee();rDash();
  toast('✅ Rs '+fmt(t.amt)+' collected from '+t.student);
}
function delTransportFee(idx){
  if(!requirePerm('canEdit','delete transport fee'))return;
  const t=D.transportFees[idx];
  if(!t)return;
  if(!confirm('Delete transport fee record for '+t.student+'?'))return;
  D.transportFees.splice(idx,1);
  auditLog('action','Transport fee deleted: '+t.student);
  buildTx();rTransportFee();rDash();
  toast('Transport fee record deleted');
}


/* ══════════════════════════════════════════════════
   BULK FEE ASSIGNMENT — e.g. add a Lab Fee or Sports
   Fee for a whole department, a whole campus, or the
   entire college in one go, instead of one student at
   a time. Skips a student if they already have an
   identical (same category + due date) fee record, so
   the button is safe to click again without duplicating.
══════════════════════════════════════════════════ */
function openBulkFee(){
  if(!requirePerm('canEdit','bulk assign fee'))return;
  const depts=[...new Set(D.students.map(s=>s.dept))].sort();
  $('bf-dept').innerHTML=depts.map(d=>`<option value="${d}">${d}</option>`).join('');
  if($('bf-dept-campus')) $('bf-dept-campus').value='all';
  $('bf-scope').value='all';
  bulkFeeScopeChange('all');
  $('bf-cat').value='Lab Fee';
  $('bf-amt').value='1000';
  $('bf-due').value=isoDate();
  if($('bf-separate')) $('bf-separate').checked=false;
  updateBulkFeePreview();
  showMo('bulkFee');
}

// A student's existing fee record that this bulk fee can be merged into —
// any non-instalment record that isn't fully paid yet. Instalment plans are
// skipped since they have their own locked per-part structure.
function getBulkFeeMergeTarget(roll){
  return D.fees.find(x=>x.roll===roll&&x.status!=='Paid'&&!x.isInstalment);
}

function bulkFeeScopeChange(v){
  $('bf-dept-wrap').style.display=v==='dept'?'block':'none';
  $('bf-dept-campus-wrap').style.display=v==='dept'?'block':'none';
  $('bf-gender-wrap').style.display=v==='gender'?'block':'none';
  updateBulkFeePreview();
}

function getBulkFeeTargets(){
  const scope=$('bf-scope').value;
  let list=D.students;
  if(scope==='dept'){
    list=D.students.filter(s=>s.dept===$('bf-dept').value);
    const campus=$('bf-dept-campus')&&$('bf-dept-campus').value;
    if(campus&&campus!=='all') list=list.filter(s=>s.gender===campus);
  }
  else if(scope==='gender') list=D.students.filter(s=>s.gender===$('bf-gender').value);
  return list;
}

function updateBulkFeePreview(){
  const targets=getBulkFeeTargets();
  const amt=parseInt($('bf-amt').value)||0;
  const separate=$('bf-separate')&&$('bf-separate').checked;
  const prev=$('bf-preview');
  if(!prev)return;
  if(!targets.length){
    prev.innerHTML='⚠️ No students match this scope.';
    return;
  }
  let extra;
  if(separate){
    extra=`Each student will get their own <strong>separate voucher</strong>.`;
  }else{
    const willMerge=targets.filter(s=>getBulkFeeMergeTarget(s.roll)).length;
    extra=`<strong>${willMerge}</strong> will be merged into an existing pending voucher, <strong>${targets.length-willMerge}</strong> will get a new voucher (no pending fee found).`;
  }
  prev.innerHTML=`This will assign the fee to <strong>${targets.length}</strong> student(s) — total <strong>Rs ${fmt(amt*targets.length)}</strong>.<br>${extra}`;
}
// Live-update the preview as amount/scope fields change
document.addEventListener('input',(e)=>{
  if(e.target && (e.target.id==='bf-amt')) updateBulkFeePreview();
});
document.addEventListener('change',(e)=>{
  if(e.target && (e.target.id==='bf-dept'||e.target.id==='bf-dept-campus'||e.target.id==='bf-gender'||e.target.id==='bf-separate')) updateBulkFeePreview();
});

function confirmBulkFee(){
  if(!requirePerm('canEdit','bulk assign fee'))return;
  const targets=getBulkFeeTargets();
  if(!targets.length){toast('❌ No students match this scope');return;}
  const amt=parseInt($('bf-amt').value)||0;
  if(!amt||amt<0){toast('❌ Valid amount is required');return;}
  const due=$('bf-due').value;
  if(!due){toast('❌ Due date is required');return;}
  const category=$('bf-cat').value.trim()||'Fee';
  const separate=$('bf-separate')&&$('bf-separate').checked;
  const confirmMsg=separate
    ? `Assign "${category}" fee of Rs ${fmt(amt)} to ${targets.length} student(s) as a separate voucher each? This cannot be bulk-undone.`
    : `Assign "${category}" fee of Rs ${fmt(amt)} to ${targets.length} student(s)? It will merge into each student's existing pending voucher where one exists, otherwise a new voucher will be created. This cannot be bulk-undone.`;
  if(!confirm(confirmMsg))return;

  const today=new Date(); today.setHours(0,0,0,0);
  const dueDt=new Date(due); dueDt.setHours(0,0,0,0);
  const st=dueDt<today?'Overdue':'Pending';

  let added=0, skipped=0, merged=0;
  targets.forEach(s=>{
    // Default behaviour: fold this fee into the student's existing pending/
    // overdue voucher instead of creating a new, separately-shown one.
    if(!separate){
      const existing=getBulkFeeMergeTarget(s.roll);
      if(existing){
        existing.amt=(existing.amt||0)+amt;
        if(!existing.category){
          existing.category=category;
        }else if(!existing.category.split(' + ').map(c=>c.trim()).includes(category)){
          existing.category=existing.category+' + '+category;
        }
        existing.status=feeComputeStatus(existing);
        if(s.status!=='Paid'&&s.status!=='Overdue') s.status=existing.status;
        merged++;
        return;
      }
      // No pending voucher to merge into (fully paid or no fee record at
      // all) — fall through and create a fresh one below.
    }

    const alreadyHas=D.fees.some(x=>x.roll===s.roll&&x.category===category&&x.dueDate===due);
    if(alreadyHas){skipped++;return;}
    D.fees.push({
      student:s.name,roll:s.roll,sem:s.sem,
      amt:amt,date:'-',method:'-',receipt:'-',
      status:st,dueDate:due,category:category
    });
    if(s.status!=='Paid'&&s.status!=='Overdue') s.status=st;
    added++;
  });

  const parts=[];
  if(merged) parts.push(`${merged} merged into existing voucher`);
  if(added) parts.push(`${added} new voucher${added>1?'s':''}`);
  if(skipped) parts.push(`${skipped} skipped — already had it`);
  auditLog('action',`Bulk fee assigned: ${category} — Rs ${amt} to ${targets.length} student(s) (${parts.join(', ')})`);
  buildTx();rFees();rStudents();rDash();
  closeMo('bulkFee');
  toast(`✅ ${category} fee assigned`+(merged?`, ${merged} merged`:'')+(added?`, ${added} new`:'')+(skipped?`, ${skipped} skipped`:''));
}

function viewFee(idx){
  const f=D.fees[idx];
  if(!f) return;
  const stu=D.students.find(s=>s.roll===f.roll)||{};
  $('vFeeName').textContent=f.student;
  let instHtml='';
  if(f.isInstalment&&f.instTotal){
    const allInst=D.fees.filter(x=>x.roll===f.roll&&x.isInstalment&&x.instTotal===f.instTotal);
    const paidCount=allInst.filter(x=>feeComputeStatus(x)==='Paid').length;
    const totalCount=allInst.length;
    const paidAmt=allInst.reduce((a,b)=>a+feePaidAmt(b),0);
    const pct=Math.round((paidAmt/f.instTotal)*100);
    instHtml=`<div style="background:var(--g0);border:1px solid var(--g1);border-radius:var(--rads);padding:12px 14px;margin-top:12px"><div style="font-size:10px;font-weight:700;color:var(--g7);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">📆 Instalment Plan</div><div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:1px solid var(--g1)"><span>This Instalment</span><strong>${f.instPart||''}</strong></div><div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:1px solid var(--g1)"><span>Paid</span><strong style="color:var(--g7)">${paidCount} of ${totalCount}</strong></div><div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:1px solid var(--g1)"><span>Total Fee</span><span>Rs ${f.instTotal.toLocaleString()}</span></div><div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0"><span>Paid So Far</span><strong style="color:var(--g7)">Rs ${paidAmt.toLocaleString()}</strong></div><div style="background:var(--s2);height:6px;border-radius:50px;margin-top:8px;overflow:hidden"><div style="height:100%;width:${pct}%;background:var(--g5);border-radius:50px"></div></div></div>`;
  }
  const lateFeeHtml = f.status==='Overdue'
    ? (f.lateFeeApplied
        ? `<div style="background:#fff1f1;border:1px solid #fca5a5;border-radius:var(--rads);padding:10px 14px;margin-top:12px;font-size:13px;color:#b91c1c">✅ Late fee already applied to this record.</div>`
        : `<div style="background:#fff1f1;border:1px solid #fca5a5;border-radius:var(--rads);padding:10px 14px;margin-top:12px;font-size:13px;color:#b91c1c">⚠️ Overdue — suggested late fee at ${D.settings.lateFeePct}% is <strong>Rs ${fmt(suggestedLateFee(f.amt))}</strong> (Settings → Fee Configuration). Not added automatically. <button class="btn btn-outline" style="margin-top:8px;font-size:11px;padding:5px 10px;color:#b91c1c;border-color:#fca5a5" onclick="applyLateFee(${idx});closeMo('viewFee')">⚠️ Apply Late Fee Now</button></div>`)
    : '';
  $('vFeeBody').innerHTML=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:13px;margin-bottom:12px">${[['Receipt No',`<code class="id-tag">${f.receipt||'-'}</code>`],['Student Name',`<strong>${f.student}</strong>`],['Roll Number',f.roll],['Fee Category',f.category||'Tuition'],['Gender',(stu.gender||'-')],['Department',(stu.dept||'-')],['Program',(stu.cls||'-')],['Semester',f.sem],['Amount',`<strong class="pos">Rs ${fmt(f.amt)}</strong>`],['Due Date',f.dueDate||'-'],['Payment Date',f.date&&f.date!=='-'?f.date:'-'],['Method',f.method&&f.method!=='-'?f.method:'-'],['Status',bdg(f.status)]].map(([k,v])=>`<div><div style="font-size:10px;font-weight:700;color:var(--s4);text-transform:uppercase;letter-spacing:1px;margin-bottom:3px">${k}</div><div>${v}</div></div>`).join('')}</div>${instHtml}${lateFeeHtml}<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">${f.status==='Paid'?`<button class="mo-save" onclick="printReceipt(${idx});closeMo('viewFee')">🧾 Print Receipt</button>`:`<button class="mo-save" onclick="closeMo('viewFee');quickCollect(${idx})">💳 Collect Payment</button>`}<button class="mo-cancel" onclick="closeMo('viewFee');openEditFee(${idx})">✏️ Edit</button></div>`;
  showMo('viewFee');
}

function saveFee(){
  if(!requirePerm('canEdit','save fee'))return;
  const editIdx=parseInt($('feeEditIdx').value);
  const isEdit=editIdx>=0;
  const stuRoll=($('fr')||{}).value||'';
  const stuName=($('fn')||{}).value||'';
  const fa=$('fa').value.trim();
  if(!stuName||!stuRoll||!fa){toast('Student and Amount are required');return;}

  // ── INSTALMENT RECORD: partial-payment path ──────────────────────────
  // Status here is always DERIVED from paidAmt vs amt (never chosen from a
  // dropdown), and every payment is appended to D.feePayments rather than
  // silently overwriting the previous one.
  if(isEdit && D.fees[editIdx] && D.fees[editIdx].isInstalment){
    const f=D.fees[editIdx];
    const already=feePaidAmt(f);
    let payNow=parseInt(($('fPayNow')||{}).value)||0;
    payNow=Math.max(0,Math.min(payNow, f.amt-already)); // never allow paid > payable
    if(payNow<=0){toast('Enter an amount greater than 0 to record a payment');return;}
    feeRC++;
    const newPaidAmt=already+payNow;
    const newStatus=feeComputeStatus({...f,paidAmt:newPaidAmt});
    const receipt=($('frc').value.trim()||'REC-'+feeRC);
    const method=$('fpm').value;
    const payDate=todayStr();

    f.paidAmt=newPaidAmt;
    f.status=newStatus;
    f.date=payDate;         // date of most recent payment
    f.method=method;
    f.receipt=receipt;
    f.dueDate=$('fdd').value||f.dueDate;

    D.feePayments.push({
      paymentId:'PMT-'+feeRC, roll:stuRoll, student:stuName,
      instPart:f.instPart, instTotal:f.instTotal, voucherRef:f.receipt,
      amount:payNow, date:payDate, method, reference:receipt,
      receivedBy:(D.currentUser&&D.currentUser.name)||'System', status:'Success'
    });

    auditLog('action',`Instalment payment recorded: ${stuName} — Rs ${payNow.toLocaleString()} (Inst ${f.instPart}) — new status ${feeStatusLabel(newStatus)}`);

    // Update overall student status from the full 4-part plan, not just this row
    const stu=D.students.find(s=>s.roll===stuRoll);
    if(stu){
      const planRows=instPlanRows(f);
      const allPaid=planRows.every(r=>feeComputeStatus(r)==='Paid');
      const anyOverdue=planRows.some(r=>feeComputeStatus(r).includes('Overdue'));
      stu.status=allPaid?'Paid':anyOverdue?'Overdue':'Pending';
    }

    buildTx();rFees();rFines();rTx();rDash();rStudents();
    closeMo('addFee');
    _feeSelectedStu=null;
    toast(`✅ Payment recorded — Rs ${payNow.toLocaleString()} · Instalment now ${feeStatusLabel(newStatus)}`);
    setTimeout(()=>{ printReceipt(editIdx, payNow); }, 600);
    return;
  }

  // ── NON-INSTALMENT (full payment) RECORD: existing behavior, unchanged ──
  feeRC++;
  const status=$('fst').value;
  const isPaid=status==='Paid';
  let amtVal=parseInt(fa)||0;
  // Safety: if a pending fine's amount was folded into the displayed total
  // (see applyPendingFinesToFeeModal) but staff ends up saving this record
  // as NOT Paid, back the fine amount back out — otherwise it would sit
  // baked into an unpaid fee record while the fine is still separately
  // Pending, and get folded in a second time next time this fee is collected.
  if(!isPaid && _feeIncludedFineIds.length){
    const backedOutSum=_feeIncludedFineIds.reduce((sum,fid)=>{
      const fine=D.fines.find(x=>x.fineId===fid);
      return fine&&fine.status!=='Paid'?sum+fine.amt:sum;
    },0);
    amtVal=Math.max(0,amtVal-backedOutSum);
    _feeIncludedFineIds=[];
    const fnote=$('fee-fine-note'); if(fnote) fnote.style.display='none';
  }
  const f={
    student:stuName, roll:stuRoll,
    sem:$('fsm').value,
    amt:amtVal, paidAmt:isPaid?amtVal:0,
    date:isPaid?todayStr():'-',
    method:isPaid?$('fpm').value:'-',
    receipt:isPaid?($('frc').value.trim()||'REC-'+feeRC):'-',
    status:status,
    dueDate:$('fdd').value||'',
    category:'Tuition'
  };
  // Preserve the disciplinary-fine link if editing/collecting a Fine-category record
  if(isEdit&&D.fees[editIdx]&&D.fees[editIdx].linkedFineId){
    f.category='Fine';
    f.linkedFineId=D.fees[editIdx].linkedFineId;
  }
  let savedIdx=-1;
  if(isEdit){
    D.fees[editIdx]=f;
    savedIdx=editIdx;
    auditLog('action','Fee updated: '+stuName);
    if(isPaid){
      const stu=D.students.find(s=>s.roll===stuRoll);
      if(stu){
        const allStudentFees=D.fees.filter(x=>x.roll===stuRoll);
        const allPaid=allStudentFees.every((x,xi)=>x.status==='Paid'||(xi===editIdx));
        if(allPaid) stu.status='Paid';
      }
    }
  } else {
    D.fees.push(f);
    savedIdx=D.fees.length-1;
    auditLog('action','Fee recorded: '+stuName+' Rs '+f.amt);
    // Update student status if new fee is Paid and all student fees are paid
    if(isPaid){
      const stu=D.students.find(s=>s.roll===stuRoll);
      if(stu){
        const allStudentFees=D.fees.filter(x=>x.roll===stuRoll);
        const allPaid=allStudentFees.every(x=>x.status==='Paid');
        if(allPaid) stu.status='Paid';
      }
    }
  }
  // If this fee record is linked to a disciplinary fine and it's now Paid,
  // auto-mark that fine as Paid too (this is the "pay fee → fine settles
  // automatically" behavior).
  if(isPaid) syncFineFromFee(f);
  // If unpaid disciplinary fines were automatically folded into this
  // payment's amount (see applyPendingFinesToFeeModal), settle them too —
  // this is what makes a fine "auto add to fee" whenever the student next
  // pays, rather than needing to be collected as a separate line item.
  if(isPaid && _feeIncludedFineIds.length){
    _feeIncludedFineIds.forEach(fid=>{
      const fine=D.fines.find(x=>x.fineId===fid);
      if(fine && fine.status!=='Paid'){
        fine.status='Paid';
        auditLog('action','Fine settled via fee payment: '+fine.student+' — '+fine.reason+' (Rs '+fine.amt+')');
      }
    });
    _feeIncludedFineIds=[];
    const fnote=$('fee-fine-note'); if(fnote) fnote.style.display='none';
  }
  buildTx();rFees();rFines();rTx();rDash();rStudents();
  closeMo('addFee');
  _feeSelectedStu=null;
  // Auto-print receipt immediately when paid
  if(isPaid && savedIdx>=0){
    toast('✅ Payment saved — printing receipt…');
    // Small delay to let modal close + DOM settle before printing
    setTimeout(()=>{
      const fee=D.fees[savedIdx];
      if(fee && fee.status==='Paid') printReceipt(savedIdx);
    }, 600);
  } else {
    toast('Fee record saved!');
  }
}

function saveFeeInstalments(){
  if(!requirePerm('canEdit','save fee instalments'))return;
  const stuName=($('fn')||{}).value||'';
  const stuRoll=($('fr')||{}).value||'';
  const fa=parseInt($('fa').value)||0;
  const sem=$('fsm').value;
  if(!stuName||!stuRoll||!fa){toast('Student and Amount are required');return;}

  // Read the N admin-entered amounts + due dates and validate before saving
  // anything — the system must NEVER accept installments whose sum doesn't
  // match the total fee (see the live validator wired to these same inputs
  // in feeInstRowInput / feeValidateInstSum). N comes from feeGetInstCount()
  // (the #fInstCount select — 2/3/4/6…), not a hard-coded 4, so whichever
  // count the admin picked is exactly what gets rendered and saved.
  const count=feeGetInstCount();
  const amounts=Array.from({length:count},(_,i)=>parseInt(($('fInstAmt'+i)||{}).value)||0);
  const dueDates=Array.from({length:count},(_,i)=>($('fInstDate'+i)||{}).value||'');
  const sum=amounts.reduce((a,b)=>a+b,0);
  if(amounts.some(a=>a<=0)){toast(`❌ Each of the ${count} instalments must have an amount greater than 0`);return;}
  if(dueDates.some(d=>!d)){toast(`❌ Each of the ${count} instalments needs a due date`);return;}
  if(sum!==fa){toast(`❌ Instalments (Rs ${sum.toLocaleString()}) must add up to the Total Fee (Rs ${fa.toLocaleString()})`);return;}

  const today=new Date(); today.setHours(0,0,0,0);
  const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  for(let i=0;i<count;i++){
    feeRC++;
    const dueDate=new Date(dueDates[i]);
    const isOverdue=dueDate<today;
    const monthLabel=months[dueDate.getMonth()]+' '+dueDate.getFullYear();
    D.fees.push({
      student:stuName, roll:stuRoll, sem:sem,
      amt:amounts[i], paidAmt:0,
      date:'-', method:'-',
      receipt:'INST-'+feeRC,
      status:isOverdue?'Overdue':'Pending',
      dueDate:dueDates[i],
      isInstalment:true,
      instIdx:i,
      instPart:(i+1)+'/'+count,
      instMonth:monthLabel,
      instTotal:fa,
      category:'Tuition'
    });
  }
  // Update student status
  const stu=D.students.find(s=>s.roll===stuRoll);
  if(stu&&stu.status!=='Paid') stu.status=D.fees.some(f=>f.roll===stuRoll&&f.status==='Overdue')?'Overdue':'Pending';
  auditLog('action',count+'-part fee structure created: '+stuName+' — Total Rs '+fa+' ('+amounts.map(a=>'Rs '+a.toLocaleString()).join(' + ')+')');
  buildTx();rFees();rTx();rDash();rStudents();
  closeMo('addFee');
  toast(`✅ Fee structure saved — ${count} instalments created!`);
  _feeSelectedStu=null;
}

// ── Fee modal state ──
let _feeSelectedStu=null;

function openAddFee(){
  _feeSelectedStu=null;
  _feeIncludedFineIds=[];
  const fnote=$('fee-fine-note'); if(fnote) fnote.style.display='none';
  $('feeEditIdx').value='-1';
  $('feeMoTitle').textContent='💳 Record Fee Payment';
  $('fstu-search').value='';
  $('fstu-list').innerHTML='';
  $('fstu-selected').style.display='none';
  $('fstep1-next').disabled=true;
  $('fstep1-next').style.opacity='.4';
  $('fa').value='25000';
  $('frc').value='';
  $('fInstCheck').checked=false;
  feeToggleInstalment(false);
  feeStep(1);
  showMo('addFee');
}

function openEditFee(idx){
  if(!requirePerm('canEdit','edit fee'))return;
  const f=D.fees[idx];
  _feeSelectedStu=D.students.find(s=>s.roll===f.roll)||{name:f.student,roll:f.roll,id:'',dept:'',sem:f.sem,cls:''};
  $('feeEditIdx').value=idx;
  $('feeMoTitle').textContent='✏️ Edit Fee Record';
  $('fn').value=f.student;
  $('fr').value=f.roll;
  feeShowSelected(_feeSelectedStu);
  $('fa').value=f.amt;
  $('fsm').value=f.sem;
  $('fpm').value=f.method!=='-'?f.method:'Cash';
  $('frc').value=f.receipt!=='-'?f.receipt:'';
  $('fdd').value=f.dueDate||'';
  $('fInstCheck').checked=false;
  feeToggleInstalment(false);

  if(f.isInstalment){
    // Instalments use partial-payment entry — status is DERIVED from the
    // amount paid, never chosen manually, so it can't drift out of sync.
    $('fStatusWrap').style.display='none';
    $('fPartialPayWrap').style.display='block';
    const already=feePaidAmt(f);
    $('fPay-already').textContent='Rs '+already.toLocaleString();
    $('fPay-owed').textContent='Rs '+f.amt.toLocaleString();
    $('fPayNow').value=feeRemainingAmt(f);
    $('fPayNow').max=feeRemainingAmt(f);
    feePreviewPartial();
    $('fst').value=feeComputeStatus(f)==='Paid'?'Paid':'Pending'; // kept in sync for saveFee's isEdit branch, but not shown
  }else{
    $('fStatusWrap').style.display='block';
    $('fPartialPayWrap').style.display='none';
    $('fst').value=f.status;
    feeStatusChange(f.status);
  }
  // If this is an instalment fee, show the full plan overview below step indicator
  feeShowInstPlan(f.roll, f.instTotal||null);
  feeStep(2);
  showMo('addFee');
}

// Live preview shown while entering a partial payment against an instalment
// — recalculates new cumulative paid amount, resulting status, and
// remaining balance on every keystroke, and caps entry at what's still owed
// (never allow Paid Amount > Payable Amount).
function feePreviewPartial(){
  const idx=parseInt($('feeEditIdx').value);
  const f=D.fees[idx];
  if(!f)return;
  const already=feePaidAmt(f);
  const owed=f.amt;
  let payNow=parseInt($('fPayNow').value)||0;
  const maxAllowed=owed-already;
  if(payNow>maxAllowed){ payNow=maxAllowed; $('fPayNow').value=maxAllowed; }
  if(payNow<0){ payNow=0; $('fPayNow').value=0; }
  const newPaid=already+payNow;
  const newStatus=newPaid>=owed?'Paid':newPaid>0?'Partial':'Pending';
  const box=$('fPay-preview');
  if(box){
    box.style.color=newStatus==='Paid'?'#065f46':newStatus==='Partial'?'#92400e':'#6b7280';
    box.textContent=`→ New status: ${feeStatusLabel(newStatus)} · Paid so far: Rs ${newPaid.toLocaleString()} · Remaining: Rs ${(owed-newPaid).toLocaleString()}`;
  }
}

function feeShowInstPlan(roll, instTotal){
  const planDiv=$('fee-inst-plan');
  if(!planDiv) return;
  if(!instTotal){planDiv.style.display='none';return;}
  const today=new Date(); today.setHours(0,0,0,0);
  const allInst=D.fees.filter(f=>f.roll===roll&&f.isInstalment&&f.instTotal===instTotal);
  if(!allInst.length){planDiv.style.display='none';return;}
  const paidCount=allInst.filter(f=>feeComputeStatus(f)==='Paid').length;
  const totalCount=allInst.length;
  const paidAmt=allInst.reduce((a,b)=>a+feePaidAmt(b),0);
  const totalAmt=allInst.reduce((a,b)=>a+b.amt,0);
  const pct=Math.round((paidAmt/totalAmt)*100);
  let html=`<div style="margin-bottom:14px;background:var(--g0);border:1px solid var(--g1);border-radius:var(--rads);padding:12px 14px">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
      <span style="font-size:12px;font-weight:700;color:var(--g7)">📆 Instalment Plan Progress</span>
      <span style="font-size:12px;font-weight:800;color:var(--g6)">${paidCount}/${totalCount} paid · Rs ${fmt(paidAmt)} / Rs ${fmt(totalAmt)}</span>
    </div>
    <div style="height:6px;background:var(--s2);border-radius:50px;overflow:hidden;margin-bottom:10px">
      <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--g6),var(--g4));border-radius:50px;transition:width .5s"></div>
    </div>
    <div style="display:flex;flex-direction:column;gap:5px">`;
  allInst.forEach((f,i)=>{
    const status=feeComputeStatus(f);
    const isPaidRow=status==='Paid';
    const isOvr=status.includes('Overdue');
    const due=f.dueDate?new Date(f.dueDate):null;
    if(due) due.setHours(0,0,0,0);
    const diffDays=due?Math.ceil((due-today)/(1000*60*60*24)):null;
    const rowPaid=feePaidAmt(f);
    html+=`<div style="display:flex;align-items:center;gap:8px;padding:6px 8px;border-radius:7px;background:${isPaidRow?'#f0fdf4':isOvr?'#fff1f1':status.startsWith('Partial')?'#fffbeb':'#fff'};border:1px solid ${isPaidRow?'var(--g1)':isOvr?'#fca5a5':'var(--s2)'}">
      <div style="width:22px;height:22px;border-radius:50%;background:${isPaidRow?'var(--g5)':isOvr?'var(--rd)':'var(--s3)'};color:#fff;font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0">${i+1}</div>
      <div style="flex:1;font-size:11px">
        <span style="font-weight:700;color:${isPaidRow?'var(--g6)':isOvr?'var(--rd)':'var(--s6)'}">${feeStatusLabel(status)}</span>
        <span style="color:var(--s4);margin-left:6px">${f.dueDate||''} ${isOvr&&diffDays!==null?'('+Math.abs(diffDays)+' days overdue)':(!isOvr&&diffDays!==null&&!isPaidRow?'('+diffDays+' days left)':'')}</span>
      </div>
      <span style="font-size:12px;font-weight:800;color:var(--s6)">Rs ${fmt(rowPaid)} / Rs ${fmt(f.amt)}</span>
    </div>`;
  });
  html+='</div></div>';
  planDiv.innerHTML=html;
  planDiv.style.display='block';
}

function feeStep(n){
  [1,2,3].forEach(i=>{
    $('fstep'+i).style.display=i===n?'block':'none';
    const ind=$('fstep'+i+'-ind');
    if(ind){ind.style.background=i===n?'var(--g6)':i<n?'var(--g1)':'var(--s1)';ind.style.color=i===n?'#fff':i<n?'var(--g7)':'var(--s4)';}
  });
  if(n===3){
    // Fill summary
    const fa=parseInt($('fa').value)||0;
    const st=$('fst').value;
    $('fsum-name').textContent=_feeSelectedStu?_feeSelectedStu.name:'—';
    $('fsum-roll').textContent=_feeSelectedStu?_feeSelectedStu.roll:'—';
    $('fsum-amt').textContent='Rs '+fmt(fa);
    $('fsum-st').innerHTML=bdg(st);
    $('fsum-mt').textContent=st==='Paid'?$('fpm').value:'N/A';
    $('fInst-total').textContent='Rs '+fmt(fa);
    feeGenInstalments();
    const withInst=$('fInstCheck').checked;
    $('fNoInst').style.display=withInst?'none':'block';
    $('fWithInst').style.display=withInst?'block':'none';
  }
}

function feeSearchStu(q){
  const list=$('fstu-list');
  if(!q){list.innerHTML='';return;}
  const ql=q.toLowerCase();
  const results=D.students.filter(s=>
    s.name.toLowerCase().includes(ql)||
    s.roll.toLowerCase().includes(ql)||
    (s.id||'').toLowerCase().includes(ql)
  ).slice(0,8);
  if(!results.length){list.innerHTML='<div style="padding:14px;text-align:center;color:var(--s4);font-size:13px">No student found</div>';return;}
  list.innerHTML=results.map(s=>`
    <div onclick="feeSelectStu('${s.roll}')"
      style="display:flex;align-items:center;gap:10px;padding:10px 12px;cursor:pointer;border-bottom:1px solid var(--s1);transition:background .15s"
      onmouseover="this.style.background='var(--g0)'" onmouseout="this.style.background=''">
      <div style="width:32px;height:32px;border-radius:50%;background:${s.gender==='Male'?'var(--bl)':'var(--pu)'};color:#fff;font-weight:700;font-size:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0">${s.name[0]}</div>
      <div style="flex:1;min-width:0">
        <div style="font-weight:700;font-size:13px;color:var(--s6)">${s.name}</div>
        <div style="font-size:11px;color:var(--s4)">${s.roll} · ${s.dept} · ${s.sem}</div>
      </div>
      <span style="font-size:10px;padding:2px 8px;border-radius:50px;font-weight:700;background:${s.gender==='Male'?'#dbeafe':'#ede9fe'};color:${s.gender==='Male'?'#1d4ed8':'#5b21b6'}">${s.gender==='Male'?'Boy':'Girl'}</span>
    </div>`).join('');
}

function feeSelectStu(roll){
  // Accept roll string OR student object
  const s=(typeof roll==='object'&&roll!==null)?roll:D.students.find(st=>st.roll===roll);
  if(!s)return;
  _feeSelectedStu=s;
  $('fn').value=s.name;
  $('fr').value=s.roll;
  $('fa').value=s.fee||25000;
  $('fa').value=applyPendingFinesToFeeModal(s.roll,parseInt($('fa').value)||0);
  // Set semester from student
  const semEl=$('fsm');
  for(let i=0;i<semEl.options.length;i++){if(semEl.options[i].value===s.sem||semEl.options[i].text===s.sem){semEl.selectedIndex=i;break;}}
  feeShowSelected(s);
  $('fstu-list').innerHTML='';
  $('fstu-search').value='';
  $('fstep1-next').disabled=false;
  $('fstep1-next').style.opacity='1';
}

function feeShowSelected(s){
  $('fstu-selected').style.display='block';
  $('fstu-av').textContent=s.name[0];
  $('fstu-av').style.background=s.gender==='Male'?'var(--bl)':'var(--pu)';
  $('fstu-name').textContent=s.name;
  $('fstu-info').textContent=(s.roll||'')+(s.dept?' · '+s.dept:'')+(s.sem?' · '+s.sem:'');
}

function feeDeselectStu(){
  _feeSelectedStu=null;
  _feeIncludedFineIds=[];
  const note=$('fee-fine-note'); if(note) note.style.display='none';
  $('fn').value='';
  $('fr').value='';
  $('fstu-selected').style.display='none';
  $('fstep1-next').disabled=true;
  $('fstep1-next').style.opacity='.4';
}

function feeStatusChange(val){
  const pmWrap=$('fpm-wrap');
  if(pmWrap) pmWrap.style.display=val==='Paid'?'block':'none';
}

function feeToggleInstalment(on){
  if($('fInstCheck')) $('fInstCheck').checked=on;
}

function feeUpdateInstalment(){
  feeGenInstalments();
}

// Reads the admin-chosen instalment count from the #fInstCount select
// (2 / 3 / 4 / 6 …) — every function below reads the SAME count from here
// instead of hard-coding 4, so switching the dropdown actually changes how
// many rows are generated, validated, and saved.
function feeGetInstCount(){
  return parseInt((($('fInstCount')||{}).value))||4;
}

// Renders N EDITABLE installment rows (amount + due date), each admin-defined
// — NOT hard-coded to an equal split, and N comes from feeGetInstCount() so
// 2/3/4/6 all work. feeValidateInstSum() re-checks the sum on every keystroke
// and disables Save until the N amounts add up exactly to the Total Fee
// entered in Step 2.
function feeGenInstalments(){
  const fa=parseInt($('fa').value)||0;
  const count=feeGetInstCount();
  const firstDueDateStr=$('fdd').value||new Date().toISOString().slice(0,10);
  const firstDue=new Date(firstDueDateStr);
  const cls=_feeSelectedStu?((_feeSelectedStu.cls||'')):'';
  const interval=getInstInterval(cls,count);
  $('fInst-total').textContent='Rs '+fmt(fa);
  const suggestedPer=Math.floor(fa/count);
  const suggestedRem=fa-(suggestedPer*count);
  $('fInst-per').textContent='Suggested: Rs '+fmt(suggestedPer)+' × '+count+' (adjust freely below)';
  $('fInstRows').innerHTML=Array.from({length:count},(_,i)=>{
    const dueDate=new Date(firstDue.getFullYear(),firstDue.getMonth()+(i*interval),firstDue.getDate());
    const dueDateStr=dueDate.toISOString().slice(0,10);
    const suggestedAmt=i===count-1?suggestedPer+suggestedRem:suggestedPer;
    return`<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--s0);border:1px solid var(--s2);border-radius:var(--rads)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--g5);color:#fff;font-weight:800;font-size:11px;display:flex;align-items:center;justify-content:center;flex-shrink:0">${i+1}</div>
      <div style="flex:1">
        <div style="font-size:10.5px;color:var(--s4);margin-bottom:3px">Instalment ${i+1} of ${count} — Amount (Rs)</div>
        <input id="fInstAmt${i}" type="number" value="${suggestedAmt}" oninput="feeValidateInstSum()"
          style="width:100%;padding:7px 10px;border:1.5px solid var(--s2);border-radius:6px;font-size:13px;font-weight:700;outline:none;font-family:inherit">
      </div>
      <div style="flex:1">
        <div style="font-size:10.5px;color:var(--s4);margin-bottom:3px">Due Date</div>
        <input id="fInstDate${i}" type="date" value="${dueDateStr}" oninput="feeValidateInstSum()"
          style="width:100%;padding:7px 10px;border:1.5px solid var(--s2);border-radius:6px;font-size:13px;outline:none;font-family:inherit">
      </div>
    </div>`;
  }).join('')
  + `<div id="fInstSumCheck" style="font-size:12px;font-weight:700;padding:8px 12px;border-radius:var(--rads);margin-top:2px"></div>`;
  feeValidateInstSum();
}

// Re-sums the N (editable) instalment amounts against the Total Fee and
// shows a clear ✓ / ✗ indicator, disabling Save on mismatch so the system
// can never save installments that don't add up to the total — this is the
// core validation rule the whole N-part system depends on. N comes from
// feeGetInstCount(), same as feeGenInstalments(), so they always agree.
function feeValidateInstSum(){
  const fa=parseInt($('fa').value)||0;
  const count=feeGetInstCount();
  const amounts=Array.from({length:count},(_,i)=>parseInt(($('fInstAmt'+i)||{}).value)||0);
  const sum=amounts.reduce((a,b)=>a+b,0);
  const box=$('fInstSumCheck');
  const saveBtn=$('fInstSaveBtn');
  const ok=sum===fa && fa>0;
  if(box){
    box.style.background=ok?'var(--g0)':'#fef2f2';
    box.style.color=ok?'var(--g7)':'#b91c1c';
    box.style.border='1px solid '+(ok?'var(--g1)':'#fca5a5');
    box.textContent=ok
      ? `✓ ${count} instalments total Rs ${sum.toLocaleString()} — matches Total Fee`
      : `✗ ${count} instalments total Rs ${sum.toLocaleString()} — must equal Total Fee (Rs ${fa.toLocaleString()})`;
  }
  if(saveBtn){ saveBtn.disabled=!ok; saveBtn.style.opacity=ok?'1':'.45'; saveBtn.style.cursor=ok?'pointer':'not-allowed'; }
  return ok;
}

/* ══════════════════════════════════════════════════
   INSTALMENT VOUCHERS — IBA-style, printed landscape, all N instalments
   (or a filtered subset) shown together — N is whatever the plan actually
   has (2, 3, 4, 6…), never hard-coded to 4. Each voucher shows the
   COMPLETE payment position (total fee, this instalment, paid, remaining,
   instalments paid/remaining, status, due date) — not just the instalment
   amount — per spec.
   mode: 'all' | 'paid' | 'remaining'
══════════════════════════════════════════════════ */
function getOrAssignVoucherNo(f){
  if(!f.voucherNo) f.voucherNo=nextInstVoucherNo();
  return f.voucherNo;
}

function printInstalmentVouchers(roll, instTotal, mode){
  mode=mode||'all';
  const stu=D.students.find(s=>s.roll===roll)||{};
  const plan=instPlanSummary({roll,instTotal});
  if(!plan.rows.length){toast('No instalment plan found for this student');return;}

  let rows=plan.rows;
  if(mode==='paid') rows=rows.filter(r=>feeComputeStatus(r)==='Paid');
  if(mode==='remaining') rows=rows.filter(r=>feeComputeStatus(r)!=='Paid');
  if(!rows.length){toast(mode==='paid'?'No paid instalments yet':'All instalments are already fully paid');return;}

  const instructions=(D.settings.voucherInstructions&&D.settings.voucherInstructions.length)
    ? D.settings.voucherInstructions
    : ['Fee must be deposited on or before the due date.'];

  const voucherCard=(f)=>{
    const status=feeComputeStatus(f);
    const paid=feePaidAmt(f);
    const remaining=feeRemainingAmt(f);
    const voucherNo=getOrAssignVoucherNo(f);
    const dueFmtd=f.dueDate?new Date(f.dueDate).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}):'—';
    const qrPayload=`VCH:${voucherNo}|ROLL:${roll}|INST:${f.instPart}|AMT:${f.amt}|PAID:${paid}`;
    const isPaid=status==='Paid';

    const infoRow=(label,val)=>`<div class="iv-row"><span class="iv-lb">${label}</span><span class="iv-vl">${val}</span></div>`;

    return `
    <div class="iv-card">
      ${isPaid?`<div class="iv-stamp">PAID</div>`:''}
      <div class="iv-hdr">
        <div class="iv-logo">${D.settings.logoDataUrl?getLogoBadgeInner():getInstInitials()}</div>
        <div class="iv-hdr-txt">
          <div class="iv-inst-name">${D.settings.instName}</div>
          <div class="iv-inst-sub">${D.settings.address||D.settings.city||''}</div>
        </div>
        <div class="qr-slot" data-qr="${qrPayload}"></div>
      </div>
      <div class="iv-title">FEE VOUCHER</div>

      ${infoRow('Customer Code',D.settings.customerCode||'—')}
      ${infoRow('Voucher No.',voucherNo)}
      ${infoRow('Full Name',f.student)}
      ${infoRow('Student ID / Roll No.',stu.id?stu.id+' / '+roll:roll)}
      ${infoRow('Program / Department',(stu.cls||'—')+(stu.dept?' — '+stu.dept:''))}
      ${infoRow('Semester / Session',(f.sem||'—')+' · '+(D.settings.academicYear||''))}
      ${infoRow('Instalment',`${f.instPart||(plan.rows.indexOf(f)+1)+'/'+plan.rows.length}`)}
      ${infoRow('Due Date',dueFmtd)}

      <div class="iv-divider"></div>

      ${infoRow('Total Fee',fmtRs(f.instTotal))}
      ${infoRow('This Instalment Amount',fmtRs(f.amt))}
      ${infoRow('Paid Amount',fmtRs(paid))}
      ${infoRow('Remaining (this instalment)',fmtRs(remaining))}
      ${infoRow('Instalments Paid',plan.paidCount+' of '+plan.rows.length)}
      ${infoRow('Instalments Remaining',plan.remainingCount)}
      ${infoRow('Overall Remaining Fee',fmtRs(plan.totalRemaining))}
      <div class="iv-row"><span class="iv-lb">Payment Status</span><span class="iv-vl iv-status iv-status-${status.replace('-','')}">${feeStatusLabel(status)}</span></div>
      ${isPaid?infoRow('Payment Date',f.date&&f.date!=='-'?f.date:'—'):''}

      <div class="iv-divider"></div>
      <div class="iv-bank">
        <div class="iv-bank-h">Bank / Payment Details</div>
        ${infoRow('Bank',D.settings.bankName)}
        ${infoRow('Branch',D.settings.bankBranch)}
        ${infoRow('Account Title',D.settings.bankAccountTitle)}
        ${infoRow('Account No.',D.settings.bankAccountNo)}
        ${infoRow('IBAN',D.settings.bankIBAN)}
      </div>

      <div class="iv-instr">
        <div class="iv-instr-h">Instructions:</div>
        <ol>${instructions.map(i=>`<li>${i}</li>`).join('')}</ol>
      </div>

      <div class="iv-sig-row">
        <div class="iv-sig">Sign. Officer</div>
        <div class="iv-sig">Sign. Cashier</div>
      </div>
      <div class="iv-copy-lbl">Student Copy</div>
    </div>`;
  };

  const summaryBar=`
    <div class="iv-summary">
      <div><span>Total Fee</span><strong>${fmtRs(plan.totalFee)}</strong></div>
      <div><span>Total Paid</span><strong>${fmtRs(plan.totalPaid)}</strong></div>
      <div><span>Remaining</span><strong>${fmtRs(plan.totalRemaining)}</strong></div>
      <div><span>Instalments Paid</span><strong>${plan.paidCount} of ${plan.rows.length}</strong></div>
      <div><span>Status</span><strong>${plan.fullyPaid?'FULLY PAID':plan.totalPaid>0?'PARTIALLY PAID':'UNPAID'}</strong></div>
    </div>`;

  const h=`<!DOCTYPE html><html><head><meta charset="UTF-8">
  <title>Fee Vouchers — ${stu.name||''}</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"><\/script>
  <style>
    *{box-sizing:border-box;margin:0;padding:0;}
    body{font-family:Georgia,'Times New Roman',serif;background:#ccc;padding:20px;color:#000;}
    .no-print-bar{max-width:1200px;margin:0 auto 14px;background:#111;border-radius:8px;padding:12px 18px;display:flex;align-items:center;justify-content:space-between;gap:12px;font-family:Arial,sans-serif;}
    .npb-txt h4{font-size:13px;font-weight:700;color:#fff;}
    .npb-txt p{font-size:10.5px;color:#bbb;margin-top:2px;}
    .prt-btn{padding:9px 20px;border:none;border-radius:8px;font-size:12.5px;font-weight:700;cursor:pointer;font-family:inherit;background:#fff;color:#111;}
    .wrap{max-width:1200px;margin:0 auto;}
    .iv-summary{display:flex;gap:0;background:#fff;border:2px solid #000;margin-bottom:14px;font-family:Arial,sans-serif;}
    .iv-summary div{flex:1;text-align:center;padding:8px 4px;border-right:1px solid #000;}
    .iv-summary div:last-child{border-right:none;}
    .iv-summary span{display:block;font-size:8.5px;text-transform:uppercase;letter-spacing:.5px;color:#444;}
    .iv-summary strong{font-size:12.5px;}
    /* Landscape layout: the page prints in landscape A4, and the grid
       auto-fits as many voucher cards per row as fit the wider page —
       however many instalments the plan actually has (2, 3, 4, 6…),
       never a fixed "4" — so a 2-instalment plan shows 2 cards side by
       side and a 3-instalment plan shows 3, instead of always reserving
       4 slots. */
    .iv-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:14px;}
    .iv-card{position:relative;background:#fff;border:2px solid #000;padding:14px 16px;font-size:10px;overflow:hidden;}
    .iv-stamp{position:absolute;top:60px;right:18px;border:3px solid #16a34a;color:#16a34a;font-weight:900;font-size:22px;letter-spacing:3px;padding:2px 14px;transform:rotate(-18deg);opacity:.65;font-family:Arial,sans-serif;}
    .iv-hdr{display:flex;align-items:center;gap:8px;}
    .iv-logo{width:36px;height:36px;border:1px solid #000;border-radius:6px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:12px;font-family:Arial,sans-serif;flex-shrink:0;overflow:hidden;}
    .iv-hdr-txt{flex:1;}
    .iv-inst-name{font-size:13px;font-weight:800;font-family:Arial,sans-serif;}
    .iv-inst-sub{font-size:8.5px;color:#333;font-family:Arial,sans-serif;}
    .qr-slot{width:34px;height:34px;flex-shrink:0;}
    .iv-title{text-align:center;font-size:16px;font-weight:800;margin:8px 0 6px;}
    .iv-row{display:flex;justify-content:space-between;gap:8px;padding:3px 0;border-bottom:1px solid #000;font-family:Arial,sans-serif;}
    .iv-lb{color:#000;}
    .iv-vl{font-weight:700;text-align:right;}
    .iv-status-Paid{color:#065f46;}
    .iv-status-Partial,.iv-status-PartialOverdue{color:#92400e;}
    .iv-status-Overdue{color:#b91c1c;}
    .iv-status-Pending{color:#444;}
    .iv-divider{border-top:2px solid #000;margin:6px 0;}
    .iv-bank-h,.iv-instr-h{font-weight:800;font-size:10px;margin:4px 0 3px;font-family:Arial,sans-serif;}
    .iv-instr ol{padding-left:16px;font-size:8.5px;line-height:1.5;font-family:Arial,sans-serif;}
    .iv-sig-row{display:flex;justify-content:space-between;margin-top:22px;font-family:Arial,sans-serif;font-size:9.5px;}
    .iv-sig{border-top:1px solid #000;padding-top:3px;width:40%;text-align:center;}
    .iv-copy-lbl{text-align:center;font-weight:800;font-size:11px;margin-top:14px;font-family:Arial,sans-serif;}
    @media print{
      body{background:#fff!important;padding:0!important;}
      .no-print-bar{display:none!important;}
      .iv-card{page-break-inside:avoid;}
      @page{size:A4 landscape;margin:10mm;}
    }
  </style></head><body>
  <div class="no-print-bar">
    <div class="npb-txt"><h4>Fee Vouchers — ${stu.name||''}</h4><p>${rows.length} voucher(s) · ${mode==='all'?`All ${plan.rows.length} instalments`:mode==='paid'?'Paid instalments':'Remaining instalments'} · Landscape</p></div>
    <button class="prt-btn" onclick="window.print()">🖨️ Print</button>
  </div>
  <div class="wrap">
    ${summaryBar}
    <div class="iv-grid">${rows.map(voucherCard).join('')}</div>
  </div>
  <script>
    (function renderQrSlots(attemptsLeft){
      if (typeof QRCode === 'undefined') {
        if (attemptsLeft > 0) return void setTimeout(function(){ renderQrSlots(attemptsLeft-1); }, 200);
        return;
      }
      document.querySelectorAll('.qr-slot').forEach(function(el){
        if (el.dataset.rendered) return;
        el.dataset.rendered = '1';
        new QRCode(el, { text: el.dataset.qr, width: 34, height: 34, colorDark: '#000000', colorLight: '#ffffff' });
      });
    })(25);
  <\/script>
  </body></html>`;
  showPrintPreview(h,'Fee Vouchers - '+(stu.name||roll));
}

function fmtRs(n){ return 'Rs. '+(n||0).toLocaleString(); }

/* ══════════════════════════════════════════════════
   FEE PAYMENT RECEIPT — full A4, branded to match the Fee Voucher (same
   header style, colours, logo) instead of a small 420px thermal-slip look.
   Always shows: Amount Received (this payment) + Outstanding/Remaining
   Balance clearly, so an instalment payment reads exactly like a real
   college receipt — "paid this much, this much is still due" — at a
   glance, not buried in a line-item list.
══════════════════════════════════════════════════ */
function printReceipt(idx, paymentAmount){
  const f=D.fees[idx];
  if(!f){toast('Receipt not found');return;}
  const stu=D.students.find(s=>s.roll===f.roll)||{};

  // The "Amount Received" on a receipt must reflect what was actually paid
  // IN THIS TRANSACTION — not the full instalment amount owed, which can
  // now differ when a payment is partial. Callers that just recorded a
  // specific payment (e.g. saveFee's partial-payment path) pass that exact
  // amount in; everywhere else (older full-payment call sites) falls back
  // to the cumulative paid-so-far, which is correct for a one-shot full
  // payment.
  const receivedNow = paymentAmount!=null ? paymentAmount : feePaidAmt(f);

  const todayFmt = new Date().toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});
  const academicYear = getAcademicYear();
  const qrPayload = `RCPT:${f.receipt||''}|ROLL:${f.roll}|AMT:${receivedNow}|DATE:${f.date||''}`;

  // ── Instalment math: total fee, paid-to-date, and what's still owed ──
  const isInstalment = !!(f.isInstalment && f.instTotal);
  let feeLabel='Tuition Fee — Full Payment', totalFeeForDoc=f.amt, paidToDate=receivedNow,
      outstanding=0, instRows='', instCount='', instPaidCount=0;
  if(isInstalment){
    const allInst=D.fees.filter(x=>x.roll===f.roll&&x.isInstalment&&x.instTotal===f.instTotal);
    instPaidCount=allInst.filter(x=>feeComputeStatus(x)==='Paid').length;
    instCount=allInst.length;
    paidToDate=allInst.reduce((a,b)=>a+feePaidAmt(b),0);
    totalFeeForDoc=f.instTotal;
    outstanding=Math.max(0,totalFeeForDoc-paidToDate);
    feeLabel=`Tuition Fee — Instalment ${f.instPart||''}`.trim();
    instRows = allInst.map((inst,i)=>{
      const st=feeComputeStatus(inst);
      const isPaidRow=st==='Paid', isThis=inst===f;
      return `<tr style="background:${isPaidRow?'#f0fdf4':isThis?'#fffbeb':'#fff'}">
        <td style="padding:5px 8px;border:1px solid #e2e8f0;text-align:center;font-weight:${isThis?800:600}">${inst.instPart||(i+1)+'/'+allInst.length}</td>
        <td style="padding:5px 8px;border:1px solid #e2e8f0">${inst.dueDate||'—'}</td>
        <td style="padding:5px 8px;border:1px solid #e2e8f0;text-align:right;font-weight:700">Rs ${inst.amt.toLocaleString()}</td>
        <td style="padding:5px 8px;border:1px solid #e2e8f0;text-align:center;font-size:9.5px;font-weight:800;color:${isPaidRow?'#065f46':st.includes('Overdue')?'#b91c1c':'#92400e'}">${feeStatusLabel(st)}${isThis?' ◀':''}</td>
      </tr>`;
    }).join('');
  }else{
    outstanding = Math.max(0, (f.amt||0) - receivedNow);
  }

  const FONT = `-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,Roboto,Arial,sans-serif`;
  const brand='#0d7a4f', brandDeep='#0a3d2a';
  const fullyPaid = outstanding<=0;

  const infoRow=(l,v)=>`<tr><td style="padding:5px 2px;color:#64748b;font-size:10.5px;width:38%">${l}</td><td style="padding:5px 2px;font-weight:700;color:#0f172a;font-size:11.5px">${v}</td></tr>`;

  const h=`<!DOCTYPE html><html><head><meta charset="UTF-8">
  <title>Fee Receipt — ${f.student} — ${f.receipt||''}</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"><\/script>
  <style>
    *{box-sizing:border-box;margin:0;padding:0;}
    body{font-family:${FONT};background:#ccc;padding:20px;color:#0f172a;}
    .no-print-bar{max-width:800px;margin:0 auto 14px;background:#111;border-radius:8px;padding:12px 18px;display:flex;align-items:center;justify-content:space-between;gap:12px;}
    .npb-txt h4{font-size:13px;font-weight:700;color:#fff;}
    .npb-txt p{font-size:10.5px;color:#bbb;margin-top:2px;}
    .prt-btn{padding:9px 20px;border:none;border-radius:8px;font-size:12.5px;font-weight:700;cursor:pointer;font-family:inherit;background:#fff;color:#111;}
    .sheet{max-width:800px;margin:0 auto;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,.10);border:1px solid #eef0f2;}
    @media print{
      body{background:#fff!important;padding:0!important;}
      .no-print-bar{display:none!important;}
      .sheet{box-shadow:none!important;border-radius:0!important;border:none!important;max-width:none!important;}
      @page{size:A4;margin:12mm;}
    }
  </style></head><body>
  <div class="no-print-bar">
    <div class="npb-txt"><h4>Fee Receipt — ${f.student}</h4><p>Receipt No. ${f.receipt||'—'} &nbsp;·&nbsp; Amount Received: Rs ${receivedNow.toLocaleString()}</p></div>
    <button class="prt-btn" onclick="window.print()">🖨️ Print</button>
  </div>
  <div class="sheet">

    <!-- HEADER -->
    <div style="background:linear-gradient(135deg,${brandDeep},${brand});padding:0">
      <div style="display:flex;align-items:stretch;min-height:92px">
        <div style="width:76px;display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:14px 10px">
          <div style="width:52px;height:52px;border-radius:16px;background:rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:800;color:#fff;border:1px solid rgba(255,255,255,.25);overflow:hidden">${getLogoBadgeInner()}</div>
        </div>
        <div style="flex:1;padding:16px 14px 14px 4px;display:flex;flex-direction:column;justify-content:center">
          <div style="font-size:19px;font-weight:800;color:#fff;letter-spacing:-.2px;line-height:1.15">${D.settings.instName||''}</div>
          <div style="font-size:10.5px;color:rgba(255,255,255,.65);margin-top:3px;font-weight:500">${D.settings.city||''} · Accounts Department · AY ${academicYear}</div>
          <div style="margin-top:9px;display:inline-flex">
            <span style="background:rgba(255,255,255,.16);color:#fff;font-size:10.5px;font-weight:700;letter-spacing:.5px;padding:4px 12px;border-radius:20px">OFFICIAL FEE RECEIPT</span>
          </div>
        </div>
        <div style="width:120px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;padding:12px 10px">
          <div style="background:rgba(255,255,255,.12);border-radius:10px;padding:5px 10px;text-align:center;width:100%">
            <div style="font-size:7.5px;color:rgba(255,255,255,.6);letter-spacing:1px;text-transform:uppercase;font-weight:600">Receipt No.</div>
            <div style="font-size:12px;font-weight:800;color:#fff;margin-top:1px">${f.receipt||'—'}</div>
          </div>
          <div class="qr-slot" data-qr="${qrPayload}" style="width:52px;height:52px;background:#fff;padding:3px;border-radius:8px;display:flex;align-items:center;justify-content:center;overflow:hidden"></div>
        </div>
      </div>
    </div>

    <div style="padding:22px 26px 26px">
      <!-- STUDENT + PAYMENT INFO -->
      <table style="width:100%;border-collapse:collapse;margin-bottom:14px">
        <tr>
          <td style="width:50%;vertical-align:top;padding-right:14px">
            <table style="width:100%;border-collapse:collapse">
              ${infoRow('Student Name',f.student)}
              ${infoRow('Roll No.',f.roll)}
              ${infoRow("Father's Name",stu.father||'—')}
              ${infoRow('Class / Section',(stu.cls||'—')+(stu.section?' ('+stu.section+')':''))}
            </table>
          </td>
          <td style="width:50%;vertical-align:top">
            <table style="width:100%;border-collapse:collapse">
              ${infoRow('Date Received',(f.date&&f.date!=='-')?f.date:todayFmt)}
              ${infoRow('Payment Method',(f.method&&f.method!=='-')?f.method:'—')}
              ${infoRow(isInstalment?'Instalment':'Semester / Year',isInstalment?(f.instPart||'—')+' of '+instCount:(f.sem||'—'))}
              ${infoRow('Fee Head',f.category&&f.category!=='Tuition'?f.category:'Tuition Fee')}
            </table>
          </td>
        </tr>
      </table>

      <div style="font-size:10px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:${brand};border-top:2px solid #eef0f2;border-bottom:2px solid #eef0f2;padding:8px 0;margin-bottom:14px">${feeLabel} — AY ${academicYear}</div>

      <!-- AMOUNT RECEIVED / OUTSTANDING CALLOUT -->
      <div style="display:flex;gap:12px;margin-bottom:16px">
        <div style="flex:1;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:12px;padding:14px 16px">
          <div style="font-size:9.5px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;color:#065f46">Amount Received (This Payment)</div>
          <div style="font-size:24px;font-weight:800;color:#065f46;margin-top:4px">Rs ${receivedNow.toLocaleString()}</div>
          <div style="font-size:9.5px;color:#166534;margin-top:3px;font-style:italic">${amountInWords(receivedNow)}</div>
        </div>
        <div style="flex:1;background:${fullyPaid?'#f0fdf4':'#fef2f2'};border:1.5px solid ${fullyPaid?'#bbf7d0':'#fecaca'};border-radius:12px;padding:14px 16px">
          <div style="font-size:9.5px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;color:${fullyPaid?'#065f46':'#b91c1c'}">${fullyPaid?'Status':'Outstanding Balance'}</div>
          <div style="font-size:24px;font-weight:800;color:${fullyPaid?'#065f46':'#b91c1c'};margin-top:4px">${fullyPaid?'FULLY PAID':'Rs '+outstanding.toLocaleString()}</div>
          <div style="font-size:9.5px;color:${fullyPaid?'#166534':'#991b1b'};margin-top:3px">${isInstalment?`${instPaidCount} of ${instCount} instalments paid · Total Fee Rs ${totalFeeForDoc.toLocaleString()}`:fullyPaid?'No balance remaining':'Balance still due on this fee'}</div>
        </div>
      </div>

      ${isInstalment?`
      <!-- INSTALMENT SCHEDULE -->
      <div style="font-size:10px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:#475569;margin-bottom:6px">Instalment Schedule</div>
      <table style="width:100%;border-collapse:collapse;margin-bottom:16px;font-size:10.5px">
        <thead><tr style="background:#f8fafc">
          <th style="padding:6px 8px;border:1px solid #e2e8f0;font-size:9px;text-transform:uppercase;color:#64748b">Inst.</th>
          <th style="padding:6px 8px;border:1px solid #e2e8f0;font-size:9px;text-transform:uppercase;color:#64748b;text-align:left">Due Date</th>
          <th style="padding:6px 8px;border:1px solid #e2e8f0;font-size:9px;text-transform:uppercase;color:#64748b;text-align:right">Amount</th>
          <th style="padding:6px 8px;border:1px solid #e2e8f0;font-size:9px;text-transform:uppercase;color:#64748b">Status</th>
        </tr></thead>
        <tbody>${instRows}</tbody>
      </table>`:''}

      <!-- SIGNATURES -->
      <div style="display:flex;justify-content:space-between;margin-top:34px">
        <div style="width:38%;text-align:center;border-top:1px solid #cbd5e1;padding-top:6px;font-size:10.5px;color:#475569">Sign. Cashier</div>
        <div style="width:38%;text-align:center;border-top:1px solid #cbd5e1;padding-top:6px;font-size:10.5px;color:#475569">Sign. Accounts Officer</div>
      </div>

      <div style="margin-top:20px;font-size:8.5px;color:#94a3b8;line-height:1.6;border-top:1px solid #eef0f2;padding-top:10px">
        This is a computer-generated receipt issued against the amount received above. Please retain it as proof of payment. Fee once paid is non-refundable and non-transferable. Scan the QR code above to verify this receipt online.
        <br>Generated ${todayFmt} · Printed from ${D.settings.instName} — Online Fee Management System
      </div>
    </div>
  </div>
  <script>
    (function renderQrSlots(attemptsLeft){
      if (typeof QRCode === 'undefined') {
        if (attemptsLeft > 0) return void setTimeout(function(){ renderQrSlots(attemptsLeft-1); }, 200);
        return;
      }
      document.querySelectorAll('.qr-slot').forEach(function(el){
        if (el.dataset.rendered) return;
        el.dataset.rendered = '1';
        new QRCode(el, { text: el.dataset.qr, width: 46, height: 46, colorDark: '#000000', colorLight: '#ffffff' });
      });
    })(25);
  <\/script>
  </body></html>`;
  showPrintPreview(h,(f.isInstalment?'Instalment Receipt':'Fee Receipt')+' - '+f.student);
}

/* ══════════════════════════════════════════════════
   AMOUNT IN WORDS
══════════════════════════════════════════════════ */
function amountInWords(n){
  if(!n||n===0) return 'Zero Rupees';
  const ones=['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
  const tens=['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];
  function toWords(num){
    if(num===0)return'';
    if(num<20)return ones[num]+' ';
    if(num<100)return tens[Math.floor(num/10)]+' '+(num%10?ones[num%10]+' ':'');
    if(num<1000)return ones[Math.floor(num/100)]+' Hundred '+(num%100?toWords(num%100):'');
    if(num<100000)return toWords(Math.floor(num/1000))+'Thousand '+(num%1000?toWords(num%1000):'');
    if(num<10000000)return toWords(Math.floor(num/100000))+'Lakh '+(num%100000?toWords(num%100000):'');
    return toWords(Math.floor(num/10000000))+'Crore '+(num%10000000?toWords(num%10000000):'');
  }
  return 'Pakistani Rupees '+toWords(n).trim()+' Only';
}

/* ══════════════════════════════════════════════════
   FEE DEMAND VOUCHER — Professional Bank-Challan Style
══════════════════════════════════════════════════ */

/* Academic year helper: Aug onwards = new year */
// ── Print branding helpers: derive the little circular "SC"-style logo badge
// from Settings instead of hardcoding it, so this app can be white-labelled
// for any institute just by changing Institution Name / Logo in Settings. ──
function getInstInitials(){
  const name=(D.settings.instName||'').trim();
  if(!name) return 'SC';
  const words=name.split(/\s+/).filter(w=>/[A-Za-z0-9]/.test(w));
  if(!words.length) return name.slice(0,2).toUpperCase();
  if(words.length===1) return words[0].slice(0,2).toUpperCase();
  return (words[0][0]+words[1][0]).toUpperCase();
}
function getLogoBadgeInner(){
  return D.settings.logoDataUrl
    ? '<img src="'+D.settings.logoDataUrl+'" style="width:100%;height:100%;object-fit:cover;border-radius:inherit">'
    : getInstInitials();
}

function getAcademicYear(){
  const m=new Date().getMonth(), y=new Date().getFullYear();
  return m>=7 ? `${y}-${y+1}` : `${y-1}-${y}`;
}

/* Fee breakdown — only tuition, no fake sub-components */
function getFeeBreakdown(total){
  return {tuition: total};
}

function printVoucher(idx){
  const f = D.fees[idx];
  if(!f){ toast('Fee record not found'); return; }

  const stu = D.students.find(s=>s.roll===f.roll) || {
    name:f.student, roll:f.roll, dept:'—', cls:'—',
    father:'—', contact:'—', section:'—', sem:f.sem, id:'—'
  };

  const todayRaw   = new Date();
  const todayClean = new Date(todayRaw); todayClean.setHours(0,0,0,0);
  const dueDateObj = f.dueDate ? new Date(f.dueDate) : null;
  if(dueDateObj) dueDateObj.setHours(0,0,0,0);

  const isOverdue = dueDateObj && dueDateObj < todayClean;
  const diffDays  = dueDateObj ? Math.ceil((dueDateObj - todayClean)/(1000*60*60*24)) : null;

  const fmtDate = (d) => d ? d.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}) : '—';
  const todayFmt = fmtDate(todayRaw);
  const dueFmt   = fmtDate(dueDateObj);
  const voucherNo = 'VCH-' + String(voucherRC++).padStart(5, '0');

  const academicYear = getAcademicYear();
  const expiryObj    = new Date(todayRaw); expiryObj.setDate(expiryObj.getDate()+30);
  const expiryFmt    = fmtDate(expiryObj);
  const breakdown    = getFeeBreakdown(f.amt);

  const qrPayload = `VCH:${voucherNo}|ROLL:${stu.roll}|AMT:${f.amt}|DUE:${f.dueDate||''}`;
  // QR is generated locally in-browser (via the QRCode library loaded in this
  // document's <head>) instead of fetching an image from a third-party API —
  // that external call has no offline fallback: if the school network is
  // slow/restricted or that service is ever down, the QR silently fails to
  // load. Generating it client-side means the voucher — including the
  // downloaded standalone HTML copy — always shows a QR with no live network
  // dependency at print time, and no student data is sent to an outside site.

  const isInstalment = !!(f.isInstalment && f.instTotal);

  // ── Extra charges the student needs to know about BEFORE they pay ──
  // A voucher that only shows the base fee is misleading if this student
  // also owes a late fee penalty or an unpaid disciplinary fine — they'd
  // show up to pay and be short. So we compute both here and add them as
  // clearly labeled line items + fold them into the total due on the
  // voucher. (These are informational on the voucher only — the actual
  // amounts still get applied/settled for real via Apply Late Fee / the
  // fee-collection flow, not just by printing this voucher.)
  const voucherLateFee = (f.status==='Overdue' && !f.lateFeeApplied) ? suggestedLateFee(f.amt) : 0;
  const voucherFines = checkPendingFines(f.roll); // {sum, list}
  const extraChargesTotal = voucherLateFee + voucherFines.sum;
  const grandTotal = f.amt + extraChargesTotal;

  // Late fee already baked into f.amt (via Apply Late Fee) — split it back out
  // so it still shows as its own line item on the voucher instead of being
  // silently folded into "Tuition Fee".
  const appliedLateFeeAmt = f.lateFeeApplied ? (f.appliedLateFeeAmt||0) : 0;
  const baseComponentAmt = f.amt - appliedLateFeeAmt;

  let extraChargesRows = '';
  if(voucherLateFee>0){
    extraChargesRows += `<tr><td style="padding:6px 10px;border:1px solid #e2e8f0;color:#b91c1c">⚠ Late Fee Penalty (${D.settings.lateFeePct}% — Overdue)</td><td style="padding:6px 10px;border:1px solid #e2e8f0;text-align:right;color:#b91c1c;font-weight:700">${voucherLateFee.toLocaleString()}</td></tr>`;
  }
  voucherFines.list.forEach(fine=>{
    extraChargesRows += `<tr><td style="padding:6px 10px;border:1px solid #e2e8f0;color:#b91c1c">🚨 Disciplinary Fine — ${fine.reason}</td><td style="padding:6px 10px;border:1px solid #e2e8f0;text-align:right;color:#b91c1c;font-weight:700">${fine.amt.toLocaleString()}</td></tr>`;
  });
  const extraChargesBlock = extraChargesTotal>0 ? `
        <table style="width:100%;border-collapse:collapse;margin-bottom:10px;font-family:Arial,sans-serif">
          <thead>
            <tr style="background:#fef2f2">
              <th style="padding:6px 10px;text-align:left;font-size:8.5px;color:#b91c1c;font-weight:800;letter-spacing:1px;text-transform:uppercase;border:1px solid #fca5a5;width:60%">⚠ Additional Charges Due</th>
              <th style="padding:6px 10px;text-align:right;font-size:8.5px;color:#b91c1c;font-weight:800;letter-spacing:1px;text-transform:uppercase;border:1px solid #fca5a5">Amount (Rs)</th>
            </tr>
          </thead>
          <tbody style="font-family:Arial,sans-serif;font-size:11.5px">
            ${extraChargesRows}
          </tbody>
        </table>` : '';

  let allInst=[], paidCount=0, totalCount=0, paidAmt=0, remainAmt=0;
  if(isInstalment){
    allInst    = D.fees.filter(x=>x.roll===f.roll&&x.isInstalment&&x.instTotal===f.instTotal);
    paidCount  = allInst.filter(x=>feeComputeStatus(x)==='Paid').length;
    totalCount = allInst.length;
    paidAmt    = allInst.reduce((a,b)=>a+feePaidAmt(b),0);
    remainAmt  = f.instTotal - paidAmt;
  }

  /* ── Instalment schedule rows ── */
  let scheduleRows = '';
  if(isInstalment){
    allInst.forEach((inst, i) => {
      const instDue = inst.dueDate ? new Date(inst.dueDate) : null;
      if(instDue) instDue.setHours(0,0,0,0);
      const iOvr    = instDue && instDue < todayClean && inst.status !== 'Paid';
      const isPaid  = inst.status === 'Paid';
      const thisPart= inst === f;
      const partNum = inst.instPart || `${i+1}/${totalCount}`;
      scheduleRows += `
        <tr style="background:${isPaid?'#f0fdf4':iOvr?'#fff5f5':thisPart?'#fffbeb':'#fff'};">
          <td style="padding:5px 8px;border-bottom:1px solid #e8ecef;text-align:center;font-size:11px;font-weight:${thisPart?'800':'600'};color:#1a3a2a">${partNum}</td>
          <td style="padding:5px 8px;border-bottom:1px solid #e8ecef;font-size:11px;color:#374151">${fmtDate(instDue)}</td>
          <td style="padding:5px 8px;border-bottom:1px solid #e8ecef;text-align:right;font-size:11px;font-weight:700;color:#1a3a2a">Rs ${inst.amt.toLocaleString()}</td>
          <td style="padding:5px 8px;border-bottom:1px solid #e8ecef;text-align:center">
            <span style="font-size:9px;font-weight:800;padding:2px 8px;border-radius:3px;letter-spacing:.5px;
              background:${isPaid?'#d1fae5':iOvr?'#fee2e2':'#fef3c7'};
              color:${isPaid?'#065f46':iOvr?'#991b1b':'#92400e'};
              border:1px solid ${isPaid?'#a7f3d0':iOvr?'#fca5a5':'#fde68a'}">
              ${isPaid?'PAID':iOvr?'OVERDUE':'PENDING'}
            </span>
            ${thisPart?'<span style="font-size:9px;font-weight:800;color:#1d4ed8;margin-left:4px">▶ THIS</span>':''}
          </td>
        </tr>`;
    });
  }

  /* ══════════ PROFESSIONAL CHALLAN GENERATOR ══════════ */
  const genCopy = (copyLabel, copyType) => {
    // copyType: 'student' | 'office' | 'bank'
    const FONT = `-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,Roboto,Arial,sans-serif`;
    const ink       = '#0f172a';
    const brand      = '#0d7a4f';       // modern emerald — brand accent
    const brandDeep  = '#0a3d2a';       // deep header background
    const gold       = '#d4a72c';
    const stripeClr  = copyType==='student' ? '#0d7a4f' : copyType==='office' ? '#2563eb' : '#7c3aed';
    const stripeSoft = copyType==='student' ? '#ecfdf5' : copyType==='office' ? '#eff6ff' : '#f5f3ff';
    const stampLabel = copyType==='student' ? 'STUDENT COPY' : copyType==='office' ? 'COLLEGE COPY' : 'BANK COPY';

    const statusBand = isOverdue
      ? `<div style="background:#dc2626;color:#fff;text-align:center;padding:8px;font-size:11.5px;font-weight:700;letter-spacing:.5px">⚠ OVERDUE — ${Math.abs(diffDays)} day(s) past due — pay immediately</div>`
      : diffDays!==null && diffDays<=7
        ? `<div style="background:#d97706;color:#fff;text-align:center;padding:8px;font-size:11.5px;font-weight:700;letter-spacing:.5px">⏰ Due soon — ${diffDays} day(s) remaining — pay before ${dueFmt}</div>`
        : `<div style="background:${brand};color:#fff;text-align:center;padding:8px;font-size:11.5px;font-weight:600;letter-spacing:.3px">✓ Payment due on or before ${dueFmt}</div>`;

    return `
<div style="background:#fff;font-family:${FONT};margin-bottom:0;page-break-inside:avoid;border-radius:18px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,.10),0 1px 3px rgba(15,23,42,.08);border:1px solid #eef0f2">

  <!-- HEADER -->
  <div style="background:linear-gradient(135deg,${brandDeep},${brand});padding:0;position:relative">
    <div style="display:flex;align-items:stretch;min-height:92px">
      <!-- Logo block -->
      <div style="width:76px;display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:14px 10px">
        <div style="width:52px;height:52px;border-radius:16px;background:rgba(255,255,255,.14);backdrop-filter:blur(2px);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:800;color:#fff;border:1px solid rgba(255,255,255,.25)">${getLogoBadgeInner()}</div>
      </div>

      <!-- College Name & Title -->
      <div style="flex:1;padding:16px 14px 14px 4px;display:flex;flex-direction:column;justify-content:center">
        <div style="font-size:19px;font-weight:800;color:#fff;letter-spacing:-.2px;line-height:1.15">${D.settings.instName||''}</div>
        <div style="font-size:10.5px;color:rgba(255,255,255,.65);margin-top:3px;font-weight:500">${D.settings.city||''} · Accounts Department · AY ${academicYear}</div>
        <div style="margin-top:9px;display:inline-flex">
          <span style="background:rgba(255,255,255,.16);color:#fff;font-size:10.5px;font-weight:700;letter-spacing:.5px;padding:4px 12px;border-radius:20px">FEE ${isInstalment?'INSTALMENT ':''}VOUCHER</span>
        </div>
      </div>

      <!-- Voucher No + QR + Copy Label -->
      <div style="width:120px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;padding:12px 10px">
        <div style="background:rgba(255,255,255,.12);border-radius:10px;padding:5px 10px;text-align:center;width:100%">
          <div style="font-size:7.5px;color:rgba(255,255,255,.6);letter-spacing:1px;text-transform:uppercase;font-weight:600">Voucher No.</div>
          <div style="font-size:12px;font-weight:800;color:#fff;letter-spacing:.3px;margin-top:1px">${voucherNo}</div>
        </div>
        <div class="qr-slot" data-qr="${qrPayload}" style="width:52px;height:52px;background:#fff;padding:3px;border-radius:8px;display:flex;align-items:center;justify-content:center;overflow:hidden"></div>
        <div style="background:rgba(255,255,255,.9);color:${stripeClr};font-size:8px;font-weight:800;letter-spacing:1px;padding:3px 9px;text-transform:uppercase;border-radius:20px">${stampLabel}</div>
      </div>
    </div>
  </div>

  <!-- STATUS BAND -->
  ${statusBand}

  <!-- BODY -->
  <div style="padding:18px 20px">

    <!-- STUDENT INFO CARD -->
    <div style="background:#f8fafc;border-radius:12px;padding:14px 16px;margin-bottom:16px">
      <div style="font-size:9.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:${stripeClr};margin-bottom:10px">Student Information</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px 20px">
        <div>
          <div style="font-size:9px;color:#94a3b8;font-weight:600;margin-bottom:2px">STUDENT NAME</div>
          <div style="font-size:14px;font-weight:700;color:${ink}">${stu.name}</div>
        </div>
        <div>
          <div style="font-size:9px;color:#94a3b8;font-weight:600;margin-bottom:2px">FATHER'S NAME</div>
          <div style="font-size:12.5px;color:#334155">${stu.father||'—'}</div>
        </div>
        <div>
          <div style="font-size:9px;color:#94a3b8;font-weight:600;margin-bottom:2px">ROLL NUMBER</div>
          <div style="font-size:12.5px;font-weight:700;color:${stripeClr}">${stu.roll}</div>
        </div>
        <div>
          <div style="font-size:9px;color:#94a3b8;font-weight:600;margin-bottom:2px">STUDENT ID</div>
          <div style="font-size:12px;color:#334155">${stu.id||'—'}</div>
        </div>
        <div>
          <div style="font-size:9px;color:#94a3b8;font-weight:600;margin-bottom:2px">PROGRAM</div>
          <div style="font-size:12px;color:#334155">${(stu.cls||'—').replace('Inter-','')} · ${stu.dept||'—'}</div>
        </div>
        <div>
          <div style="font-size:9px;color:#94a3b8;font-weight:600;margin-bottom:2px">SEMESTER / SECTION</div>
          <div style="font-size:12px;color:#334155">${stu.sem||f.sem||'—'} · ${stu.section||'—'}</div>
        </div>
        <div>
          <div style="font-size:9px;color:#94a3b8;font-weight:600;margin-bottom:2px">CAMPUS</div>
          <div style="font-size:12px;color:#334155">${stu.gender==='Male'?'Boys Campus, '+D.settings.city:'Girls Campus, '+D.settings.city}</div>
        </div>
        <div>
          <div style="font-size:9px;color:#94a3b8;font-weight:600;margin-bottom:2px">ACADEMIC YEAR</div>
          <div style="font-size:12px;font-weight:700;color:${stripeClr}">${academicYear}</div>
        </div>
      </div>
    </div>

    <!-- FEE DETAILS SECTION -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
      <div style="font-size:9.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:${stripeClr}">${isInstalment?'Instalment Schedule':'Fee Breakdown'}</div>
      <div style="font-size:9px;color:#94a3b8">Issued ${todayFmt} · Expires ${expiryFmt}</div>
    </div>

    ${isInstalment ? `
    <!-- INSTALMENT SUMMARY BOXES -->
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <div style="flex:1;background:#ecfdf5;border-radius:10px;padding:10px;text-align:center">
        <div style="font-size:16px;font-weight:800;color:#047857;line-height:1">${paidCount} / ${totalCount}</div>
        <div style="font-size:8px;font-weight:600;color:#64748b;margin-top:3px;letter-spacing:.3px;text-transform:uppercase">Instalments Paid</div>
      </div>
      <div style="flex:1;background:#fffbeb;border-radius:10px;padding:10px;text-align:center">
        <div style="font-size:13px;font-weight:800;color:#b45309;line-height:1">${f.instPart||'—'}</div>
        <div style="font-size:8px;font-weight:600;color:#64748b;margin-top:3px;letter-spacing:.3px;text-transform:uppercase">This Challan</div>
      </div>
      <div style="flex:1;background:#fef2f2;border-radius:10px;padding:10px;text-align:center">
        <div style="font-size:13px;font-weight:800;color:#b91c1c;line-height:1">Rs ${remainAmt.toLocaleString()}</div>
        <div style="font-size:8px;font-weight:600;color:#64748b;margin-top:3px;letter-spacing:.3px;text-transform:uppercase">Balance Remaining</div>
      </div>
      <div style="flex:1;background:#eff6ff;border-radius:10px;padding:10px;text-align:center">
        <div style="font-size:13px;font-weight:800;color:#1d4ed8;line-height:1">Rs ${f.instTotal.toLocaleString()}</div>
        <div style="font-size:8px;font-weight:600;color:#64748b;margin-top:3px;letter-spacing:.3px;text-transform:uppercase">Total Annual Fee</div>
      </div>
    </div>
    <!-- Progress bar -->
    <div style="background:#e2e8f0;border-radius:20px;height:6px;margin-bottom:12px;overflow:hidden">
      <div style="height:100%;width:${Math.round((paidAmt/(f.instTotal||1))*100)}%;background:linear-gradient(90deg,#047857,#34d399);border-radius:20px"></div>
    </div>
    <!-- Schedule Table -->
    <table style="width:100%;border-collapse:collapse;margin-bottom:14px;font-size:11px">
      <thead>
        <tr>
          <th style="padding:7px 8px;text-align:center;font-size:8.5px;color:#94a3b8;font-weight:700;letter-spacing:.5px;text-transform:uppercase;border-bottom:2px solid #f1f5f9">Inst#</th>
          <th style="padding:7px 8px;text-align:left;font-size:8.5px;color:#94a3b8;font-weight:700;letter-spacing:.5px;text-transform:uppercase;border-bottom:2px solid #f1f5f9">Due Date</th>
          <th style="padding:7px 8px;text-align:right;font-size:8.5px;color:#94a3b8;font-weight:700;letter-spacing:.5px;text-transform:uppercase;border-bottom:2px solid #f1f5f9">Amount (Rs)</th>
          <th style="padding:7px 8px;text-align:center;font-size:8.5px;color:#94a3b8;font-weight:700;letter-spacing:.5px;text-transform:uppercase;border-bottom:2px solid #f1f5f9">Status</th>
        </tr>
      </thead>
      <tbody>${scheduleRows}</tbody>
    </table>
    ` : `
    <!-- FULL PAYMENT BREAKDOWN TABLE — tuition + late fee + fines, all in one table like a real voucher -->
    <table style="width:100%;border-collapse:collapse;margin-bottom:12px">
      <thead>
        <tr>
          <th style="padding:7px 10px;text-align:left;font-size:8.5px;color:#94a3b8;font-weight:700;letter-spacing:.5px;text-transform:uppercase;border-bottom:2px solid #f1f5f9;width:60%">Fee Component</th>
          <th style="padding:7px 10px;text-align:right;font-size:8.5px;color:#94a3b8;font-weight:700;letter-spacing:.5px;text-transform:uppercase;border-bottom:2px solid #f1f5f9">Amount (Rs)</th>
        </tr>
      </thead>
      <tbody style="font-size:12px">
        <tr><td style="padding:8px 10px;border-bottom:1px solid #f1f5f9;color:#334155">🎓 ${f.category&&f.category!=='Tuition'?f.category:'Tuition Fee'}</td><td style="padding:8px 10px;border-bottom:1px solid #f1f5f9;text-align:right;color:${ink};font-weight:600">${baseComponentAmt.toLocaleString()}</td></tr>
        ${appliedLateFeeAmt>0?`<tr><td style="padding:8px 10px;border-bottom:1px solid #f1f5f9;color:#b91c1c">⚠ Late Fee Penalty (${D.settings.lateFeePct}% — Applied)</td><td style="padding:8px 10px;border-bottom:1px solid #f1f5f9;text-align:right;color:#b91c1c;font-weight:700">${appliedLateFeeAmt.toLocaleString()}</td></tr>`:''}
        ${voucherLateFee>0?`<tr><td style="padding:8px 10px;border-bottom:1px solid #f1f5f9;color:#b91c1c">⚠ Late Fee Penalty (${D.settings.lateFeePct}% — Overdue)</td><td style="padding:8px 10px;border-bottom:1px solid #f1f5f9;text-align:right;color:#b91c1c;font-weight:700">${voucherLateFee.toLocaleString()}</td></tr>`:''}
        ${voucherFines.list.map(fine=>`<tr><td style="padding:8px 10px;border-bottom:1px solid #f1f5f9;color:#b91c1c">🚨 Disciplinary Fine — ${fine.reason}</td><td style="padding:8px 10px;border-bottom:1px solid #f1f5f9;text-align:right;color:#b91c1c;font-weight:700">${fine.amt.toLocaleString()}</td></tr>`).join('')}
        <tr>
          <td style="padding:9px 10px;font-size:12px;font-weight:700;color:${ink};background:#f8fafc;border-radius:0 0 0 8px">TOTAL — ${f.sem||'—'}</td>
          <td style="padding:9px 10px;font-size:13px;font-weight:800;color:${stripeClr};text-align:right;background:#f8fafc;border-radius:0 0 8px 0">${grandTotal.toLocaleString()}</td>
        </tr>
      </tbody>
    </table>
    <div style="display:flex;gap:10px;margin-bottom:12px;flex-wrap:wrap">
      <span style="background:${stripeSoft};color:${stripeClr};padding:4px 10px;border-radius:20px;font-size:9.5px;font-weight:700">FULL PAYMENT</span>
      <span style="font-size:10px;color:#64748b;align-self:center">Issue: <strong style="color:${ink}">${todayFmt}</strong></span>
      <span style="font-size:10px;color:#64748b;align-self:center">Due: <strong style="color:${isOverdue?'#dc2626':ink}">${dueFmt}</strong></span>
      <span style="font-size:10px;color:#b45309;align-self:center;font-weight:600">⚠ Expires ${expiryFmt}</span>
    </div>
    `}

    ${isInstalment?extraChargesBlock:''}

    <!-- AMOUNT BOX -->
    <div style="border-radius:14px;overflow:hidden;margin-bottom:14px;background:linear-gradient(135deg,${brandDeep},${brand})">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px">
        <div style="font-size:9.5px;font-weight:700;color:rgba(255,255,255,.8);letter-spacing:1px;text-transform:uppercase">${isInstalment?'Amount Due — This Challan':'Total Amount Due'}${extraChargesTotal>0?' (incl. late fee / fine)':''}</div>
      </div>
      <div style="display:flex;align-items:center;padding:6px 16px 16px;gap:16px">
        <div style="flex:1">
          <div style="font-size:32px;font-weight:800;color:#fff;line-height:1;letter-spacing:-.5px">Rs ${grandTotal.toLocaleString()}</div>
          <div style="font-size:10px;color:rgba(255,255,255,.65);margin-top:5px">${amountInWords(grandTotal)}</div>
          ${extraChargesTotal>0?`<div style="font-size:9.5px;color:#fecaca;margin-top:4px;font-weight:700">Includes Rs ${extraChargesTotal.toLocaleString()} in late fee / disciplinary fine (see above)</div>`:''}
        </div>
        <div style="text-align:center">
          <div style="background:rgba(255,255,255,.14);border-radius:8px;padding:7px 14px;margin-bottom:5px">
            <div style="font-size:11px;font-weight:800;letter-spacing:2px;color:#fff">${isOverdue?'OVERDUE':'UNPAID'}</div>
          </div>
          <div style="font-size:8px;color:rgba(255,255,255,.5);font-weight:600;text-transform:uppercase;letter-spacing:.5px">Office Stamp</div>
        </div>
      </div>
    </div>

    <!-- PAYMENT INSTRUCTIONS + BANK INFO -->
    <div style="display:flex;gap:10px;margin-bottom:14px;flex-wrap:wrap">
      <div style="flex:1;min-width:220px;background:#f8fafc;border-radius:12px;padding:12px 14px">
        <div style="font-size:9px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:${stripeClr};margin-bottom:8px">Payment Instructions</div>
        <div style="font-size:10.5px;color:#475569;line-height:1.9">
          Pay <strong>on or before</strong> the due date. <span style="color:#dc2626;font-weight:700">Late fee: ${D.settings.lateFeePct||0}% of the amount, applied after due date.</span><br>
          Present at the <strong>College Accounts Office</strong> or designated <strong>Bank Branch</strong>.<br>
          Cashier will stamp and sign — <strong>retain your copy as proof.</strong><br>
          Queries: <strong>042-35761234</strong> · Office hours 9am–3pm (Mon–Sat)
        </div>
      </div>
      <div style="flex:0 0 200px;background:${stripeSoft};border-radius:12px;padding:12px 14px">
        <div style="font-size:9px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:${stripeClr};margin-bottom:8px">Bank / Online Payment</div>
        <div style="font-size:10.5px;color:#334155;line-height:1.9">
          <strong>MCB Bank Ltd</strong> — Johar Town<br>
          A/C Title: <strong>${D.settings.instName}</strong><br>
          A/C No: <strong>0123456789</strong><br>
          <strong>JazzCash:</strong> 0300-8001234<br>
          <strong>EasyPaisa:</strong> 0321-7001234<br>
          <span style="color:#94a3b8;font-size:9px">Mention Roll No. in description</span>
        </div>
      </div>
    </div>

    <!-- SIGNATURES ROW -->
    <div style="display:flex;gap:0;background:#f8fafc;border-radius:12px;overflow:hidden">
      <div style="flex:1;padding:12px 14px;text-align:center">
        <div style="height:26px;border-bottom:1.5px solid #cbd5e1;margin-bottom:6px"></div>
        <div style="font-size:8px;font-weight:700;color:#94a3b8;letter-spacing:.5px;text-transform:uppercase">Student / Parent Signature</div>
      </div>
      <div style="flex:1;padding:12px 14px;text-align:center;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0">
        <div style="height:26px;border-bottom:1.5px dashed #cbd5e1;margin-bottom:6px"></div>
        <div style="font-size:8px;font-weight:700;color:#94a3b8;letter-spacing:.5px;text-transform:uppercase">Accounts Officer / Cashier</div>
      </div>
      <div style="flex:1;padding:12px 14px;text-align:center">
        <div style="height:26px;display:flex;align-items:center;justify-content:center;margin-bottom:6px">
          <div style="width:54px;height:54px;border:1.5px dashed #cbd5e1;border-radius:50%;display:flex;align-items:center;justify-content:center">
            <div style="font-size:7px;color:#cbd5e1;font-weight:700;text-align:center;line-height:1.3">OFFICIAL<br>STAMP</div>
          </div>
        </div>
        <div style="font-size:8px;font-weight:700;color:#94a3b8;letter-spacing:.5px;text-transform:uppercase;margin-top:2px">College Seal</div>
      </div>
    </div>

    <!-- FOOTER -->
    <div style="margin-top:12px;text-align:center">
      <div style="font-size:9px;color:#94a3b8">Generated ${todayFmt} · Voucher ${voucherNo} · Valid 30 days · Computer-generated, no signature required for issuance</div>
    </div>

  </div><!-- /body -->
</div><!-- /card -->`;
  };

  const css = `
    *{box-sizing:border-box;margin:0;padding:0;}
    html{-webkit-print-color-adjust:exact;print-color-adjust:exact;}
    body{font-family:Arial,sans-serif;background:#e8ecef;padding:16px;}
    .no-print{margin-bottom:20px;display:flex;align-items:center;gap:10px;background:#fff;padding:14px 18px;border-radius:8px;border:1px solid #d1d5db;box-shadow:0 2px 8px rgba(0,0,0,.08);flex-wrap:wrap;}
    .no-print-left{flex:1;min-width:0}
    .no-print h3{font-size:15px;font-weight:800;color:#0d3b1e;margin-bottom:3px}
    .no-print p{font-size:11px;color:#6b7280}
    .btn-row{display:flex;gap:8px;flex-wrap:wrap;flex-shrink:0}
    .nbtn{padding:9px 18px;border:none;border-radius:6px;font-size:12.5px;font-weight:700;cursor:pointer;font-family:inherit;transition:opacity .15s}
    .nbtn:hover{opacity:.85}
    .cut-line{display:flex;align-items:center;gap:10px;margin:16px 0;color:#9ca3af;font-size:10.5px;font-family:Arial,sans-serif}
    .cut-line::before,.cut-line::after{content:'';flex:1;border-top:1.5px dashed #cbd5e1}
    .cut-scissors{font-size:13px}
    @media print{
      body{background:#fff;padding:0;}
      .no-print{display:none!important;}
      .page-break{page-break-after:always;}
      .cut-line{page-break-after:avoid;margin:8px 0;}
    }`;

  const copies = [
    {type:'student'},
    {type:'office'},
    {type:'bank'},
  ];

  const allCopies = copies.map((c,i) =>
    genCopy(c.label, c.type) + (i < copies.length-1 ?
      `<div class="cut-line"><span class="cut-scissors">✂</span> <span style="letter-spacing:1px;text-transform:uppercase;font-size:9.5px">cut here — ${c.type==='student'?'College Copy Below':'Bank Copy Below'}</span> <span class="cut-scissors">✂</span></div><div class="page-break"></div>` : '')
  ).join('');

  const h = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Fee Challan — ${stu.name} — ${voucherNo}</title><script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script><style>${css}</style></head><body>
  <div class="no-print">
    <div class="no-print-left">
      <h3>📄 Fee Demand Challan — ${stu.name}</h3>
      <p>${voucherNo} &nbsp;·&nbsp; ${isInstalment?'Instalment '+f.instPart:'Full Payment'} &nbsp;·&nbsp; Due: ${dueFmt} &nbsp;·&nbsp; Amount: <strong>Rs ${f.amt.toLocaleString()}</strong> &nbsp;·&nbsp; 3 Copies (Student · College · Bank)</p>
    </div>
    <div class="btn-row">
      <button class="nbtn" style="background:#0d3b1e;color:#fff" onclick="window.print()">🖨️ Print All 3 Copies</button>
      <button class="nbtn" style="background:#1d4ed8;color:#fff" onclick="window.print()" title="Choose Save as PDF in print dialog">⬇️ Save as PDF</button>
    </div>
  </div>
  ${allCopies}
  <script>
    // Render every QR placeholder locally once the QRCode library has loaded —
    // retried briefly in case the script tag is still fetching, so QR codes
    // still appear on slow connections instead of failing silently.
    (function renderQrSlots(attemptsLeft){
      if (typeof QRCode === 'undefined') {
        if (attemptsLeft > 0) return void setTimeout(function(){ renderQrSlots(attemptsLeft-1); }, 200);
        return;
      }
      document.querySelectorAll('.qr-slot').forEach(function(el){
        if (el.dataset.rendered) return;
        el.dataset.rendered = '1';
        new QRCode(el, { text: el.dataset.qr, width: 52, height: 52, colorDark: '#0d3b1e', colorLight: '#ffffff' });
      });
    })(25);
  </script>
  </body></html>`;

  showPrintPreview(h, 'Fee Challan — ' + stu.name);
}

// ── Transport Fee's own dedicated voucher — separate from the main Fee
// voucher above, since Transport is its own module with its own students,
// amounts, and due dates. Deliberately simpler (single card, 2 copies)
// since it's one line item, not a full fee breakdown/instalment schedule.
function printTransportVoucher(idx){
  const t = D.transportFees[idx];
  if(!t){ toast('Transport fee record not found'); return; }

  const stu = D.students.find(s=>s.roll===t.roll) || {
    name:t.student, roll:t.roll, dept:'—', cls:'—', father:'—', section:'—', sem:'—', id:'—'
  };

  const todayRaw   = new Date();
  const todayClean = new Date(todayRaw); todayClean.setHours(0,0,0,0);
  const dueDateObj = t.dueDate ? new Date(t.dueDate) : null;
  if(dueDateObj) dueDateObj.setHours(0,0,0,0);
  const isOverdue = t.status==='Overdue' || (dueDateObj && dueDateObj < todayClean && t.status!=='Paid');
  const diffDays  = dueDateObj ? Math.ceil((dueDateObj - todayClean)/(1000*60*60*24)) : null;

  const fmtDate = (d) => d ? d.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}) : '—';
  const todayFmt = fmtDate(todayRaw);
  const dueFmt   = fmtDate(dueDateObj);
  const voucherNo = 'TRV-' + String(2000+idx+1).padStart(5,'0');
  const academicYear = getAcademicYear();

  const qrPayload = `TRV:${voucherNo}|ROLL:${stu.roll}|AMT:${t.amt}|DUE:${t.dueDate||''}`;
  // Generated locally in-browser — see the note in printVoucher() above for why.

  const FONT = `-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,Roboto,Arial,sans-serif`;
  const ink='#0f172a', brand='#0e7490', brandDeep='#0a3d47'; // teal — visually distinct from the main green fee voucher

  const genTfCopy = (copyType) => {
    const stripeClr = copyType==='student' ? brand : '#1d4ed8';
    const stripeSoft = copyType==='student' ? '#ecfeff' : '#eff6ff';
    const stampLabel = t.status==='Paid' ? 'RECEIPT' : (copyType==='student' ? 'STUDENT COPY' : 'OFFICE COPY');
    const statusBand = t.status==='Paid'
      ? `<div style="background:#0d7a4f;color:#fff;text-align:center;padding:8px;font-size:11.5px;font-weight:700;letter-spacing:.5px">✓ PAID — Receipt ${t.receipt||'—'} — ${t.date||''}</div>`
      : isOverdue
        ? `<div style="background:#dc2626;color:#fff;text-align:center;padding:8px;font-size:11.5px;font-weight:700;letter-spacing:.5px">⚠ OVERDUE — pay immediately</div>`
        : `<div style="background:${brand};color:#fff;text-align:center;padding:8px;font-size:11.5px;font-weight:600;letter-spacing:.3px">🚌 Payment due on or before ${dueFmt}</div>`;

    return `
<div style="background:#fff;font-family:${FONT};margin-bottom:0;page-break-inside:avoid;border-radius:18px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,.10),0 1px 3px rgba(15,23,42,.08);border:1px solid #eef0f2">
  <div style="background:linear-gradient(135deg,${brandDeep},${brand});padding:0">
    <div style="display:flex;align-items:stretch;min-height:88px">
      <div style="width:76px;display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:14px 10px">
        <div style="width:52px;height:52px;border-radius:16px;background:rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center;font-size:22px;border:1px solid rgba(255,255,255,.25)">🚌</div>
      </div>
      <div style="flex:1;padding:16px 14px 14px 4px;display:flex;flex-direction:column;justify-content:center">
        <div style="font-size:18px;font-weight:800;color:#fff;letter-spacing:-.2px;line-height:1.15">${D.settings.instName||''}</div>
        <div style="font-size:10.5px;color:rgba(255,255,255,.65);margin-top:3px;font-weight:500">${D.settings.city||''} · Transport Office · AY ${academicYear}</div>
        <div style="margin-top:9px"><span style="background:rgba(255,255,255,.16);color:#fff;font-size:10.5px;font-weight:700;letter-spacing:.5px;padding:4px 12px;border-radius:20px">TRANSPORT FEE VOUCHER</span></div>
      </div>
      <div style="width:120px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;padding:12px 10px">
        <div style="background:rgba(255,255,255,.12);border-radius:10px;padding:5px 10px;text-align:center;width:100%">
          <div style="font-size:7.5px;color:rgba(255,255,255,.6);letter-spacing:1px;text-transform:uppercase;font-weight:600">Voucher No.</div>
          <div style="font-size:12px;font-weight:800;color:#fff;margin-top:1px">${voucherNo}</div>
        </div>
        <div class="qr-slot" data-qr="${qrPayload}" style="width:52px;height:52px;background:#fff;padding:3px;border-radius:8px;display:flex;align-items:center;justify-content:center;overflow:hidden"></div>
        <div style="background:rgba(255,255,255,.9);color:${stripeClr};font-size:8px;font-weight:800;letter-spacing:1px;padding:3px 9px;text-transform:uppercase;border-radius:20px">${stampLabel}</div>
      </div>
    </div>
  </div>
  ${statusBand}
  <div style="padding:18px 20px">
    <div style="background:#f8fafc;border-radius:12px;padding:14px 16px;margin-bottom:16px">
      <div style="font-size:9.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:${stripeClr};margin-bottom:10px">Student Information</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px 20px">
        <div><div style="font-size:9px;color:#94a3b8;font-weight:600;margin-bottom:2px">STUDENT NAME</div><div style="font-size:14px;font-weight:700;color:${ink}">${stu.name}</div></div>
        <div><div style="font-size:9px;color:#94a3b8;font-weight:600;margin-bottom:2px">ROLL NUMBER</div><div style="font-size:12.5px;font-weight:700;color:${stripeClr}">${stu.roll}</div></div>
        <div><div style="font-size:9px;color:#94a3b8;font-weight:600;margin-bottom:2px">PROGRAM</div><div style="font-size:12px;color:#334155">${(stu.cls||'—').replace('Inter-','')} · ${stu.dept||'—'}</div></div>
        <div><div style="font-size:9px;color:#94a3b8;font-weight:600;margin-bottom:2px">SEMESTER / SECTION</div><div style="font-size:12px;color:#334155">${stu.sem||'—'} · ${stu.section||'—'}</div></div>
      </div>
    </div>

    <div style="background:${stripeSoft};border-radius:12px;padding:14px 16px;margin-bottom:16px">
      <div style="font-size:9.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:${stripeClr};margin-bottom:10px">Route Details</div>
      <div style="font-size:13px;font-weight:600;color:${ink}">🚌 ${t.route||'Route not specified'}</div>
      <div style="font-size:10px;color:#64748b;margin-top:6px">Issued ${todayFmt} · Due ${dueFmt}${diffDays!==null&&diffDays>=0&&t.status!=='Paid'?' · '+diffDays+' day(s) remaining':''}</div>
    </div>

    <div style="border-radius:14px;overflow:hidden;margin-bottom:14px;background:linear-gradient(135deg,${brandDeep},${brand})">
      <div style="padding:8px 16px"><div style="font-size:9.5px;font-weight:700;color:rgba(255,255,255,.8);letter-spacing:1px;text-transform:uppercase">Transport Fee Amount</div></div>
      <div style="display:flex;align-items:center;padding:6px 16px 16px;gap:16px">
        <div style="flex:1">
          <div style="font-size:32px;font-weight:800;color:#fff;line-height:1;letter-spacing:-.5px">Rs ${t.amt.toLocaleString()}</div>
          <div style="font-size:10px;color:rgba(255,255,255,.65);margin-top:5px">${amountInWords(t.amt)}</div>
        </div>
        <div style="text-align:center">
          <div style="background:rgba(255,255,255,.14);border-radius:8px;padding:7px 14px">
            <div style="font-size:11px;font-weight:800;letter-spacing:2px;color:#fff">${t.status.toUpperCase()}</div>
          </div>
        </div>
      </div>
    </div>

    <div style="background:#f8fafc;border-radius:12px;padding:12px 14px;margin-bottom:14px">
      <div style="font-size:9px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:${stripeClr};margin-bottom:8px">Payment Instructions</div>
      <div style="font-size:10.5px;color:#475569;line-height:1.9">
        Pay <strong>on or before</strong> the due date at the <strong>College Accounts / Transport Office</strong>.<br>
        Cashier will stamp and sign — <strong>retain your copy as proof.</strong><br>
        Queries: <strong>042-35761234</strong> · Office hours 9am–3pm (Mon–Sat)
      </div>
    </div>

    <div style="display:flex;gap:0;background:#f8fafc;border-radius:12px;overflow:hidden">
      <div style="flex:1;padding:12px 14px;text-align:center">
        <div style="height:26px;border-bottom:1.5px solid #cbd5e1;margin-bottom:6px"></div>
        <div style="font-size:8px;font-weight:700;color:#94a3b8;letter-spacing:.5px;text-transform:uppercase">Student / Parent Signature</div>
      </div>
      <div style="flex:1;padding:12px 14px;text-align:center;border-left:1px solid #e2e8f0">
        <div style="height:26px;border-bottom:1.5px dashed #cbd5e1;margin-bottom:6px"></div>
        <div style="font-size:8px;font-weight:700;color:#94a3b8;letter-spacing:.5px;text-transform:uppercase">Transport Officer / Cashier</div>
      </div>
    </div>

    <div style="margin-top:12px;text-align:center">
      <div style="font-size:9px;color:#94a3b8">Generated ${todayFmt} · Voucher ${voucherNo} · Computer-generated, no signature required for issuance</div>
    </div>
  </div>
</div>`;
  };

  const css = `
    *{box-sizing:border-box;margin:0;padding:0;}
    html{-webkit-print-color-adjust:exact;print-color-adjust:exact;}
    body{font-family:Arial,sans-serif;background:#e8ecef;padding:16px;}
    .no-print{margin-bottom:20px;display:flex;align-items:center;gap:10px;background:#fff;padding:14px 18px;border-radius:8px;border:1px solid #d1d5db;box-shadow:0 2px 8px rgba(0,0,0,.08);flex-wrap:wrap;}
    .no-print-left{flex:1;min-width:0}
    .no-print h3{font-size:15px;font-weight:800;color:${brandDeep};margin-bottom:3px}
    .no-print p{font-size:11px;color:#6b7280}
    .btn-row{display:flex;gap:8px;flex-wrap:wrap;flex-shrink:0}
    .nbtn{padding:9px 18px;border:none;border-radius:6px;font-size:12.5px;font-weight:700;cursor:pointer;font-family:inherit}
    .cut-line{display:flex;align-items:center;gap:10px;margin:16px 0;color:#9ca3af;font-size:10.5px;font-family:Arial,sans-serif}
    .cut-line::before,.cut-line::after{content:'';flex:1;border-top:1.5px dashed #cbd5e1}
    @media print{ body{background:#fff;padding:0;} .no-print{display:none!important;} .page-break{page-break-after:always;} }`;

  const docLabel = t.status==='Paid' ? 'Transport Fee Receipt' : 'Transport Fee Voucher';
  const h = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${docLabel} — ${stu.name} — ${voucherNo}</title><script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script><style>${css}</style></head><body>
  <div class="no-print">
    <div class="no-print-left">
      <h3>🚌 ${docLabel} — ${stu.name}</h3>
      <p>${voucherNo} &nbsp;·&nbsp; Route: ${t.route||'—'} &nbsp;·&nbsp; Due: ${dueFmt} &nbsp;·&nbsp; Amount: <strong>Rs ${t.amt.toLocaleString()}</strong></p>
    </div>
    <div class="btn-row">
      ${t.status==='Paid'
        ? `<button class="nbtn" style="background:${brandDeep};color:#fff" onclick="window.print()">🖨️ Print Receipt</button>`
        : `<button class="nbtn" style="background:${brandDeep};color:#fff" onclick="window.print()">🖨️ Print Both Copies</button>`}
    </div>
  </div>
  ${t.status==='Paid'
    ? genTfCopy('student')
    : `${genTfCopy('student')}
  <div class="cut-line"><span>✂ cut here — Office Copy Below ✂</span></div>
  <div class="page-break"></div>
  ${genTfCopy('office')}`}
  <script>
    (function renderQrSlots(attemptsLeft){
      if (typeof QRCode === 'undefined') {
        if (attemptsLeft > 0) return void setTimeout(function(){ renderQrSlots(attemptsLeft-1); }, 200);
        return;
      }
      document.querySelectorAll('.qr-slot').forEach(function(el){
        if (el.dataset.rendered) return;
        el.dataset.rendered = '1';
        new QRCode(el, { text: el.dataset.qr, width: 52, height: 52, colorDark: '#0d3b1e', colorLight: '#ffffff' });
      });
    })(25);
  </script>
  </body></html>`;

  showPrintPreview(h, (t.status==='Paid'?'Transport Fee Receipt — ':'Transport Fee Voucher — ') + stu.name);
}



function quickCollect(idx){
  const f=D.fees[idx];
  if(!f) return;
  const stu=D.students.find(s=>s.roll===f.roll);
  if(!stu){ toast('Student not found'); return; }

  // Instalment records go through the proper partial-payment editor (Step 2)
  // instead of this shortcut's old "jump straight to full-paid" path — that
  // path didn't populate the Amount Being Paid Now field at all.
  if(f.isInstalment){ openEditFee(idx); return; }

  openAddFee();

  _feeSelectedStu = stu;
  $('fn').value = stu.name;
  $('fr').value = stu.roll;
  $('feeEditIdx').value = idx;
  const collectedAmt = applyPendingFinesToFeeModal(stu.roll, f.amt);
  $('fa').value = collectedAmt;
  const semEl=$('fsm');
  if(semEl){for(let i=0;i<semEl.options.length;i++){if(semEl.options[i].value===f.sem||semEl.options[i].text===f.sem){semEl.selectedIndex=i;break;}}}
  $('fdd').value = f.dueDate||'';
  $('fst').value = 'Paid';
  feeStatusChange('Paid');
  $('frc').value = 'REC-'+Date.now().toString().slice(-5);
  feeShowSelected(stu);
  $('fstep1-next').disabled=false;
  $('fstep1-next').style.opacity='1';
  if($('fsum-name')) $('fsum-name').textContent = stu.name;
  if($('fsum-roll')) $('fsum-roll').textContent = stu.roll;
  if($('fsum-amt'))  $('fsum-amt').textContent  = 'Rs '+fmt(collectedAmt);
  if($('fsum-st'))   $('fsum-st').innerHTML     = bdg('Paid');
  if($('fsum-mt'))   $('fsum-mt').textContent   = 'Cash';
  feeShowInstPlan(f.roll, f.instTotal||null);
  feeStep(3);
}

function printFees(){
  const rows=D.fees.map(f=>[f.receipt||'-',f.student,f.roll,f.sem,'Rs '+f.amt.toLocaleString(),f.date,f.method,f.status]);
  const thead='<th>Receipt</th><th>Student</th><th>Roll</th><th>Sem</th><th>Amount</th><th>Date</th><th>Method</th><th>Status</th>';
  const body=rows.map(r=>'<tr>'+r.map(c=>'<td>'+c+'</td>').join('')+'</tr>').join('');
  const h='<html><head><meta charset="UTF-8"><style>*{box-sizing:border-box;}body{font-family:Arial,sans-serif;padding:22px;}h2{color:#1a6636;font-size:18px;margin-bottom:6px;}.inf{font-size:12px;color:#666;margin-bottom:12px;}table{width:100%;border-collapse:collapse;}th{background:#1a6636;color:#fff;padding:7px 9px;text-align:left;font-size:11px;}td{padding:7px 9px;border-bottom:1px solid #e0e0e0;font-size:12px;}tr:nth-child(even)td{background:#f5faf6;}@media print{.np{display:none;}}</style></head><body><h2>'+D.settings.instName+' - Fee Records</h2><div class="inf">Generated: '+new Date().toLocaleString()+' | Total: '+D.fees.length+'</div><table><thead><tr>'+thead+'</tr></thead><tbody>'+body+'</tbody></table><div class="np" style="margin-top:12px"><button onclick="window.print()" style="padding:7px 16px;background:#1a6636;color:#fff;border:none;border-radius:6px;cursor:pointer;">Print</button></div></body></html>';
  showPrintPreview(h,'Fee Records');
}

/* ══════════════════════════════════════════════════
   SALARIES
══════════════════════════════════════════════════ */
let SLF={q:'',st:'',month:'',dept:''};


function salMonthSort(a,b){
  const ms=['January','February','March','April','May','June','July','August','September','October','November','December'];
  const p=m=>{const x=(m||'').split(' ');return x.length===2?parseInt(x[1])*12+ms.indexOf(x[0]):0;};
  return p(b)-p(a);
}

function rSalaries(){
  // ── Dropdowns ──────────────────────────────────────────
  const allMonths=[...new Set(D.salaries.map(s=>s.month).filter(Boolean))].sort(salMonthSort);
  const mf=$('salMonthFilter');
  if(mf){const cur=mf.value;mf.innerHTML='<option value="">All Months</option>'+allMonths.map(m=>`<option value="${m}">${m}</option>`).join('');if(cur)mf.value=cur;}

  // Dept filter dropdown — from employees + existing salary records
  const allDepts=[...new Set([...D.employees.map(e=>e.dept),...D.salaries.map(s=>s.dept||'')].filter(Boolean))].sort();
  const df=$('salDeptFilter');
  if(df){const cur2=df.value;df.innerHTML='<option value="">All Departments</option>'+allDepts.map(d=>`<option value="${d}">${d}</option>`).join('');if(cur2)df.value=cur2;}

  // ── Filter ──────────────────────────────────────────────
  const data=D.salaries.filter(s=>{
    const empDept=s.dept||(D.employees.find(e=>e.name===s.name||(s.empId&&e.id===s.empId))||{}).dept||'';
    return (!SLF.q||s.name.toLowerCase().includes(SLF.q))
      &&(!SLF.st||s.status===SLF.st)
      &&(!SLF.month||s.month===SLF.month)
      &&(!SLF.dept||empDept===SLF.dept||s.dept===SLF.dept);
  });

  // ── Stat cards (filter-aware) ───────────────────────────
  const filteredForStats = SLF.month?D.salaries.filter(s=>s.month===SLF.month):D.salaries;
  const tot=filteredForStats.reduce((a,b)=>a+netPay(b),0);
  const avg=filteredForStats.length?Math.round(tot/filteredForStats.length):0;
  $('sl-t').textContent=fmt(tot);
  $('sl-p').textContent=filteredForStats.filter(s=>s.status==='Paid').length;
  $('sl-n').textContent=filteredForStats.filter(s=>s.status==='Pending').length;
  $('sl-a').textContent=fmt(avg);

  // ── Department-wise payroll panel ──────────────────────
  renderDeptPayroll(SLF.month);

  // ── Filter info bar ─────────────────────────────────────
  const activeFilters=[];
  if(SLF.month)activeFilters.push('Month: '+SLF.month);
  if(SLF.dept)activeFilters.push('Dept: '+SLF.dept);
  if(SLF.st)activeFilters.push('Status: '+SLF.st);
  if(SLF.q)activeFilters.push('Search: "'+SLF.q+'"');
  const fi=$('sal-filter-info');
  const ft=$('sal-filter-txt');
  if(fi&&ft){
    if(activeFilters.length){
      ft.textContent='🔍 '+activeFilters.join('  ·  ')+`  (${data.length} record${data.length!==1?'s':''})`;
      fi.style.display='block';
    } else {
      fi.style.display='none';
    }
  }

  // ── Empty state ─────────────────────────────────────────
  const emEl=$('sal-empty');
  if(emEl)emEl.style.display=data.length===0?'block':'none';

  // ── Table rows ──────────────────────────────────────────
  $('salTB').innerHTML=data.map(s=>{
    const idx=D.salaries.indexOf(s);
    const net=netPay(s);
    const empDept=s.dept||(D.employees.find(e=>e.name===s.name||(s.empId&&e.id===s.empId))||{}).dept||'—';
    return`<tr>
      <td><code class="id-tag">${s.salId||'-'}</code></td>
      <td>
        <strong>${s.name}</strong>
        <div style="font-size:10px;color:var(--s4);margin-top:1px">${s.empId||''}${empDept&&empDept!=='—'?' · '+empDept:''}</div>
      </td>
      <td>${s.desig}</td>
      <td>Rs ${fmt(s.basic)}</td><td>Rs ${fmt(s.allow)}</td>
      <td style="color:var(--rd)">Rs ${fmt(s.deduct||0)}</td>
      <td><strong>Rs ${fmt(net)}</strong></td>
      <td><span style="background:var(--s1);padding:2px 8px;border-radius:50px;font-size:11px;font-weight:600">${s.month}</span></td>
      <td>${bdg(s.status)}</td>
      <td style="white-space:nowrap">
        <div class="action-menu-wrap">
          <button class="action-dots-btn" onclick="toggleActionMenu(this)" title="Actions">⋯</button>
          <div class="action-dropdown">
            <button onclick="openEditSal(${idx});closeAllMenus()">✏️ Edit</button>
            <button onclick="viewSal(${idx});closeAllMenus()">👁 View Details</button>
            <button onclick="printSalSlip(${idx});closeAllMenus()">🧾 Salary Slip</button>
            ${s.status==='Pending'?`<button onclick="markSalPaid(${idx});closeAllMenus()">✅ Mark as Paid</button>`:''}
            <button onclick="syncSalFromEmp(${idx});closeAllMenus()">🔄 Sync from Employee</button>
            <hr>
            <button class="adt-red" onclick="delSal(${idx});closeAllMenus()">🗑 Delete</button>
          </div>
        </div>
      </td>
    </tr>`;
  }).join('');
}

/* ── Department-wise payroll renderer ─────────────────────── */
function renderDeptPayroll(filterMonth){
  const container=$('sl-dept-bars');
  const lbl=$('sl-dept-month-lbl');
  if(!container)return;

  const src=filterMonth?D.salaries.filter(s=>s.month===filterMonth):D.salaries;
  if(lbl)lbl.textContent=filterMonth?filterMonth:'All Records';

  // Group by dept
  const map={};
  src.forEach(s=>{
    const d=s.dept||(D.employees.find(e=>e.name===s.name||(s.empId&&e.id===s.empId))||{}).dept||'Unknown';
    if(!map[d])map[d]={total:0,paid:0,pending:0,count:0};
    const net=netPay(s);
    map[d].total+=net;
    map[d].count++;
    if(s.status==='Paid')map[d].paid+=net;else map[d].pending+=net;
  });

  const depts=Object.entries(map).sort((a,b)=>b[1].total-a[1].total);
  const grand=depts.reduce((a,b)=>a+b[1].total,0);

  if(depts.length===0){container.innerHTML='<div style="text-align:center;padding:20px;color:var(--s4);font-size:13px">No salary data available</div>';return;}

  container.innerHTML=depts.map(([dept,v])=>{
    const pct=grand?Math.round(v.total/grand*100):0;
    const paidPct=v.total?Math.round(v.paid/v.total*100):0;
    return`<div style="margin-bottom:14px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;gap:8px;flex-wrap:wrap">
        <div style="display:flex;align-items:center;gap:8px;min-width:0">
          <span style="font-size:13px;font-weight:600;color:var(--s6);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:200px" title="${dept}">${dept}</span>
          <span style="font-size:10px;color:var(--s4)">${v.count} record${v.count!==1?'s':''}</span>
        </div>
        <div style="display:flex;align-items:center;gap:10px;flex-shrink:0">
          <span style="font-size:12px;color:var(--g6);font-weight:700">✅ Rs ${fmt(v.paid)}</span>
          ${v.pending>0?`<span style="font-size:12px;color:var(--yl);font-weight:700">⏳ Rs ${fmt(v.pending)}</span>`:''}
          <span style="font-size:13px;font-weight:800;color:var(--s6)">Rs ${fmt(v.total)}</span>
          <span style="font-size:10px;background:var(--s1);padding:2px 7px;border-radius:50px;color:var(--s5);font-weight:700">${pct}%</span>
        </div>
      </div>
      <div style="height:8px;background:var(--s2);border-radius:50px;overflow:hidden">
        <div style="height:100%;border-radius:50px;background:linear-gradient(90deg,var(--g5),var(--g3));width:${pct}%;transition:width .4s"></div>
      </div>
      ${paidPct<100?`<div style="margin-top:3px;height:3px;background:#fef3c7;border-radius:50px;overflow:hidden"><div style="height:100%;background:var(--yl);width:${paidPct}%;border-radius:50px"></div></div>`:''}
    </div>`;
  }).join('')+`<div style="border-top:2px solid var(--s2);padding-top:10px;margin-top:4px;display:flex;justify-content:space-between;align-items:center">
    <span style="font-size:12px;font-weight:700;color:var(--s5)">${depts.length} Department${depts.length!==1?'s':''} · ${src.length} Records</span>
    <span style="font-size:14px;font-weight:800;color:var(--s6)">Grand Total: Rs ${fmt(grand)}</span>
  </div>`;
}

function fSL(v){SLF.q=v.toLowerCase();rSalaries();}
function fSLSt(v){SLF.st=v;rSalaries();}
function fSLMonth(v){SLF.month=v;rSalaries();}
function fSLDept(v){SLF.dept=v;rSalaries();}
function clearSalFilters(){
  SLF={q:'',st:'',month:'',dept:''};
  const fi=$('sal-search');if(fi)fi.value='';
  // reset all selects in frow
  ['salMonthFilter','salDeptFilter'].forEach(id=>{const el=$(id);if(el)el.value='';});
  // reset status select (first .fs in salary frow)
  const pg=$('pg-salaries');
  if(pg){const ss=pg.querySelectorAll('select.fs');ss.forEach(s=>{if(s.id!=='salMonthFilter'&&s.id!=='salDeptFilter')s.value='';});}
  rSalaries();
  toast('Filters cleared');
}

function markSalPaid(i){if(!requirePerm('canEdit','mark salary paid'))return;auditLog('action','Salary paid: '+D.salaries[i].name);D.salaries[i].status='Paid';buildTx();rSalaries();rTx();rDash();toast('Salary marked as Paid');}
function delSal(i){
  if(!requirePerm('canDelete','delete salary'))return;
  if(!confirm('Delete this salary record?'))return;
  const linkedTx=D.tx.find(t=>t.srcType==='salary'&&t.srcIdx===i);
  auditLog('action','Salary deleted: '+D.salaries[i].name);
  D.salaries.splice(i,1);
  buildTx();rSalaries();rDash();
  if(linkedTx)auditLog('action','Transaction voided: '+linkedTx.id+' (Rs '+fmt(linkedTx.amt)+') — removed as linked salary record was deleted');
  toast('Salary record deleted');
}

/* ── Improvement 4: Sync salary record from current employee data ─── */
function syncSalFromEmp(idx){
  if(!requirePerm('canEdit','sync salary'))return;
  const s=D.salaries[idx];
  const emp=D.employees.find(e=>e.name===s.name||(s.empId&&e.id===s.empId));
  if(!emp){toast('Employee record not found — update manually');return;}
  const changes=[];
  if(s.basic!==emp.salary)changes.push(`Basic: Rs ${fmt(s.basic)} → Rs ${fmt(emp.salary)}`);
  if(s.allow!==emp.allow)changes.push(`Allow: Rs ${fmt(s.allow)} → Rs ${fmt(emp.allow)}`);
  if(s.desig!==emp.desig)changes.push(`Designation: "${s.desig}" → "${emp.desig}"`);
  if(!changes.length){toast('✅ Already in sync — no changes needed');return;}
  if(!confirm('The following salary fields will be updated:\n'+changes.join('\n')+'\n\nProceed?'))return;
  D.salaries[idx].basic=emp.salary;
  D.salaries[idx].allow=emp.allow;
  D.salaries[idx].desig=emp.desig;
  D.salaries[idx].dept=emp.dept;
  D.salaries[idx].empId=emp.id;
  auditLog('action','Salary synced from employee: '+emp.name);
  buildTx();rSalaries();rDash();
  toast('✅ Sync complete: '+changes.length+' field(s) updated');
}

/* ── Improvement 3: Bulk Process with month select ───────────────── */
function openProcessAllModal(){
  if(!requirePerm('canEdit','bulk process salaries'))return;
  const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
  const existing=[...new Set(D.salaries.map(s=>s.month).filter(Boolean))].sort(salMonthSort);
  const sel=$('bpMonth');
  if(sel){
    sel.innerHTML='<option value="">-- Select Month --</option>';
    // Add months that have pending salaries first
    const withPending=[...new Set(D.salaries.filter(s=>s.status==='Pending').map(s=>s.month))];
    if(withPending.length){
      sel.innerHTML+='<optgroup label="Pending salaries hain">';
      withPending.sort(salMonthSort).forEach(m=>sel.innerHTML+=`<option value="${m}">${m} (${D.salaries.filter(s=>s.month===m&&s.status==='Pending').length} pending)</option>`);
      sel.innerHTML+='</optgroup>';
    }
    const others=existing.filter(m=>!withPending.includes(m));
    if(others.length){
      sel.innerHTML+='<optgroup label="All months">';
      others.forEach(m=>sel.innerHTML+=`<option value="${m}">${m}</option>`);
      sel.innerHTML+='</optgroup>';
    }
    // Pre-select current filter month if any
    if(SLF.month)sel.value=SLF.month;
  }
  refreshBulkPreview();
  showMo('bulkProcess');
}

function refreshBulkPreview(){
  const month=($('bpMonth')||{}).value;
  const pre=$('bpPreview');const btn=$('bpConfirmBtn');
  if(!pre)return;
  if(!month){pre.innerHTML='<div style="text-align:center;padding:16px;color:var(--s4);font-size:13px">Please select a month</div>';if(btn){btn.disabled=true;btn.textContent='Process';}return;}
  const pending=D.salaries.filter(s=>s.month===month&&s.status==='Pending');
  const already=D.salaries.filter(s=>s.month===month&&s.status==='Paid');
  const totalAmt=pending.reduce((a,s)=>a+netPay(s),0);
  pre.innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
      <div style="background:#fef3c7;border-radius:8px;padding:10px 12px;text-align:center">
        <div style="font-size:10px;color:#92400e;font-weight:700;text-transform:uppercase">Process Honge</div>
        <div style="font-size:22px;font-weight:900;color:#78350f">${pending.length}</div>
      </div>
      <div style="background:#f0fdf4;border-radius:8px;padding:10px 12px;text-align:center">
        <div style="font-size:10px;color:#15803d;font-weight:700;text-transform:uppercase">Already Paid</div>
        <div style="font-size:22px;font-weight:900;color:#0d3b1e">${already.length}</div>
      </div>
    </div>
    ${pending.length>0?`
    <div style="background:var(--s1);border-radius:8px;padding:10px 12px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:13px;font-weight:600">Total Amount to Process</span>
      <span style="font-size:15px;font-weight:800;color:var(--g7)">Rs ${fmt(totalAmt)}</span>
    </div>
    <div style="border:1px solid var(--s2);border-radius:8px;overflow:hidden;max-height:160px;overflow-y:auto">
      ${pending.map(s=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 12px;border-bottom:1px solid var(--s1);font-size:12px">
        <span><strong>${s.name}</strong> · ${s.desig}</span>
        <span style="font-weight:700;color:var(--g7)">Rs ${fmt(netPay(s))}</span>
      </div>`).join('')}
    </div>`:`<div style="background:#f0fdf4;border:1px solid var(--g1);border-radius:8px;padding:12px;text-align:center;font-size:13px;color:var(--g7)">✅ No pending salaries for ${month}</div>`}
  `;
  if(btn){btn.disabled=pending.length===0;btn.textContent=pending.length>0?`✅ Process ${pending.length} Salaries`:'No pending salaries';}
}

function confirmBulkProcess(){
  if(!requirePerm('canEdit','bulk process salaries'))return;
  const month=($('bpMonth')||{}).value;
  if(!month){toast('Please select a month');return;}
  const pending=D.salaries.filter(s=>s.month===month&&s.status==='Pending');
  if(!pending.length){toast('No pending salaries found');return;}
  pending.forEach(s=>s.status='Paid');
  auditLog('action',`Bulk processed ${pending.length} salaries for ${month}`);
  buildTx();rSalaries();rTx();rDash();
  closeMo('bulkProcess');
  toast(`✅ ${pending.length} salaries processed for ${month}!`);
}

function processAll(){if(!requirePerm('canEdit','process all salaries'))return;openProcessAllModal();}

function openAutoGenSal(){
  // populate month dropdown — current + next 3 months
  const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
  const now=new Date();
  const sel=$('agMonth');
  if(sel){
    sel.innerHTML='';
    for(let i=0;i<12;i++){
      const d=new Date(now.getFullYear(),now.getMonth()+i,1);
      const label=months[d.getMonth()]+' '+d.getFullYear();
      sel.innerHTML+=`<option value="${label}">${label}</option>`;
    }
  }
  refreshAutoGenPreview();
  showMo('autoGenSal');
}

function refreshAutoGenPreview(){
  const month=($('agMonth')||{}).value;
  if(!month){$('agPreview').innerHTML='';return;}
  const active=D.employees.filter(e=>e.status==='Active');
  const existing=D.salaries.filter(s=>s.month===month).map(s=>s.name);
  const toGen=active.filter(e=>!existing.includes(e.name));
  const skipped=active.filter(e=>existing.includes(e.name));

  const totalNet=toGen.reduce((a,e)=>a+e.salary+e.allow,0);

  $('agPreview').innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:14px">
      <div style="background:#f0fdf4;border-radius:8px;padding:10px 12px;text-align:center">
        <div style="font-size:10px;color:#15803d;font-weight:700;text-transform:uppercase;letter-spacing:.5px">Generate Honge</div>
        <div style="font-size:22px;font-weight:900;color:#0d3b1e;margin-top:3px">${toGen.length}</div>
      </div>
      <div style="background:#fef2f2;border-radius:8px;padding:10px 12px;text-align:center">
        <div style="font-size:10px;color:#b91c1c;font-weight:700;text-transform:uppercase;letter-spacing:.5px">Skip (already hai)</div>
        <div style="font-size:22px;font-weight:900;color:#7f1d1d;margin-top:3px">${skipped.length}</div>
      </div>
      <div style="background:#eff6ff;border-radius:8px;padding:10px 12px;text-align:center">
        <div style="font-size:10px;color:#1d4ed8;font-weight:700;text-transform:uppercase;letter-spacing:.5px">Total Payroll</div>
        <div style="font-size:16px;font-weight:900;color:#1e3a8a;margin-top:3px">Rs ${fmt(totalNet)}</div>
      </div>
    </div>
    ${toGen.length===0?`<div style="background:#fef3c7;border:1px solid #fcd34d;border-radius:8px;padding:12px 14px;font-size:13px;color:#92400e;text-align:center">✅ Salary records for ${month} already exist for all employees.</div>`:`
    <div style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;max-height:200px;overflow-y:auto">
      <div style="padding:7px 12px;background:#f9fafb;font-size:10px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:.8px;border-bottom:1px solid #e5e7eb">Generate honge — ${month}</div>
      ${toGen.map(e=>{const net=e.salary+e.allow;return`
        <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border-bottom:1px solid #f3f4f6">
          <div>
            <div style="font-size:13px;font-weight:600">${e.name}</div>
            <div style="font-size:11px;color:#6b7280">${e.desig} · ${e.dept}</div>
          </div>
          <div style="text-align:right">
            <div style="font-size:13px;font-weight:700">Rs ${fmt(net)}</div>
            <div style="font-size:10px;color:#9ca3af">Basic: Rs ${fmt(e.salary)} + Allow: Rs ${fmt(e.allow)}</div>
          </div>
        </div>`}).join('')}
    </div>`}
    ${skipped.length>0?`<div style="margin-top:8px;padding:8px 12px;background:#f9fafb;border-radius:8px;font-size:12px;color:#6b7280">⏭ Skip hone wale: ${skipped.map(e=>e.name).join(', ')}</div>`:''}
  `;
  const btn=$('agConfirmBtn');
  if(btn)btn.disabled=toGen.length===0;
  if(btn)btn.textContent=toGen.length>0?`⚡ ${toGen.length} Employees ki Salary Generate Karein`:'Sab already exist karte hain';
}

function confirmAutoGen(){
  if(!requirePerm('canEdit','auto generate salaries'))return;
  const month=($('agMonth')||{}).value;
  const method=($('agMethod')||{}).value||'Bank Transfer';
  const status=($('agStatus')||{}).value||'Pending';
  if(!month){toast('Please select a month');return;}
  const active=D.employees.filter(e=>e.status==='Active');
  const existing=D.salaries.filter(s=>s.month===month).map(s=>s.name);
  const toGen=active.filter(e=>!existing.includes(e.name));
  if(toGen.length===0){toast('Sab already exist karte hain!');return;}
  toGen.forEach(e=>{
    D.salaries.push({
      salId:genSalId(),
      empId:e.id||'',
      name:e.name,desig:e.desig,
      dept:e.dept||'',
      basic:e.salary,allow:e.allow,deduct:0,
      month,method,status
    });
  });
  auditLog('action',`Auto-generated ${toGen.length} salary records for ${month}`);
  buildTx();rSalaries();rTx();rDash();
  closeMo('autoGenSal');
  toast(`✅ ${toGen.length} employees ki ${month} salary generate ho gayi!`);
}

function getCurrentMonthLabel(){
  const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d=new Date();
  return months[d.getMonth()]+" "+d.getFullYear();
}

function genSalId(){
  const mx=D.salaries.reduce((m,s)=>{const n=s.salId?parseInt((s.salId.split('-')[2])||0):0;return n>m?n:m;},0);
  const yr=new Date().getFullYear();
  return'SAL-'+yr+'-'+String(mx+1).padStart(3,'0');
}

function fillSalEmpDropdown(selectedName){
  const sel=$('sln-sel');if(!sel)return;
  sel.innerHTML='<option value="">-- Select Employee --</option>'+D.employees.map(e=>`<option value="${e.name}" data-desig="${e.desig}" data-basic="${e.salary}" data-allow="${e.allow}">${e.name} (${e.desig})</option>`).join('');
  if(selectedName)sel.value=selectedName;
}

function salEmpSelected(name){
  if(!name)return;
  const opt=Array.from($('sln-sel').options).find(o=>o.value===name);
  if(opt){
    $('sld').value=opt.dataset.desig||'';
    $('slb').value=opt.dataset.basic||80000;
    $('sla').value=opt.dataset.allow||15000;
  }
}

function openAddSal(){
  fillSalEmpDropdown();
  $('salEditIdx').value=-1;
  $('salMoTitle').textContent='💰 Process Salary';
  $('salIdPrev').textContent=genSalId();
  $('sln-sel').value='';$('sld').value='';
  $('slb').value='80000';$('sla').value='15000';$('sld2').value='0';
  $('slm').value=getCurrentMonthLabel();$('slst').value='Paid';
  showMo('addSal');
}

function openEditSal(idx){
  const s=D.salaries[idx];
  fillSalEmpDropdown(s.name);
  $('salEditIdx').value=idx;
  $('salMoTitle').textContent='✏️ Edit Salary Record';
  $('salIdPrev').textContent=s.salId||'-';
  $('sld').value=s.desig||'';
  $('slb').value=s.basic||0;$('sla').value=s.allow||0;$('sld2').value=s.deduct||0;
  $('slm').value=s.month||'';$('slst').value=s.status||'Paid';
  showMo('addSal');
}

function viewSal(idx){
  const s=D.salaries[idx];
  const net=netPay(s);
  $('vSalName').textContent=s.name;
  $('vSalBody').innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:12px">
      <div style="background:var(--s1);border-radius:8px;padding:10px 12px"><div style="font-size:10px;color:var(--s4);text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Salary ID</div><code class="id-tag">${s.salId||'-'}</code></div>
      <div style="background:var(--s1);border-radius:8px;padding:10px 12px"><div style="font-size:10px;color:var(--s4);text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Month</div><strong>${s.month}</strong></div>
      <div style="background:var(--s1);border-radius:8px;padding:10px 12px"><div style="font-size:10px;color:var(--s4);text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Employee ID</div><code class="id-tag">${s.empId||'-'}</code></div>
      <div style="background:var(--s1);border-radius:8px;padding:10px 12px"><div style="font-size:10px;color:var(--s4);text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Designation</div>${s.desig}</div>
      <div style="background:var(--s1);border-radius:8px;padding:10px 12px"><div style="font-size:10px;color:var(--s4);text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Department</div>${s.dept||'-'}</div>
      <div style="background:var(--s1);border-radius:8px;padding:10px 12px"><div style="font-size:10px;color:var(--s4);text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px">Status</div>${bdg(s.status)}</div>
    </div>
    <div style="background:var(--s1);border-radius:8px;padding:12px 14px">
      <div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid var(--s2)"><span style="color:var(--s4)">Basic Salary</span><strong>Rs ${fmt(s.basic)}</strong></div>
      <div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid var(--s2)"><span style="color:var(--s4)">Allowances</span><strong>Rs ${fmt(s.allow)}</strong></div>
      <div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid var(--s2)"><span style="color:var(--rd)">Deductions</span><strong style="color:var(--rd)">- Rs ${fmt(s.deduct||0)}</strong></div>
      <div style="display:flex;justify-content:space-between;padding:8px 0;margin-top:4px"><span style="font-weight:700">Net Pay</span><strong style="font-size:16px;color:var(--g6)">Rs ${fmt(net)}</strong></div>
    </div>`;
  showMo('viewSal');
}

function saveSal(){
  if(!requirePerm('canEdit','save salary'))return;
  const editIdx=parseInt($('salEditIdx').value);
  const isEdit=editIdx>=0;
  const n=$('sln-sel').value.trim();
  if(!n){toast('Please select an employee');return;}
  // Also link employee's empId via name match
  const linkedEmp=D.employees.find(e=>e.name===n);
  const basicVal=parseInt($('slb').value)||60000;
  const allowVal=parseInt($('sla').value)||10000;
  const grossVal=basicVal+allowVal;
  let deductVal=parseInt($('sld2').value)||0;
  let deductCapped=false;
  if(deductVal>grossVal){deductVal=grossVal;deductCapped=true;}
  const s={
    salId: isEdit?(D.salaries[editIdx].salId||genSalId()):genSalId(),
    empId: linkedEmp?linkedEmp.id:'',   // ← Employee ID properly link
    name:n,
    desig:$('sld').value.trim()||'Staff',
    dept: linkedEmp?linkedEmp.dept:'',  // ← Also store department
    basic:basicVal,
    allow:allowVal,
    deduct:deductVal,
    month:$('slm').value||getCurrentMonthLabel(),
    method:$('slmt')?$('slmt').value:'Bank Transfer',
    status:$('slst').value||'Paid'
  };
  if(deductCapped)toast('⚠️ Deduction exceeded gross salary — capped at Rs '+fmt(grossVal)+' (net pay set to Rs 0)');
  if(isEdit){D.salaries[editIdx]=s;auditLog('action','Salary updated: '+n+' ('+s.salId+')');toast('Salary record updated!');}
  else{D.salaries.push(s);auditLog('action','Salary added: '+n+' ('+s.salId+')');toast('Salary processed! ID: '+s.salId);}
  buildTx();rSalaries();rTx();rDash();closeMo('addSal');
}

function printSalSlip(idx){
  const s=D.salaries[idx];
  const net=netPay(s);
  const gross=s.basic+s.allow;
  const emp=D.employees.find(e=>e.name===s.name||(s.empId&&e.id===s.empId))||{};
  const initials=s.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  const instInitials=getInstInitials();
  const logoBadge=getLogoBadgeInner();
  const css=`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:'Inter',Arial,sans-serif;background:#f1f5f9;min-height:100vh;display:flex;align-items:flex-start;justify-content:center;padding:28px 16px;}
.slip{width:100%;max-width:600px;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,.12);}
.hdr{background:linear-gradient(135deg,#0d3b1e 0%,#1a6636 60%,#20954a 100%);padding:24px 28px 20px;position:relative;overflow:hidden;}
.hdr::before{content:attr(data-wm);position:absolute;right:-8px;top:-14px;font-size:96px;font-weight:900;color:rgba(255,255,255,.04);line-height:1;font-family:Georgia,serif;}
.hdr-top{display:flex;align-items:center;gap:14px;margin-bottom:18px;}
.logo{width:48px;height:48px;background:rgba(255,255,255,.15);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;color:#c9a227;font-family:Georgia,serif;border:2px solid rgba(255,255,255,.2);}
.org h1{font-size:17px;font-weight:800;color:#fff;}
.org p{font-size:10px;color:rgba(255,255,255,.5);letter-spacing:2px;text-transform:uppercase;margin-top:2px;}
.slip-badge{margin-left:auto;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);color:#fff;font-size:9px;font-weight:800;letter-spacing:1.5px;padding:5px 12px;border-radius:50px;text-transform:uppercase;white-space:nowrap;}
.emp-row{display:flex;align-items:center;gap:14px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);border-radius:10px;padding:12px 16px;}
.av{width:42px;height:42px;border-radius:50%;background:rgba(201,162,39,.25);border:2px solid #c9a227;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:800;color:#c9a227;flex-shrink:0;}
.emp-info{flex:1;}
.emp-info .name{font-size:15px;font-weight:800;color:#fff;}
.emp-info .desig{font-size:11px;color:rgba(255,255,255,.55);margin-top:2px;}
.emp-meta{text-align:right;}
.emp-meta .eid{font-size:10px;color:rgba(255,255,255,.4);margin-bottom:2px;}
.emp-meta .month{font-size:12px;font-weight:700;color:#c9a227;}
.body{padding:22px 28px;}
.info-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:0;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;margin-bottom:18px;}
.ic{padding:10px 12px;border-right:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;}
.ic:nth-child(3n){border-right:none;}
.ic:nth-last-child(-n+3){border-bottom:none;}
.ic-l{font-size:9px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:#9ca3af;margin-bottom:2px;}
.ic-v{font-size:12.5px;font-weight:700;color:#111827;}
.sec-div{display:flex;align-items:center;gap:10px;margin:0 0 12px;}
.sec-div .line{flex:1;height:1px;background:#e5e7eb;}
.sec-div .lbl{font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#6b7280;white-space:nowrap;}
.earn-ded{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;}
.box{border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;}
.box-hdr{padding:8px 12px;font-size:10px;font-weight:800;letter-spacing:1px;text-transform:uppercase;}
.box-hdr.earn{background:#f0fdf4;color:#15803d;}
.box-hdr.ded{background:#fef2f2;color:#b91c1c;}
.box-row{display:flex;justify-content:space-between;padding:7px 12px;font-size:12px;border-top:1px solid #f3f4f6;}
.box-row .k{color:#6b7280;}
.box-row .v{font-weight:600;color:#111827;}
.box-total{display:flex;justify-content:space-between;padding:8px 12px;font-size:12.5px;font-weight:800;border-top:1px solid #e5e7eb;background:#f9fafb;}
.net-band{background:linear-gradient(135deg,#0d3b1e,#1a6636);border-radius:12px;padding:16px 20px;display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;}
.nb-l .lbl{font-size:10px;color:rgba(255,255,255,.55);text-transform:uppercase;letter-spacing:1px;margin-bottom:3px;}
.nb-l .amt{font-size:30px;font-weight:900;color:#fff;line-height:1;}
.nb-l .amt span{font-size:15px;font-weight:600;opacity:.65;margin-right:3px;}
.nb-l .words{font-size:10px;color:rgba(255,255,255,.4);font-style:italic;margin-top:4px;}
.nb-r{text-align:right;}
.net-status{background:#22c55e;color:#fff;font-size:9px;font-weight:800;letter-spacing:1.5px;padding:4px 12px;border-radius:50px;display:inline-block;margin-bottom:6px;}
.nb-id{font-size:10px;color:rgba(255,255,255,.4);font-family:'Courier New',monospace;}
.ftr{background:#f9fafb;border-top:1px solid #e5e7eb;padding:12px 28px;display:flex;align-items:center;justify-content:space-between;}
.ftr p{font-size:10px;color:#9ca3af;}
@media print{body{background:#fff;padding:0;}.slip{border-radius:0;box-shadow:none;}.no-print{display:none!important;}}
`;
  const h='<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Salary Slip — '+s.name+' — '+s.month+'</title><style>'+css+'</style></head><body>'
  +'<div class="slip">'
  +'<div class="hdr" data-wm="'+instInitials+'">'
  +'<div class="hdr-top"><div class="logo">'+logoBadge+'</div><div class="org"><h1>'+D.settings.instName+'</h1><p>Finance &amp; Accounts Dept</p></div><div class="slip-badge">Salary Slip</div></div>'
  +'<div class="emp-row"><div class="av">'+initials+'</div><div class="emp-info"><div class="name">'+s.name+'</div><div class="desig">'+s.desig+(emp.dept?' &nbsp;·&nbsp; '+emp.dept:'')+'</div></div><div class="emp-meta"><div class="eid">'+(emp.id||s.salId||'—')+'</div><div class="month">'+s.month+'</div></div></div>'
  +'</div>'
  +'<div class="body">'
  +'<div class="info-grid">'
  +'<div class="ic"><div class="ic-l">Salary ID</div><div class="ic-v" style="font-family:\'Courier New\',monospace;font-size:11px">'+(s.salId||'—')+'</div></div>'
  +'<div class="ic"><div class="ic-l">Department</div><div class="ic-v">'+(emp.dept||'—')+'</div></div>'
  +'<div class="ic"><div class="ic-l">Pay Month</div><div class="ic-v">'+s.month+'</div></div>'
  +'<div class="ic"><div class="ic-l">Pay Method</div><div class="ic-v">'+(s.method||'Bank Transfer')+'</div></div>'
  +'<div class="ic"><div class="ic-l">Contact</div><div class="ic-v" style="font-size:11px">'+(emp.contact||'—')+'</div></div>'
  +'<div class="ic"><div class="ic-l">Status</div><div class="ic-v" style="color:'+(s.status==='Paid'?'#16a34a':'#d97706')+'">'+(s.status==='Paid'?'✔ Paid':'⏳ Pending')+'</div></div>'
  +'</div>'
  +'<div class="sec-div"><div class="line"></div><div class="lbl">Earnings &amp; Deductions</div><div class="line"></div></div>'
  +'<div class="earn-ded">'
  +'<div class="box"><div class="box-hdr earn">Earnings</div>'
  +'<div class="box-row"><div class="k">Basic Salary</div><div class="v">Rs '+s.basic.toLocaleString()+'</div></div>'
  +'<div class="box-row"><div class="k">Allowances</div><div class="v">Rs '+s.allow.toLocaleString()+'</div></div>'
  +'<div class="box-total"><div>Gross Pay</div><div>Rs '+gross.toLocaleString()+'</div></div>'
  +'</div>'
  +'<div class="box"><div class="box-hdr ded">Deductions</div>'
  +(s.deduct?'<div class="box-row"><div class="k">Deductions</div><div class="v" style="color:#ef4444">- Rs '+s.deduct.toLocaleString()+'</div></div>':'<div class="box-row"><div class="k">No deductions</div><div class="v">Rs 0</div></div>')
  +'<div class="box-total"><div>Total Deductions</div><div style="color:#ef4444">Rs '+(s.deduct||0).toLocaleString()+'</div></div>'
  +'</div>'
  +'</div>'
  +'<div class="net-band"><div class="nb-l"><div class="lbl">Net Pay</div><div class="amt"><span>Rs</span>'+net.toLocaleString()+'</div><div class="words">'+amountInWords(net)+'</div></div>'
  +'<div class="nb-r"><div class="net-status">✔ '+s.status+'</div><div class="nb-id">'+(s.salId||'')+'</div></div>'
  +'</div>'
  +'</div>'
  +'<div class="ftr"><p>Generated: '+new Date().toLocaleString()+'</p><div class="no-print"><button onclick="window.print()" style="padding:7px 18px;background:#0d3b1e;color:#fff;border:none;border-radius:8px;cursor:pointer;font-family:inherit;font-size:12px;font-weight:600">🖨️ Print</button></div></div>'
  +'</div></body></html>';
  showPrintPreview(h,'Salary Slip - '+s.name);
}

function printSalaries(){
  const rows=D.salaries.map(s=>[s.name,s.desig,'Rs '+s.basic.toLocaleString(),'Rs '+s.allow.toLocaleString(),'Rs '+(netPay(s)).toLocaleString(),s.month,s.status]);
  const thead='<th>Name</th><th>Designation</th><th>Basic</th><th>Allowance</th><th>Net Pay</th><th>Month</th><th>Status</th>';
  const body=rows.map(r=>'<tr>'+r.map(c=>'<td>'+c+'</td>').join('')+'</tr>').join('');
  const h='<html><head><meta charset="UTF-8"><style>*{box-sizing:border-box;}body{font-family:Arial,sans-serif;padding:22px;}h2{color:#1a6636;font-size:18px;margin-bottom:6px;}.inf{font-size:12px;color:#666;margin-bottom:12px;}table{width:100%;border-collapse:collapse;}th{background:#1a6636;color:#fff;padding:7px 9px;text-align:left;font-size:11px;}td{padding:7px 9px;border-bottom:1px solid #e0e0e0;font-size:12px;}tr:nth-child(even)td{background:#f5faf6;}@media print{.np{display:none;}}</style></head><body><h2>'+D.settings.instName+' - Salary Records</h2><div class="inf">Generated: '+new Date().toLocaleString()+' | Total: '+D.salaries.length+'</div><table><thead><tr>'+thead+'</tr></thead><tbody>'+body+'</tbody></table><div class="np" style="margin-top:12px"><button onclick="window.print()" style="padding:7px 16px;background:#1a6636;color:#fff;border:none;border-radius:6px;cursor:pointer;">Print</button></div></body></html>';
  showPrintPreview(h,'Salary Records');
}

/* ══════════════════════════════════════════════════
   EXPENSES — FULLY DYNAMIC
══════════════════════════════════════════════════ */

// Helper: get category meta by name
function _getCat(name){
  return D.expCategories.find(c=>c.name===name)||{name,icon:'📌',color:'#6b7280',budget:0};
}

// Populate all category dropdowns from D.expCategories
function _syncCatDropdowns(){
  const opts = D.expCategories.map(c=>`<option value="${c.name}">${c.icon} ${c.name}</option>`).join('');
  ['xc','ex-filter-cat'].forEach(id=>{
    const el=$(id); if(!el) return;
    const cur = el.value;
    if(id==='ex-filter-cat') el.innerHTML='<option value="">All Categories</option>'+opts;
    else el.innerHTML = opts;
    if([...el.options].some(o=>o.value===cur)) el.value=cur;
  });
}

function rExpenses(){
  _syncCatDropdowns();

  // Filter by active year
  const exps = activeExpenses();

  // Build cats totals from actual expenses
  const cats={};
  exps.forEach(e=>{ cats[e.cat]=(cats[e.cat]||0)+e.amt; });
  const tot = exps.reduce((a,b)=>a+b.amt,0);

  // ── Dynamic stat cards: Total + top 3 by spend ──
  const topCats = [...D.expCategories]
    .filter(c=>cats[c.name])
    .sort((a,b)=>(cats[b.name]||0)-(cats[a.name]||0))
    .slice(0,3);

  const statEl=$('ex-stat-cards');
  if(statEl){
    statEl.innerHTML=`<div class="sc"><div class="sc-ico ir">📁</div><div class="sc-val" id="ex-t">${fmt(tot)}</div><div class="sc-lbl">Total Expenses (Rs)</div></div>`
    +topCats.map(c=>`
      <div class="sc">
        <div class="sc-ico" style="background:${c.color}22">${c.icon}</div>
        <div class="sc-val">Rs ${fmt(cats[c.name]||0)}</div>
        <div class="sc-lbl">${c.name}</div>
        <div class="sc-ch" style="color:${cats[c.name]>c.budget?'var(--rd)':'var(--g6)'}">
          ${c.budget?`Budget: Rs ${fmt(c.budget)}`:'No budget set'}
        </div>
      </div>`).join('');
  } else {
    const t=$('ex-t'); if(t) t.textContent=fmt(tot);
  }

  // ── Budget vs Actual panel ──
  const bvaEl=$('ex-bva-rows');
  const bvaLbl=$('ex-bva-lbl');
  if(bvaEl){
    const totalBudget=D.expCategories.reduce((a,c)=>a+c.budget,0);
    if(bvaLbl) bvaLbl.textContent=`Total Budget: Rs ${fmt(totalBudget)} · Spent: Rs ${fmt(tot)}`;
    bvaEl.innerHTML=D.expCategories.map(c=>{
      const spent=cats[c.name]||0;
      const budget=c.budget||0;
      const pct=budget?Math.min(Math.round((spent/budget)*100),100):0;
      const over=budget&&spent>budget;
      const barColor=over?'#ef4444':c.color;
      return`<div style="margin-bottom:14px">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;flex-wrap:wrap;gap:4px">
          <span style="font-size:13px;font-weight:600;color:var(--s6)">${c.icon} ${c.name}</span>
          <span style="font-size:12px;font-weight:700;color:${over?'#b91c1c':'var(--s5)'}">
            Rs ${fmt(spent)} <span style="font-weight:400;color:var(--s4)">/ Rs ${fmt(budget)||'—'}</span>
            ${over?`<span style="background:#fee2e2;color:#b91c1c;font-size:10px;padding:1px 7px;border-radius:50px;margin-left:4px">Over by Rs ${fmt(spent-budget)}</span>`:''}
            ${budget&&!over?`<span style="color:var(--g6);font-size:10px;margin-left:4px">Rs ${fmt(budget-spent)} left</span>`:''}
          </span>
        </div>
        <div class="pbar" style="height:7px">
          <div class="pbar-f" style="width:${pct}%;background:${barColor}"></div>
        </div>
        ${budget?`<div style="font-size:10px;color:var(--s4);margin-top:2px">${pct}% utilized</div>`:'<div style="font-size:10px;color:var(--s4);margin-top:2px">No budget set — click Categories to add</div>'}
      </div>`;
    }).join('');
  }

  // ── Category progress bars (breakdown card) ──
  $('expCat').innerHTML=D.expCategories.filter(c=>cats[c.name]).map(c=>{
    const v=cats[c.name]||0;
    return`<div class="bp">
      <div class="bp-h">
        <span class="bp-n">${c.icon} ${c.name}</span>
        <span class="bp-p">Rs ${fmt(v)} <span style="color:var(--s4);font-weight:400">(${tot?Math.round((v/tot)*100):0}%)</span></span>
      </div>
      <div class="pbar"><div class="pbar-f" style="width:${tot?Math.round((v/tot)*100):0}%;background:${c.color}"></div></div>
    </div>`;
  }).join('');

  // ── Donut chart ──
  const chartCats=D.expCategories.filter(c=>cats[c.name]);
  mkChart('ch-exp','doughnut',{
    labels:chartCats.map(c=>c.icon+' '+c.name),
    datasets:[{data:chartCats.map(c=>cats[c.name]||0),backgroundColor:chartCats.map(c=>c.color),borderWidth:2,borderColor:'#fff'}]
  },{plugins:{legend:{position:'bottom',labels:{font:{size:11},padding:10}}}});

  // ── Monthly trend ──
  _rExpTrend();

  // ── Month filter dropdown — from active year only ──
  const months=[...new Set(activeExpenses().map(e=>e.date?e.date.slice(0,7):null).filter(Boolean))].sort().reverse();
  const mSel=$('ex-filter-month');
  if(mSel){
    const cur=mSel.value;
    mSel.innerHTML='<option value="">All Months</option>'+months.map(m=>`<option value="${m}"${m===cur?' selected':''}>${_monthLabel(m)}</option>`).join('');
  }

  fExp();
}

function openCatMgr(){
  _renderCatList();
  showMo('catMgr');
}

function switchExpTab(tab){} // kept for compatibility

function _renderCatList(){
  const el=$('cat-list'); if(!el)return;
  el.innerHTML=D.expCategories.map((c,i)=>`
    <div style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:9px;border:1.5px solid var(--s2);margin-bottom:6px;background:#fff">
      <span style="font-size:20px;width:28px;text-align:center">${c.icon}</span>
      <span style="flex:1;font-size:13px;font-weight:600;color:var(--s6)">${c.name}</span>
      <button onclick="delExpCat(${i})" class="btn btn-red" style="padding:4px 10px;font-size:12px">🗑</button>
    </div>`).join('');
}

function addExpCat(){
  const name=($('nc-name')||{}).value.trim();
  const icon=($('nc-icon')||{}).value.trim()||'📌';
  if(!name){toast('Please enter a category name');return;}
  if(D.expCategories.find(c=>c.name===name)){toast('Ye category already exist karti hai');return;}
  const colors=['#10b981','#f59e0b','#3b82f6','#ef4444','#8b5cf6','#06b6d4','#ec4899','#f97316'];
  D.expCategories.push({name,icon,color:colors[D.expCategories.length%colors.length],budget:0});
  $('nc-name').value='';$('nc-icon').value='';
  _renderCatList();
  _syncCatDropdowns();
  rExpenses();
  toast('✅ '+name+' added');
}

function delExpCat(i){
  const cat=D.expCategories[i];
  const inUse=D.expenses.some(e=>e.cat===cat.name);
  if(inUse){toast('⚠️ '+cat.name+' is used in '+D.expenses.filter(e=>e.cat===cat.name).length+' expense(s) — remove those first');return;}
  if(!confirm('Delete: '+cat.name+'?'))return;
  D.expCategories.splice(i,1);
  _renderCatList();
  _syncCatDropdowns();
  rExpenses();
  toast('Category deleted');
}

function _monthLabel(ym){
  if(!ym)return'';
  const [y,m]=ym.split('-');
  const names=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return(names[parseInt(m)-1]||m)+' '+y;
}

function _rExpTrend(){
  // Build last 6 months labels
  const now=new Date();
  const labels=[];const keys=[];
  for(let i=5;i>=0;i--){
    const d=new Date(now.getFullYear(),now.getMonth()-i,1);
    const key=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0');
    keys.push(key);
    labels.push(_monthLabel(key));
  }
  const data=keys.map(k=>activeExpenses().filter(e=>e.date&&e.date.startsWith(k)).reduce((a,b)=>a+b.amt,0));
  if($('ex-trend-lbl'))$('ex-trend-lbl').textContent='Last 6 months · Total Rs '+fmt(data.reduce((a,b)=>a+b,0));
  mkChart('ch-exp-trend','bar',{
    labels,
    datasets:[{
      label:'Expenses (Rs)',data,
      backgroundColor:'rgba(239,68,68,.18)',
      borderColor:'#ef4444',borderWidth:2,
      borderRadius:6,borderSkipped:false,
      tension:.4
    }]
  },{
    plugins:{legend:{display:false}},
    scales:{y:{ticks:{callback:v=>'Rs '+fmt(v)},grid:{color:'rgba(0,0,0,.04)'}},x:{grid:{display:false}}}
  });
}

function fExp(){
  const q=($('ex-search')||{value:''}).value.toLowerCase();
  const cat=($('ex-filter-cat')||{value:''}).value;
  const month=($('ex-filter-month')||{value:''}).value;
  const status=($('ex-filter-status')||{value:''}).value;

  const filtered=activeExpenses().filter((e,_i)=>{
    if(q&&!((e.desc||'').toLowerCase().includes(q))&&!((e.vendor||'').toLowerCase().includes(q)))return false;
    if(cat&&e.cat!==cat)return false;
    if(month&&!(e.date||'').startsWith(month))return false;
    if(status&&e.status!==status)return false;
    return true;
  });

  const cnt=$('ex-filter-count');
  const allActive=activeExpenses();
  if(cnt)cnt.textContent=filtered.length<allActive.length?`Showing ${filtered.length} of ${allActive.length} (${D.activeYear})`:'';

  $('expTB').innerHTML=filtered.length?filtered.map((e,_i)=>{
    const realIdx=D.expenses.indexOf(e);
    return`<tr>
      <td><strong>${e.desc}</strong></td>
      <td style="color:var(--s5)">${e.vendor||'<span style="color:var(--s3)">—</span>'}</td>
      <td>${e.cat}</td>
      <td><strong>Rs ${fmt(e.amt)}</strong></td>
      <td>${e.date||'—'}</td>
      <td>${e.approver||'—'}</td>
      <td>${bdg(e.status)}</td>
      <td><button onclick="delExp(${realIdx})" class="btn btn-red" style="${bs}">🗑</button></td>
    </tr>`;
  }).join(''):`<tr><td colspan="8" style="text-align:center;padding:28px;color:var(--s4)">No records found</td></tr>`;
}

function delExp(i){
  if(!requirePerm('canEdit','delete expense'))return;
  if(confirm('Delete: '+D.expenses[i].desc+'?')){
    const linkedTx=D.tx.find(t=>t.srcType==='expense'&&t.srcIdx===i);
    auditLog('action','Expense deleted: '+D.expenses[i].desc);
    D.expenses.splice(i,1);
    buildTx();rExpenses();rTx();rDash();
    if(linkedTx)auditLog('action','Transaction voided: '+linkedTx.id+' (Rs '+fmt(linkedTx.amt)+') — removed as linked expense record was deleted');
    toast('Expense deleted');
  }
}

function saveExp(){
  if(!requirePerm('canEdit','save expense'))return;
  const d=$('xd').value.trim();const a=$('xa').value.trim();
  if(!d||!a){toast('Description and Amount are required');return;}
  D.expenses.push({
    desc:d,
    cat:$('xc').value,
    amt:parseInt(a)||5000,
    date:todayStr(),
    year:D.activeYear,
    vendor:($('xv')||{value:''}).value.trim()||'',
    approver:$('xp').value.trim()||'Admin',
    status:($('xs')||{value:'Approved'}).value||'Approved'
  });
  auditLog('action','Expense added: '+d+' ('+D.activeYear+')');
  buildTx();rExpenses();rTx();rDash();closeMo('addExp');toast('✅ Expense added!');
  ['xd','xp','xv'].forEach(id=>{const el=$(id);if(el)el.value='';});
}

function printExpenses(){
  const rows=activeExpenses().map(e=>[e.desc,e.vendor||'—',e.cat,'Rs '+e.amt.toLocaleString(),e.date||'—',e.approver||'—',e.status]);
  const thead='<th>Description</th><th>Vendor</th><th>Category</th><th>Amount</th><th>Date</th><th>Approved By</th><th>Status</th>';
  const body=rows.map(r=>'<tr>'+r.map(c=>'<td>'+c+'</td>').join('')+'</tr>').join('');
  const exp=activeExpenses();
  const h='<html><head><meta charset="UTF-8"><style>*{box-sizing:border-box;}body{font-family:Arial,sans-serif;padding:22px;}h2{color:#1a6636;font-size:18px;margin-bottom:6px;}.inf{font-size:12px;color:#666;margin-bottom:12px;}table{width:100%;border-collapse:collapse;}th{background:#1a6636;color:#fff;padding:7px 9px;text-align:left;font-size:11px;}td{padding:7px 9px;border-bottom:1px solid #e0e0e0;font-size:12px;}tr:nth-child(even)td{background:#f5faf6;}@media print{.np{display:none;}}</style></head><body><h2>'+D.settings.instName+' - Expense Records ('+D.activeYear+')</h2><div class="inf">Generated: '+new Date().toLocaleString()+' | Total: '+exp.length+' | Grand Total: Rs '+exp.reduce((a,b)=>a+b.amt,0).toLocaleString()+'</div><table><thead><tr>'+thead+'</tr></thead><tbody>'+body+'</tbody></table><div class="np" style="margin-top:12px"><button onclick="window.print()" style="padding:7px 16px;background:#1a6636;color:#fff;border:none;border-radius:6px;cursor:pointer;">Print</button></div></body></html>';
  showPrintPreview(h,'Expense Records — '+D.activeYear);
}

/* ══════════════════════════════════════════════════
   BUDGET — AUTO-SYNC + ALERTS + YEAR FILTER
══════════════════════════════════════════════════ */

function autoSyncBudget(){
  activeBudget().forEach(b=>{
    // Always reset first — even if no cats linked, spent should be 0
    b.spent = (b.expCats && b.expCats.length>0)
      ? activeExpenses().filter(e=>b.expCats.includes(e.cat)).reduce((a,e)=>a+e.amt,0)
      : 0;
  });
  D._lastSync = new Date().toLocaleTimeString('en-PK',{hour:'2-digit',minute:'2-digit'});
  rBudget();
  toast('✅ Budget synced from expenses!');
  auditLog('action','Budget auto-synced for '+D.activeYear);
}

function copyBudgetToNextYear(){
  const cur=D.activeYear;
  const parts=cur.split('-');
  const nextYear=(parseInt(parts[0])+1)+'-'+(parseInt(parts[1])+1);
  if(!D.years.includes(nextYear)) D.years.push(nextYear);
  const alreadyExists=D.budget.some(b=>b.year===nextYear);
  if(alreadyExists){
    if(!confirm('Budget for '+nextYear+' already exists. Copy anyway?'))return;
  }
  const toCopy=activeBudget().map(b=>({...b,spent:0,year:nextYear}));
  D.budget.push(...toCopy);
  initYearSwitcher();
  setActiveYear(nextYear);
  toast('✅ '+toCopy.length+' departments copied to '+nextYear);
}

function rBudget(){
  const badge=$('bud-year-badge');
  if(badge) badge.textContent=D.activeYear;

  activeBudget().forEach(b=>{
    b.spent = (b.expCats && b.expCats.length>0)
      ? activeExpenses().filter(e=>b.expCats.includes(e.cat)).reduce((a,e)=>a+e.amt,0)
      : 0;
  });

  const budItems=activeBudget();
  const al=budItems.reduce((a,b)=>a+b.allocated,0);
  const sp=budItems.reduce((a,b)=>a+b.spent,0);
  const pct=al>0?Math.min(Math.round((sp/al)*100),100):0;

  $('b-al').textContent='\u20a8'+fmt(al);
  $('b-sp').textContent='\u20a8'+fmt(sp);
  $('b-rm').textContent='\u20a8'+fmt(al-sp);
  $('b-bar').style.width=pct+'%';
  $('b-bar').style.background=pct>=100?'#ef4444':pct>=85?'#f59e0b':'';
  $('b-pct').textContent=pct+'% of total budget utilized';
  if($('b-sync-time')) $('b-sync-time').textContent=D._lastSync?('Today '+D._lastSync):'Auto-synced on load';

  const over=budItems.filter(b=>b.allocated>0&&b.spent>b.allocated);
  const warn=budItems.filter(b=>b.allocated>0&&b.spent<=b.allocated&&(b.spent/b.allocated)>=0.85);
  const alertEl=$('b-alerts');
  if(alertEl){
    let html='';
    if(over.length){
      html+=`<div style="background:#fee2e2;border:1.5px solid #fca5a5;border-radius:12px;padding:14px 16px;display:flex;align-items:flex-start;gap:12px;margin-bottom:8px">
        <span style="font-size:20px;flex-shrink:0">\uD83D\uDEA8</span>
        <div><div style="font-size:13px;font-weight:800;color:#991b1b;margin-bottom:4px">${over.length} Department${over.length>1?'s':''} Over Budget!</div>
        <div style="font-size:12px;color:#b91c1c">${over.map(b=>`<strong>${b.dept}</strong> — \u20a8${fmt(b.spent-b.allocated)} over (${Math.round((b.spent/b.allocated)*100)}%)`).join(' &middot; ')}</div></div>
      </div>`;
    }
    if(warn.length){
      html+=`<div style="background:#fef3c7;border:1.5px solid #fde68a;border-radius:12px;padding:14px 16px;display:flex;align-items:flex-start;gap:12px;margin-bottom:8px">
        <span style="font-size:20px;flex-shrink:0">\u26A0\uFE0F</span>
        <div><div style="font-size:13px;font-weight:800;color:#92400e;margin-bottom:4px">${warn.length} Department${warn.length>1?'s':''} Near Limit (85%+)</div>
        <div style="font-size:12px;color:#b45309">${warn.map(b=>`<strong>${b.dept}</strong> — ${Math.round((b.spent/b.allocated)*100)}% used`).join(' &middot; ')}</div></div>
      </div>`;
    }
    if(!over.length&&!warn.length&&budItems.length){
      html=`<div style="background:#d1fae5;border:1.5px solid #6ee7b7;border-radius:12px;padding:12px 16px;display:flex;align-items:center;gap:10px;margin-bottom:8px">
        <span style="font-size:18px">\u2705</span>
        <span style="font-size:13px;font-weight:700;color:#065f46">All departments are within budget!</span>
      </div>`;
    }
    if(!budItems.length){
      html=`<div style="background:var(--s1);border:1.5px solid var(--s2);border-radius:12px;padding:16px;text-align:center;color:var(--s4);font-size:13px;margin-bottom:8px">
        \uD83D\uDCC5 No budget set for ${D.activeYear} &mdash; click "Add Department" or "Copy to Next Year" to get started
      </div>`;
    }
    alertEl.innerHTML=html;
  }

  $('budList').innerHTML=budItems.map((b)=>{
    const realIdx=D.budget.indexOf(b);
    const p=b.allocated>0?Math.min(Math.round((b.spent/b.allocated)*100),100):0;
    const isOver=b.allocated>0&&b.spent>b.allocated;
    const isWarn=!isOver&&b.allocated>0&&p>=85;
    const barColor=isOver?'#ef4444':isWarn?'#f59e0b':'';
    const badge=isOver
      ?`<span style="background:#fee2e2;color:#b91c1c;font-size:10px;font-weight:800;padding:2px 8px;border-radius:50px;flex-shrink:0">Over</span>`
      :isWarn?`<span style="background:#fef3c7;color:#92400e;font-size:10px;font-weight:800;padding:2px 8px;border-radius:50px;flex-shrink:0">Near</span>`:'';
    const linked=b.expCats&&b.expCats.length
      ?`<div style="font-size:10px;color:var(--s4);margin-top:3px">\uD83D\uDD17 Linked: ${b.expCats.join(', ')}</div>`
      :`<div style="font-size:10px;color:var(--s3);margin-top:3px">No categories linked</div>`;
    return`<div style="padding:14px 0;border-bottom:1px solid var(--s1);display:flex;align-items:flex-start;gap:12px">
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:2px;flex-wrap:wrap">
          <span style="font-size:13px;font-weight:700;color:var(--s6)">${b.dept}</span>${badge}
          <span style="margin-left:auto;font-size:13px;font-weight:700;color:${isOver?'#b91c1c':'var(--s5)'}">\u20a8${fmt(b.spent)} <span style="font-weight:400;color:var(--s4)">/ \u20a8${fmt(b.allocated)}</span></span>
        </div>
        ${linked}
        <div class="pbar" style="height:8px;margin-top:7px"><div class="pbar-f" style="width:${p}%;${barColor?'background:'+barColor:''}"></div></div>
        <div style="font-size:11px;color:var(--s4);margin-top:3px">${p}% utilized${isOver?' &middot; \u20a8'+fmt(b.spent-b.allocated)+' over':!isOver&&b.allocated?' &middot; \u20a8'+fmt(b.allocated-b.spent)+' remaining':''}</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:5px;flex-shrink:0;margin-top:2px">
        <button onclick="editBud(${realIdx})" class="btn btn-blue" style="padding:5px 10px;font-size:12px">✏️ Edit</button>
        <button onclick="confirmDelBud(${realIdx})" class="btn btn-red" style="padding:5px 10px;font-size:12px">🗑️ Del</button>
      </div>
    </div>`;
  }).join('');

  mkChart('ch-bud','bar',{
    labels:budItems.map(b=>b.dept.split(' ')[0]),
    datasets:[
      {label:'Allocated',data:budItems.map(b=>b.allocated),backgroundColor:'rgba(32,149,74,.2)',borderColor:'#20954a',borderWidth:2,borderRadius:6},
      {label:'Spent',    data:budItems.map(b=>b.spent),    backgroundColor:budItems.map(b=>b.spent>b.allocated?'rgba(239,68,68,.45)':b.spent/b.allocated>=.85?'rgba(245,158,11,.45)':'rgba(32,149,74,.45)'),borderColor:budItems.map(b=>b.spent>b.allocated?'#ef4444':b.spent/b.allocated>=.85?'#f59e0b':'#20954a'),borderWidth:2,borderRadius:6}
    ]
  },{plugins:{legend:{position:'top'}},scales:{y:{ticks:{callback:v=>'\u20a8'+fmt(v)},grid:{color:'rgba(0,0,0,.04)'}},x:{grid:{display:false}}}});
}

function confirmDelBud(i){
  if(!requirePerm('canEdit','delete budget'))return;
  if(i<0||i>=D.budget.length){toast('Error: budget item not found');return;}
  $('delBud-name').textContent=D.budget[i].dept;
  const btn=$('delBud-confirm-btn');
  btn.onclick=function(){
    auditLog('action','Budget deleted: '+D.budget[i].dept);
    D.budget.splice(i,1);
    rBudget();
    closeMo('delBud');
    toast('✅ Department deleted');
  };
  showMo('delBud');
}

function delBud(i){ confirmDelBud(i); }

function buildBudCatDropdown(selectedVal){
  const sel=$('bud-cat-select');
  if(!sel)return;
  const usedCats=activeBudget().flatMap(b=>b.expCats||[]);
  const opts=D.expCategories.map(c=>{
    const isSelected=selectedVal===c.name;
    const usedElsewhere=usedCats.includes(c.name)&&!isSelected;
    return`<option value="${c.name}" ${isSelected?'selected':''} ${usedElsewhere?'disabled':''}>
      ${c.icon} ${c.name}${usedElsewhere?' (linked elsewhere)':''}
    </option>`;
  }).join('');
  sel.innerHTML='<option value="">— No category linked —</option>'+opts;
}

function saveBud(){
  if(!requirePerm('canEdit','save budget'))return;
  const deptInput=$('bud-dept-input');
  const d=deptInput?deptInput.value.trim():'';
  if(!d){toast('Please enter a department name');return;}

  const catSel=$('bud-cat-select');
  const catVal=catSel?catSel.value:'';
  const linked=catVal?[catVal]:[];

  const editIdx=$('bud-edit-idx').value;
  const isEdit=editIdx!==''&&!isNaN(parseInt(editIdx));
  if(isEdit){
    const i=parseInt(editIdx);
    const old=D.budget[i];
    auditLog('action','Budget edited: '+old.dept+' → '+d+' ('+D.activeYear+')');
    D.budget[i]={...old,dept:d,allocated:parseInt($('bda').value)||100000,expCats:linked};
    rBudget();closeMo('addBud');toast('✅ Budget updated: '+d);
  } else {
    D.budget.push({dept:d,allocated:parseInt($('bda').value)||100000,spent:0,expCats:linked,year:D.activeYear});
    auditLog('action','Budget added: '+d+' ('+D.activeYear+')');
    rBudget();closeMo('addBud');toast('✅ Department added for '+D.activeYear);
  }
  $('bda').value=100000;$('bud-edit-idx').value='';
}

function openAddBud(){
  $('addBud-title').textContent='🏛️ Add Department Budget';
  $('addBud-save-btn').textContent='Add Department';
  $('bud-edit-idx').value='';
  $('bda').value=100000;
  const deptInput=$('bud-dept-input');
  if(deptInput) deptInput.value='';
  buildBudCatDropdown('');
  showMo('addBud');
}

function editBud(i){
  if(!requirePerm('canEdit','edit budget'))return;
  const b=D.budget[i];
  $('addBud-title').textContent='✏️ Edit Department Budget';
  $('addBud-save-btn').textContent='Save Changes';
  $('bud-edit-idx').value=i;
  $('bda').value=b.allocated;
  const deptInput=$('bud-dept-input');
  if(deptInput) deptInput.value=b.dept||'';
  buildBudCatDropdown((b.expCats&&b.expCats[0])||'');
  showMo('addBud');
}

function syncBudgetFromExp(){ autoSyncBudget(); }

/* ══════════════════════════════════════════════════
   REPORTS
══════════════════════════════════════════════════ */
function rReports(){
  /* ── Real month-wise chart data from D.fees, D.expenses, D.salaries ── */

  // Helper: "5 Jan 2025" or "2025-01-05" → "Jan 2025" label
  function toMonthLabel(dateStr){
    if(!dateStr||dateStr==='-')return null;
    var d=new Date(dateStr);
    if(isNaN(d.getTime())){
      // Try "D Mon YYYY" format e.g. "5 Jan 2025"
      var parts=dateStr.trim().split(' ');
      if(parts.length>=3){d=new Date(parts[1]+' '+parts[0]+' '+parts[2]);}
    }
    if(isNaN(d.getTime()))return null;
    return d.toLocaleString('default',{month:'short',year:'numeric'}); // "Jan 2025"
  }

  // Helper: salary month "March 2025" → "Mar 2025"
  function salMonthToLabel(mStr){
    if(!mStr)return null;
    var d=new Date('1 '+mStr);
    if(isNaN(d.getTime()))return null;
    return d.toLocaleString('default',{month:'short',year:'numeric'});
  }

  // Date filter (Reports page date filter) — chart ko bhi usi filter ke hisaab se banao
  var fFees    = D.fees.filter(f=>_rpDateInRange(f.date));
  var fExpenses= D.expenses.filter(e=>_rpDateInRange(e.date));
  var fSalaries= D.salaries.filter(s=>_rpSalInRange(s.month));
  var fTransportFees=D.transportFees.filter(t=>_rpDateInRange(t.date));

  // Collect all unique months across filtered data, sort chronologically
  var monthSet={};
  fFees.forEach(f=>{var m=toMonthLabel(f.date);if(m)monthSet[m]=new Date('1 '+m);});
  fTransportFees.forEach(t=>{var m=toMonthLabel(t.date);if(m)monthSet[m]=new Date('1 '+m);});
  fExpenses.forEach(e=>{var m=toMonthLabel(e.date);if(m)monthSet[m]=new Date('1 '+m);});
  fSalaries.forEach(s=>{var m=salMonthToLabel(s.month);if(m)monthSet[m]=new Date('1 '+m);});

  // If no real data at all, fall back to current academic year skeleton
  var monthLabels=Object.keys(monthSet).sort((a,b)=>monthSet[a]-monthSet[b]);
  if(!monthLabels.length){
    monthLabels=['Jul 2024','Aug 2024','Sep 2024','Oct 2024','Nov 2024','Dec 2024',
                 'Jan 2025','Feb 2025','Mar 2025','Apr 2025'];
  }

  // Build income (paid fees + paid transport fees) per month
  var incomeMap={};
  monthLabels.forEach(m=>incomeMap[m]=0);
  fFees.forEach(f=>{
    var amt=feePaidAmt(f);
    if(!amt)return;
    var m=toMonthLabel(f.date);
    if(m&&incomeMap.hasOwnProperty(m))incomeMap[m]+=amt;
  });
  fTransportFees.filter(t=>t.status==='Paid').forEach(t=>{
    var m=toMonthLabel(t.date);
    if(m&&incomeMap.hasOwnProperty(m))incomeMap[m]+=t.amt;
  });

  // Build expenses per month (cash expenses + paid salaries)
  var expMap={};
  monthLabels.forEach(m=>expMap[m]=0);
  fExpenses.forEach(e=>{
    var m=toMonthLabel(e.date);
    if(m&&expMap.hasOwnProperty(m))expMap[m]+=e.amt;
  });
  fSalaries.filter(s=>s.status==='Paid').forEach(s=>{
    var m=salMonthToLabel(s.month);
    if(m&&expMap.hasOwnProperty(m))expMap[m]+=(netPay(s));
  });

  var incomeData=monthLabels.map(m=>incomeMap[m]||0);
  var expData   =monthLabels.map(m=>expMap[m]||0);

  // Chart title — jab date filter active ho to woh bhi title mein dikha do
  var chTitleEl=$('ch-monthly-title');
  if(chTitleEl){
    var rf=window._rpFilter;
    var suffix=(rf&&(rf.month||rf.from||rf.to))?(rf.month?' — '+rf.month:(rf.from&&rf.to?' — '+rf.from+' → '+rf.to:(rf.from?' — From '+rf.from:' — Until '+rf.to))):' — Full Year';
    chTitleEl.textContent='📈 Monthly Income vs Expenses'+suffix;
  }

  mkChart('ch-monthly','line',{
    labels:monthLabels,
    datasets:[
      {label:'Income',  data:incomeData,borderColor:C.g,backgroundColor:'rgba(32,149,74,.1)',tension:.4,fill:true,pointRadius:4},
      {label:'Expenses',data:expData,   borderColor:C.o,backgroundColor:'rgba(245,158,11,.1)',tension:.4,fill:true,pointRadius:4}
    ]
  });
}

function rpCloseBox(){
  $('rpBox').style.display='none';
  // Active card highlight hata do
  document.querySelectorAll('#rpCards .rc').forEach(c=>c.classList.remove('on'));
  var eb=$('rpExportBtn'); if(eb)eb.style.display='none';
  var pb=$('rpPrintBtn'); if(pb)pb.style.display='none';
  window._curRptType='';
}

function rpShow(type){
  $('rpBox').style.display='block';
  // Active card highlight
  document.querySelectorAll('#rpCards .rc').forEach(c=>c.classList.remove('on'));
  var activeCard=$('rc-'+type.replace('-boys','').replace('-girls',''));
  if(activeCard) activeCard.classList.add('on');
  const titles={fee:'Fee Collection Report',salary:'Salary Report',expense:'Expense Report',balance:'Balance Sheet',student:'Student Ledger',annual:'Annual Report','fee-boys':'Boys Fee Collection Report','fee-girls':'Girls Fee Collection Report','student-boys':'Boys Student Ledger','student-girls':'Girls Student Ledger'};

  // Date filter label — title mein show karo
  var fLabel='';
  var rf=window._rpFilter;
  if(rf&&(rf.month||rf.from||rf.to)){
    fLabel=rf.month?' ('+rf.month+')':(rf.from&&rf.to?' ('+rf.from+' → '+rf.to+')':(rf.from?' (From '+rf.from+')':(rf.to?' (Until '+rf.to+')':'')));
  }
  $('rpTitle').textContent=(titles[type]||type)+fLabel;

  // Filtered data sets — date filter apply karo
  const filteredFees    = D.fees.filter(f=>_rpDateInRange(f.date));
  const filteredExpenses= D.expenses.filter(e=>_rpDateInRange(e.date));
  const filteredSalaries= D.salaries.filter(s=>_rpSalInRange(s.month));
  // Transport Fee is real college income too — include it in every report
  // total below so Reports match the Dashboard's fee-inclusive numbers.
  const filteredTransportFees=D.transportFees.filter(t=>_rpDateInRange(t.date));

  const income=filteredFees.reduce((a,b)=>a+feePaidAmt(b),0)+filteredTransportFees.filter(t=>t.status==='Paid').reduce((a,b)=>a+b.amt,0);
  const expTot=filteredExpenses.reduce((a,b)=>a+b.amt,0);
  const salTot=filteredSalaries.filter(s=>s.status==='Paid').reduce((a,b)=>a+netPay(b),0);
  const allExp=expTot+salTot;
  const interStudents=D.students.filter(s=>(s.cls||'').startsWith('Inter-'));
  const bsStudents=D.students.filter(s=>!(s.cls||'').startsWith('Inter-'));
  const row=(k,v)=>'<div class="mr"><span class="mr-k">'+k+'</span><span class="mr-v">'+v+'</span></div>';
  const secHead=(t)=>'<div style="font-size:10px;font-weight:700;color:var(--s4);letter-spacing:1px;text-transform:uppercase;padding:12px 0 4px;border-top:1px solid var(--s1);margin-top:6px">'+t+'</div>';
  const rpts={
    fee: (()=>{
      const boysInter  = D.students.filter(s=>s.gender==='Male'&&(s.cls||'').startsWith('Inter-'));
      const girlsInter = D.students.filter(s=>s.gender==='Female'&&(s.cls||'').startsWith('Inter-'));
      const bsStu      = D.students.filter(s=>!(s.cls||'').startsWith('Inter-'));
      const feeCollFor = (stuArr)=>filteredFees.filter(f=>{const s=D.students.find(s=>s.roll===f.roll);return s&&stuArr.includes(s)&&f.status==='Paid';}).reduce((a,b)=>a+b.amt,0);
      const feeBillFor = (stuArr)=>stuArr.reduce((a,b)=>a+b.fee,0);
      // Transport Fee also belongs to boys and girls both, so split it the
      // same way (matched by roll) instead of leaving it out of this report.
      const tfCollFor = (stuArr)=>filteredTransportFees.filter(t=>{const s=D.students.find(s=>s.roll===t.roll);return s&&stuArr.includes(s)&&t.status==='Paid';}).reduce((a,b)=>a+b.amt,0);
      const tfBillFor = (stuArr)=>filteredTransportFees.filter(t=>{const s=D.students.find(s=>s.roll===t.roll);return s&&stuArr.includes(s);}).reduce((a,b)=>a+b.amt,0);
      const boysInterCnt=boysInter.length, girlsInterCnt=girlsInter.length, bsCnt=bsStu.length;
      return secHead('Intermediate — Boys ('+boysInterCnt+' students)')+
        row('Fee Billed','Rs '+fmt(feeBillFor(boysInter)+tfBillFor(boysInter)))+
        row('Fee Collected','<span class="pos">Rs '+fmt(feeCollFor(boysInter)+tfCollFor(boysInter))+'</span>')+
        row('— of which Transport','Rs '+fmt(tfCollFor(boysInter)))+
        row('Pending/Overdue','<span class="neg">Rs '+fmt((feeBillFor(boysInter)+tfBillFor(boysInter))-(feeCollFor(boysInter)+tfCollFor(boysInter)))+'</span>')+
        secHead('Intermediate — Girls ('+girlsInterCnt+' students)')+
        row('Fee Billed','Rs '+fmt(feeBillFor(girlsInter)+tfBillFor(girlsInter)))+
        row('Fee Collected','<span class="pos">Rs '+fmt(feeCollFor(girlsInter)+tfCollFor(girlsInter))+'</span>')+
        row('— of which Transport','Rs '+fmt(tfCollFor(girlsInter)))+
        row('Pending/Overdue','<span class="neg">Rs '+fmt((feeBillFor(girlsInter)+tfBillFor(girlsInter))-(feeCollFor(girlsInter)+tfCollFor(girlsInter)))+'</span>')+
        secHead("Bachelor's / MS — Combined Boys+Girls ("+bsCnt+' students)')+
        row('Fee Billed','Rs '+fmt(feeBillFor(bsStu)+tfBillFor(bsStu)))+
        row('Fee Collected','<span class="pos">Rs '+fmt(feeCollFor(bsStu)+tfCollFor(bsStu))+'</span>')+
        row('— of which Transport','Rs '+fmt(tfCollFor(bsStu)))+
        row('Pending/Overdue','<span class="neg">Rs '+fmt((feeBillFor(bsStu)+tfBillFor(bsStu))-(feeCollFor(bsStu)+tfCollFor(bsStu)))+'</span>')+
        secHead('Overall Summary')+
        row('Total Students',D.students.length)+
        row('Total Billed (incl. Transport)','Rs '+fmt(filteredFees.reduce((a,b)=>a+b.amt,0)+filteredTransportFees.reduce((a,b)=>a+b.amt,0)))+
        row('Collected','<span class="pos">Rs '+fmt(income)+'</span>')+
        row('— of which Transport Fee','Rs '+fmt(filteredTransportFees.filter(t=>t.status==='Paid').reduce((a,b)=>a+b.amt,0)))+
        row('Pending/Overdue','<span class="neg">Rs '+fmt(filteredFees.filter(f=>f.status!=='Paid').reduce((a,b)=>a+b.amt,0)+filteredTransportFees.filter(t=>t.status!=='Paid').reduce((a,b)=>a+b.amt,0))+'</span>');
    })(),
    salary:(()=>{
      const net=s=>netPay(s);
      const salPaid=filteredSalaries.filter(s=>s.status==='Paid');
      const salPend=filteredSalaries.filter(s=>s.status==='Pending');
      const paidTot=salPaid.reduce((a,s)=>a+net(s),0);
      const pendTot=salPend.reduce((a,s)=>a+net(s),0);
      const grandTot=paidTot+pendTot;

      // progress bar helper (inline so no scope issues)
      const sBar=(pct,col)=>'<div style="height:5px;background:var(--s1);border-radius:3px;margin-top:3px;overflow:hidden"><div style="height:100%;width:'+Math.min(100,pct)+'%;background:'+col+';border-radius:3px"></div></div>';
      const pct2=(a,b)=>b>0?+(a/b*100).toFixed(1):0;

      // ── 1. Overall Summary ──
      var h=secHead('📊 Overall Summary');
      h+=row('Total Employees',D.employees.length+' staff');
      h+=row('Total Salary Liability','Rs '+fmt(grandTot));
      h+=row('Disbursed','<span class="pos">Rs '+fmt(paidTot)+'</span> ('+salPaid.length+' records)');
      h+=row('Pending','<span class="neg">Rs '+fmt(pendTot)+'</span> ('+salPend.length+' records)');
      h+='<div style="padding:4px 0 8px">'+sBar(pct2(paidTot,grandTot),'var(--g5)')+'</div>';

      // ── 2. Designation-wise breakdown ──
      h+=secHead('🏷️ Designation-wise Salary');
      const desigMap={};
      filteredSalaries.forEach(s=>{
        if(!desigMap[s.desig])desigMap[s.desig]={paid:0,pending:0,count:0};
        if(s.status==='Paid')desigMap[s.desig].paid+=net(s);
        else desigMap[s.desig].pending+=net(s);
        desigMap[s.desig].count++;
      });
      const desigTotal=Object.values(desigMap).reduce((a,d)=>a+d.paid+d.pending,0)||1;
      Object.entries(desigMap).sort((a,b)=>(b[1].paid+b[1].pending)-(a[1].paid+a[1].pending)).forEach(([desig,d])=>{
        const tot=d.paid+d.pending;
        const p=pct2(tot,desigTotal);
        h+='<div style="padding:7px 0 4px;border-bottom:1px solid var(--s1)">';
        h+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2px">';
        h+='<span style="font-size:13px;font-weight:600;color:var(--s6)">'+desig+'</span>';
        h+='<span style="font-size:12px;font-weight:700">Rs '+fmt(tot)+'<span style="font-size:10px;color:var(--s4);font-weight:400"> ('+d.count+' records)</span></span>';
        h+='</div>';
        h+='<div style="display:flex;gap:14px;font-size:11px;color:var(--s5);margin-bottom:3px">';
        h+='<span>✅ Paid: <strong style="color:var(--g6)">Rs '+fmt(d.paid)+'</strong></span>';
        if(d.pending)h+='<span>⏳ Pending: <strong style="color:#f59e0b">Rs '+fmt(d.pending)+'</strong></span>';
        h+='</div>';
        h+=sBar(p,'#3b82f6');
        h+='</div>';
      });

      // ── 3. Department-wise (via employees) ──
      h+=secHead('🏢 Department-wise Salary');
      const deptMap={};
      filteredSalaries.forEach(s=>{
        // Match salary to employee to get department
        const emp=D.employees.find(e=>e.name===s.name);
        const dept=(emp&&emp.dept)||'Other';
        if(!deptMap[dept])deptMap[dept]={paid:0,pending:0};
        if(s.status==='Paid')deptMap[dept].paid+=net(s);
        else deptMap[dept].pending+=net(s);
      });
      const deptTot=Object.values(deptMap).reduce((a,d)=>a+d.paid+d.pending,0)||1;
      if(Object.keys(deptMap).length){
        Object.entries(deptMap).sort((a,b)=>(b[1].paid+b[1].pending)-(a[1].paid+a[1].pending)).forEach(([dept,d])=>{
          const tot=d.paid+d.pending;
          const p=pct2(tot,deptTot);
          h+='<div style="padding:7px 0 4px;border-bottom:1px solid var(--s1)">';
          h+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2px">';
          h+='<span style="font-size:13px;font-weight:600;color:var(--s6)">'+dept+'</span>';
          h+='<span style="font-size:12px;font-weight:700">Rs '+fmt(tot)+'</span>';
          h+='</div>';
          if(d.pending)h+='<div style="font-size:11px;color:#f59e0b;margin-bottom:2px">⏳ Rs '+fmt(d.pending)+' pending</div>';
          h+=sBar(p,'#8b5cf6');
          h+='</div>';
        });
      } else {
        h+=row('No department data','—');
      }

      // ── 4. Month-wise breakdown ──
      h+=secHead('📅 Month-wise Disbursement');
      const monthMap={};
      filteredSalaries.forEach(s=>{
        if(!s.month)return;
        if(!monthMap[s.month])monthMap[s.month]={paid:0,pending:0,count:0};
        if(s.status==='Paid')monthMap[s.month].paid+=net(s);
        else monthMap[s.month].pending+=net(s);
        monthMap[s.month].count++;
      });
      // Sort months chronologically
      const salMonthOrder=m=>{const d=new Date('1 '+m);return isNaN(d)?0:d.getTime();};
      const mKeys=Object.keys(monthMap).sort((a,b)=>salMonthOrder(a)-salMonthOrder(b));
      if(mKeys.length){
        mKeys.forEach(m=>{
          const d=monthMap[m];
          h+='<div style="padding:8px 0;border-bottom:1px solid var(--s1)">';
          h+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px">';
          h+='<span style="font-size:13px;font-weight:700;color:var(--s6)">'+m+'</span>';
          h+='<span style="font-size:11px;color:var(--s4)">'+d.count+' records</span>';
          h+='</div>';
          h+='<div style="display:flex;gap:16px;font-size:12px">';
          h+='<span>✅ <strong style="color:var(--g6)">Rs '+fmt(d.paid)+'</strong> paid</span>';
          if(d.pending)h+='<span>⏳ <strong style="color:#f59e0b">Rs '+fmt(d.pending)+'</strong> pending</span>';
          h+='</div></div>';
        });
      } else {
        h+=row('No month data','Add salary month records');
      }

      // ── 5. Individual salary list ──
      h+=secHead('👤 Individual Salary Records');
      if(filteredSalaries.length){
        filteredSalaries.slice().sort((a,b)=>net(b)-net(a)).forEach(s=>{
          h+='<div style="padding:8px 0;border-bottom:1px solid var(--s1);display:flex;justify-content:space-between;align-items:center">';
          h+='<div><div style="font-size:13px;font-weight:600;color:var(--s6)">'+s.name+'</div>';
          h+='<div style="font-size:11px;color:var(--s4)">'+s.desig+' &nbsp;·&nbsp; '+s.month+'</div></div>';
          h+='<div style="text-align:right"><div style="font-size:13px;font-weight:700;color:'+(s.status==='Paid'?'var(--g6)':'#f59e0b')+'">Rs '+fmt(net(s))+'</div>';
          h+='<div style="font-size:10px;margin-top:2px">'+bdg(s.status)+'</div></div>';
          h+='</div>';
        });
      } else {
        h+=row('No salary records','—');
      }
      return h;
    })(),
    expense:(()=>{
      const sBar=(pct,col)=>'<div style="height:5px;background:var(--s1);border-radius:3px;margin-top:3px;overflow:hidden"><div style="height:100%;width:'+Math.min(100,pct)+'%;background:'+col+';border-radius:3px"></div></div>';
      const pct2=(a,b)=>b>0?+(a/b*100).toFixed(1):0;

      // ── Category color map from expCategories ──
      const catColorMap={};
      (D.expCategories||[]).forEach(c=>{catColorMap[c.name]=c.color;});

      // ── 1. Summary ──
      var h=secHead('📊 Summary');
      h+=row('Total Records',filteredExpenses.length+' expenses');
      h+=row('Total Amount','<span class="neg">Rs '+fmt(expTot)+'</span>');
      const approved=filteredExpenses.filter(e=>e.status==='Approved');
      const pending=filteredExpenses.filter(e=>e.status!=='Approved');
      h+=row('Approved','<span class="pos">Rs '+fmt(approved.reduce((a,b)=>a+b.amt,0))+'</span> ('+approved.length+' records)');
      if(pending.length)h+=row('Pending Approval','<span style="color:#f59e0b">Rs '+fmt(pending.reduce((a,b)=>a+b.amt,0))+'</span> ('+pending.length+' records)');

      // ── 2. Category-wise breakdown ──
      h+=secHead('📁 Category-wise Breakdown');
      const catMap={};
      filteredExpenses.forEach(e=>{
        if(!catMap[e.cat])catMap[e.cat]={amt:0,count:0};
        catMap[e.cat].amt+=e.amt;
        catMap[e.cat].count++;
      });
      const catTotal=expTot||1;
      if(Object.keys(catMap).length){
        Object.entries(catMap).sort((a,b)=>b[1].amt-a[1].amt).forEach(([cat,d])=>{
          const p=pct2(d.amt,catTotal);
          const col=catColorMap[cat]||'#6b7280';
          h+='<div style="padding:7px 0 4px;border-bottom:1px solid var(--s1)">';
          h+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2px">';
          h+='<span style="font-size:13px;font-weight:600;color:var(--s6)">'+cat+'</span>';
          h+='<span style="font-size:12px;font-weight:700">Rs '+fmt(d.amt)+'<span style="font-size:10px;color:var(--s4);font-weight:400"> · '+p+'% · '+d.count+' items</span></span>';
          h+='</div>';
          h+=sBar(p,col);
          h+='</div>';
        });
      } else {
        h+=row('No expense records','—');
      }

      // ── 3. Month-wise breakdown ──
      h+=secHead('📅 Month-wise Expenses');
      function eMLabel(dateStr){
        if(!dateStr||dateStr==='-')return null;
        var d=new Date(dateStr);
        if(isNaN(d.getTime())){var p=dateStr.trim().split(' ');if(p.length>=3)d=new Date(p[1]+' '+p[0]+' '+p[2]);}
        if(isNaN(d.getTime()))return null;
        return d.toLocaleString('default',{month:'short',year:'numeric'});
      }
      const mMap={};
      filteredExpenses.forEach(e=>{
        var m=eMLabel(e.date);if(!m)return;
        if(!mMap[m])mMap[m]={amt:0,count:0};
        mMap[m].amt+=e.amt;mMap[m].count++;
      });
      const mKeys2=Object.keys(mMap).sort((a,b)=>new Date('1 '+a)-new Date('1 '+b));
      const mMax=Math.max(...Object.values(mMap).map(d=>d.amt),1);
      if(mKeys2.length){
        mKeys2.forEach(m=>{
          const d=mMap[m];
          const p=pct2(d.amt,mMax);
          h+='<div style="padding:8px 0;border-bottom:1px solid var(--s1)">';
          h+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2px">';
          h+='<span style="font-size:13px;font-weight:700;color:var(--s6)">'+m+'</span>';
          h+='<span style="font-size:12px;font-weight:700"><span class="neg">Rs '+fmt(d.amt)+'</span> <span style="font-size:10px;color:var(--s4);font-weight:400">'+d.count+' items</span></span>';
          h+='</div>';
          h+=sBar(p,'#ef4444');
          h+='</div>';
        });
      } else {
        h+=row('No date data','Add dates to expense records');
      }

      // ── 4. Top 5 Expenses ──
      h+=secHead('🔺 Top Expenses');
      const top5=filteredExpenses.slice().sort((a,b)=>b.amt-a.amt).slice(0,5);
      if(top5.length){
        top5.forEach((e,i)=>{
          const col=catColorMap[e.cat]||'#6b7280';
          h+='<div style="padding:8px 0;border-bottom:1px solid var(--s1);display:flex;justify-content:space-between;align-items:center">';
          h+='<div><div style="display:flex;align-items:center;gap:6px">';
          h+='<span style="font-size:11px;font-weight:800;color:#fff;background:'+col+';width:18px;height:18px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center">'+(i+1)+'</span>';
          h+='<span style="font-size:13px;font-weight:600;color:var(--s6)">'+e.desc+'</span></div>';
          h+='<div style="font-size:11px;color:var(--s4);margin-top:2px;padding-left:24px">'+e.cat+' &nbsp;·&nbsp; '+e.date+' &nbsp;·&nbsp; '+e.approver+'</div></div>';
          h+='<div style="text-align:right"><div style="font-size:13px;font-weight:700"><span class="neg">Rs '+fmt(e.amt)+'</span></div>';
          h+='<div style="font-size:10px;margin-top:2px">'+bdg(e.status)+'</div></div>';
          h+='</div>';
        });
      } else {
        h+=row('No expenses','—');
      }

      // ── 5. Vendor summary ──
      h+=secHead('🏪 Vendor Summary');
      const vendMap={};
      filteredExpenses.forEach(e=>{
        if(!e.vendor)return;
        if(!vendMap[e.vendor])vendMap[e.vendor]={amt:0,count:0};
        vendMap[e.vendor].amt+=e.amt;vendMap[e.vendor].count++;
      });
      const vKeys=Object.keys(vendMap).sort((a,b)=>vendMap[b].amt-vendMap[a].amt);
      if(vKeys.length){
        vKeys.forEach(v=>{
          const d=vendMap[v];
          h+='<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid var(--s1)">';
          h+='<div><span style="font-size:13px;font-weight:600;color:var(--s6)">'+v+'</span>';
          h+='<span style="font-size:11px;color:var(--s4);margin-left:8px">'+d.count+' order'+(d.count>1?'s':'')+'</span></div>';
          h+='<span style="font-size:13px;font-weight:700"><span class="neg">Rs '+fmt(d.amt)+'</span></span>';
          h+='</div>';
        });
      } else {
        h+=row('No vendor data','—');
      }

      return h;
    })(),
    balance: (()=>{
      const sBar=(pct,col)=>'<div style="height:6px;background:var(--s1);border-radius:4px;margin-top:4px;overflow:hidden"><div style="height:100%;width:'+Math.min(100,Math.max(0,pct))+'%;background:'+col+';border-radius:4px"></div></div>';
      const pct2=(a,b)=>b>0?+(a/b*100).toFixed(1):0;
      const netBal=income-allExp;

      // ── 1. Overall Summary ──
      var h=secHead('📊 Overall Summary');
      h+=row('Total Income','<span class="pos">Rs '+fmt(income)+'</span>');
      h+=row('Total Expenditure','<span class="neg">Rs '+fmt(allExp)+'</span>');
      h+=row('Net Balance','<strong style="font-size:15px;color:'+(netBal>=0?'var(--g6)':'var(--rd)')+'">Rs '+fmt(Math.abs(netBal))+' '+(netBal>=0?'✅ Surplus':'❌ Deficit')+'</strong>');
      h+='<div style="padding:4px 0 8px">'+sBar(pct2(allExp,income||1),netBal>=0?'var(--g5)':'var(--rd)')+'</div>';

      // ── 2. Income Breakdown (Fee Collection) ──
      h+=secHead('💳 Income Breakdown (Fee Collection)');
      const feeBilled=filteredFees.reduce((a,b)=>a+b.amt,0)+filteredTransportFees.reduce((a,b)=>a+b.amt,0);
      const feePending=filteredFees.filter(f=>f.status!=='Paid').reduce((a,b)=>a+b.amt,0)+filteredTransportFees.filter(t=>t.status!=='Paid').reduce((a,b)=>a+b.amt,0);
      const collRate=feeBilled>0?(income/feeBilled*100):0;
      h+=row('Fee Billed (incl. Transport)','Rs '+fmt(feeBilled));
      h+=row('Fee Collected','<span class="pos">Rs '+fmt(income)+'</span>');
      h+=row('Pending/Overdue','<span class="neg">Rs '+fmt(feePending)+'</span>');
      h+='<div class="mr"><span class="mr-k">Collection Rate</span><span class="mr-v"><strong style="color:'+(collRate>=80?'var(--g6)':collRate>=50?'#f59e0b':'var(--rd)')+'">'+collRate.toFixed(1)+'%</strong></span></div>';
      h+='<div style="padding:0 0 8px">'+sBar(collRate,'var(--g5)')+'</div>';

      // ── 3. Expenditure Breakdown (Salary vs Other) ──
      h+=secHead('📤 Expenditure Breakdown');
      const salP=pct2(salTot,allExp||1), expP=pct2(expTot,allExp||1);
      h+=row('Salary Expenditure','<span class="neg">Rs '+fmt(salTot)+'</span> <span style="font-size:10px;color:var(--s4)">('+salP+'%)</span>');
      h+='<div style="padding:0 0 6px">'+sBar(salP,'#3b82f6')+'</div>';
      h+=row('Other Expenses','<span class="neg">Rs '+fmt(expTot)+'</span> <span style="font-size:10px;color:var(--s4)">('+expP+'%)</span>');
      h+='<div style="padding:0 0 8px">'+sBar(expP,'#f59e0b')+'</div>';

      // ── 4. Other Expenses by Category ──
      h+=secHead('📁 Other Expenses by Category');
      const bCatMap={};
      filteredExpenses.forEach(e=>{bCatMap[e.cat]=(bCatMap[e.cat]||0)+e.amt;});
      const bCatTotal=expTot||1;
      if(Object.keys(bCatMap).length){
        Object.entries(bCatMap).sort((a,b)=>b[1]-a[1]).forEach(([cat,amt])=>{
          const p=pct2(amt,bCatTotal);
          h+='<div style="padding:6px 0 2px"><div style="display:flex;justify-content:space-between;font-size:12px"><span style="color:var(--s5)">'+cat+'</span><span style="font-weight:600">Rs '+fmt(amt)+' <span style="color:var(--s4);font-weight:400">('+p+'%)</span></span></div>'+sBar(p,'#f59e0b')+'</div>';
        });
      } else {
        h+=row('No expense records','—');
      }

      // ── 5. Month-wise Balance Trend ──
      h+=secHead('📅 Month-wise Balance Trend');
      function bMLabel(dateStr){
        if(!dateStr||dateStr==='-')return null;
        var d=new Date(dateStr);
        if(isNaN(d.getTime())){var p=dateStr.trim().split(' ');if(p.length>=3)d=new Date(p[1]+' '+p[0]+' '+p[2]);}
        if(isNaN(d.getTime()))return null;
        return d.toLocaleString('default',{month:'short',year:'numeric'});
      }
      function bSalLabel(mStr){
        if(!mStr)return null;
        var d=new Date('1 '+mStr);
        return isNaN(d.getTime())?null:d.toLocaleString('default',{month:'short',year:'numeric'});
      }
      const bMMap={};
      filteredFees.forEach(f=>{var amt=feePaidAmt(f);if(!amt)return;var m=bMLabel(f.date);if(m){bMMap[m]=bMMap[m]||{inc:0,exp:0};bMMap[m].inc+=amt;}});
      filteredTransportFees.filter(t=>t.status==='Paid').forEach(t=>{var m=bMLabel(t.date);if(m){bMMap[m]=bMMap[m]||{inc:0,exp:0};bMMap[m].inc+=t.amt;}});
      filteredExpenses.forEach(e=>{var m=bMLabel(e.date);if(m){bMMap[m]=bMMap[m]||{inc:0,exp:0};bMMap[m].exp+=e.amt;}});
      filteredSalaries.filter(s=>s.status==='Paid').forEach(s=>{var m=bSalLabel(s.month);if(m){bMMap[m]=bMMap[m]||{inc:0,exp:0};bMMap[m].exp+=(netPay(s));}});
      const bMKeys=Object.keys(bMMap).sort((a,b)=>new Date('1 '+a)-new Date('1 '+b));
      if(bMKeys.length){
        bMKeys.forEach(m=>{
          const inc=bMMap[m].inc, exp=bMMap[m].exp, netM=inc-exp;
          h+='<div style="padding:8px 0;border-bottom:1px solid var(--s1)">';
          h+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">';
          h+='<span style="font-size:12px;font-weight:700;color:var(--s6)">'+m+'</span>';
          h+='<span style="font-size:11px;font-weight:700;color:'+(netM>=0?'var(--g6)':'var(--rd)')+'">'+(netM>=0?'▲ Surplus':'▼ Deficit')+' Rs '+fmt(Math.abs(netM))+'</span>';
          h+='</div>';
          h+='<div style="display:flex;gap:16px;font-size:11px;color:var(--s5)">';
          h+='<span>🟢 Income: <strong style="color:var(--g6)">Rs '+fmt(inc)+'</strong></span>';
          h+='<span>🔴 Exp: <strong style="color:var(--rd)">Rs '+fmt(exp)+'</strong></span>';
          h+='</div></div>';
        });
      } else {
        h+=row('No date data available','Add payment dates to fee/expense records');
      }

      return h;
    })(),
    student: (()=>{
      const boysInter = D.students.filter(s=>s.gender==='Male'&&(s.cls||'').startsWith('Inter-'));
      const girlsInter= D.students.filter(s=>s.gender==='Female'&&(s.cls||'').startsWith('Inter-'));
      const bsStu     = D.students.filter(s=>!(s.cls||'').startsWith('Inter-'));
      const stuRow = s=>row(s.name+' — '+(s.cls||'').replace('Inter-','')+' ('+s.roll+')',bdg(s.status));
      return secHead('Intermediate — Boys ('+boysInter.length+')')+(boysInter.map(stuRow).join('')||row('No students','—'))+
             secHead('Intermediate — Girls ('+girlsInter.length+')')+(girlsInter.map(stuRow).join('')||row('No students','—'))+
             secHead("Bachelor's / MS — Boys + Girls Combined ("+bsStu.length+')')+(bsStu.map(stuRow).join('')||row('No students','—'));
    })(),
    annual: (()=>{
      // ── Helpers ──
      function mLabel(dateStr){
        if(!dateStr||dateStr==='-')return null;
        var d=new Date(dateStr);
        if(isNaN(d.getTime())){var p=dateStr.trim().split(' ');if(p.length>=3)d=new Date(p[1]+' '+p[0]+' '+p[2]);}
        if(isNaN(d.getTime()))return null;
        return d.toLocaleString('default',{month:'short',year:'numeric'});
      }
      function salLabel(mStr){
        if(!mStr)return null;
        var d=new Date('1 '+mStr);
        return isNaN(d.getTime())?null:d.toLocaleString('default',{month:'short',year:'numeric'});
      }
      const pct=(a,b)=>b>0?(((a/b)*100).toFixed(1)+'%'):'0%';
      const bar=(pctNum,col)=>{
        var w=Math.min(100,Math.max(0,pctNum));
        return '<div style="height:6px;background:var(--s1);border-radius:4px;margin-top:4px;overflow:hidden"><div style="height:100%;width:'+w+'%;background:'+col+';border-radius:4px;transition:width .4s"></div></div>';
      };

      // ── Enrollment ──
      const boys=D.students.filter(s=>s.gender==='Male');
      const girls=D.students.filter(s=>s.gender==='Female');
      const interStu=D.students.filter(s=>(s.cls||'').startsWith('Inter-'));
      const bsStu=D.students.filter(s=>!(s.cls||'').startsWith('Inter-'));

      // ── Fee numbers (includes Transport Fee — real college income) ──
      const feeBilled=D.students.reduce((a,s)=>a+s.fee,0)+filteredTransportFees.reduce((a,b)=>a+b.amt,0);
      const feeCollected=filteredFees.reduce((a,b)=>a+feePaidAmt(b),0)+filteredTransportFees.filter(t=>t.status==='Paid').reduce((a,b)=>a+b.amt,0);
      const feePending=filteredFees.filter(f=>f.status!=='Paid').reduce((a,b)=>a+b.amt,0)+filteredTransportFees.filter(t=>t.status!=='Paid').reduce((a,b)=>a+b.amt,0);
      const collRate=feeBilled>0?(feeCollected/feeBilled*100):0;

      // ── Salary numbers ──
      const salPaid=filteredSalaries.filter(s=>s.status==='Paid').reduce((a,b)=>a+netPay(b),0);
      const salPending=filteredSalaries.filter(s=>s.status==='Pending').reduce((a,b)=>a+netPay(b),0);
      // Designation-wise salary
      const desigMap={};
      filteredSalaries.filter(s=>s.status==='Paid').forEach(s=>{
        desigMap[s.desig]=(desigMap[s.desig]||0)+(netPay(s));
      });
      const desigTotal=Object.values(desigMap).reduce((a,b)=>a+b,0)||1;

      // ── Other expenses ──
      const expTot=filteredExpenses.reduce((a,b)=>a+b.amt,0);
      // Category-wise expenses
      const catMap={};
      filteredExpenses.forEach(e=>{catMap[e.cat]=(catMap[e.cat]||0)+e.amt;});
      const catTotal=expTot||1;

      // ── Month-wise breakdown ──
      const mMap={};
      filteredFees.forEach(f=>{
        var amt=feePaidAmt(f);if(!amt)return;
        var m=mLabel(f.date);if(m){mMap[m]=mMap[m]||{inc:0,exp:0};mMap[m].inc+=amt;}
      });
      filteredTransportFees.filter(t=>t.status==='Paid').forEach(t=>{
        var m=mLabel(t.date);if(m){mMap[m]=mMap[m]||{inc:0,exp:0};mMap[m].inc+=t.amt;}
      });
      filteredExpenses.forEach(e=>{
        var m=mLabel(e.date);if(m){mMap[m]=mMap[m]||{inc:0,exp:0};mMap[m].exp+=e.amt;}
      });
      filteredSalaries.filter(s=>s.status==='Paid').forEach(s=>{
        var m=salLabel(s.month);if(m){mMap[m]=mMap[m]||{inc:0,exp:0};mMap[m].exp+=(netPay(s));}
      });
      const mKeys=Object.keys(mMap).sort((a,b)=>new Date('1 '+a)-new Date('1 '+b));

      // ── Balance ──
      const allExpTotal=salPaid+expTot;
      const net=feeCollected-allExpTotal;

      // ── Build HTML ──
      var html='';

      // 1. Enrollment Summary
      html+=secHead('📚 Enrollment Summary');
      html+=row('Total Students','<strong>'+D.students.length+'</strong>');
      html+=row('Male Students',boys.length+' <span style="color:var(--s4);font-size:11px">('+pct(boys.length,D.students.length)+')</span>');
      html+=row('Female Students',girls.length+' <span style="color:var(--s4);font-size:11px">('+pct(girls.length,D.students.length)+')</span>');
      html+=row('Intermediate Section',interStu.length+' students');
      html+=row("Bachelor's / MS Section",bsStu.length+' students');

      // 2. Fee Collection with rate bar
      html+=secHead('💳 Fee Collection');
      html+=row('Total Fee Billed','Rs '+fmt(feeBilled));
      html+=row('Total Collected','<span class="pos">Rs '+fmt(feeCollected)+'</span>');
      html+=row('Pending / Overdue','<span class="neg">Rs '+fmt(feePending)+'</span>');
      html+='<div class="mr"><span class="mr-k">Collection Rate</span><span class="mr-v"><strong style="color:'+(collRate>=80?'var(--g6)':collRate>=50?'#f59e0b':'var(--rd)')+'">'+pct(feeCollected,feeBilled)+'</strong></span></div>';
      html+='<div style="padding:0 0 10px">'+bar(collRate,'var(--g5)')+'</div>';

      // 3. Salary Distribution
      html+=secHead('💰 Salary Distribution');
      html+=row('Total Staff',D.employees.length+' employees');
      html+=row('Salary Disbursed','<span class="pos">Rs '+fmt(salPaid)+'</span>');
      html+=row('Salary Pending','<span class="neg">Rs '+fmt(salPending)+'</span>');
      // Designation-wise bars
      Object.entries(desigMap).sort((a,b)=>b[1]-a[1]).forEach(([desig,amt])=>{
        var p2=amt/desigTotal*100;
        html+='<div style="padding:6px 0 2px"><div style="display:flex;justify-content:space-between;font-size:12px"><span style="color:var(--s5)">'+desig+'</span><span style="font-weight:600">Rs '+fmt(amt)+'</span></div>'+bar(p2,'#3b82f6')+'</div>';
      });

      // 4. Department-wise Expenses
      html+=secHead('📁 Expense Breakdown by Category');
      html+=row('Total Other Expenses','<span class="neg">Rs '+fmt(expTot)+'</span>');
      Object.entries(catMap).sort((a,b)=>b[1]-a[1]).forEach(([cat,amt])=>{
        var p3=amt/catTotal*100;
        html+='<div style="padding:6px 0 2px"><div style="display:flex;justify-content:space-between;font-size:12px"><span style="color:var(--s5)">'+cat+'</span><span style="font-weight:600">Rs '+fmt(amt)+' <span style="color:var(--s4);font-weight:400">('+p3.toFixed(1)+'%)</span></span></div>'+bar(p3,'#f59e0b')+'</div>';
      });
      if(!Object.keys(catMap).length) html+=row('No expense records','—');

      // 5. Month-wise Breakdown
      html+=secHead('📅 Month-wise Income vs Expenses');
      if(mKeys.length){
        mKeys.forEach(m=>{
          var inc=mMap[m].inc, exp=mMap[m].exp, netM=inc-exp;
          html+='<div style="padding:8px 0;border-bottom:1px solid var(--s1)">';
          html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">';
          html+='<span style="font-size:12px;font-weight:700;color:var(--s6)">'+m+'</span>';
          html+='<span style="font-size:11px;font-weight:700;color:'+(netM>=0?'var(--g6)':'var(--rd)')+'">'+( netM>=0?'▲ Surplus':'▼ Deficit')+' Rs '+fmt(Math.abs(netM))+'</span>';
          html+='</div>';
          html+='<div style="display:flex;gap:16px;font-size:11px;color:var(--s5)">';
          html+='<span>🟢 Income: <strong style="color:var(--g6)">Rs '+fmt(inc)+'</strong></span>';
          html+='<span>🔴 Exp: <strong style="color:var(--rd)">Rs '+fmt(exp)+'</strong></span>';
          html+='</div></div>';
        });
      } else {
        html+=row('No date data available','Add payment dates to fee records');
      }

      // 6. Overall Balance
      html+=secHead('📑 Annual Balance Sheet');
      html+=row('Total Income','<span class="pos">Rs '+fmt(feeCollected)+'</span>');
      html+=row('Salary Expenditure','<span class="neg">Rs '+fmt(salPaid)+'</span>');
      html+=row('Other Expenses','<span class="neg">Rs '+fmt(expTot)+'</span>');
      html+=row('Total Expenditure','<span class="neg">Rs '+fmt(allExpTotal)+'</span>');
      html+=row('Net Balance','<strong style="font-size:15px;color:'+(net>=0?'var(--g6)':'var(--rd)')+'">Rs '+fmt(Math.abs(net))+' '+(net>=0?'✅ Surplus':'❌ Deficit')+'</strong>');

      return html;
    })(),
  };
  // Boys/Girls specific report data helpers
  const feeCollFor = (stuArr) => filteredFees.filter(f=>{const s=D.students.find(s=>s.roll===f.roll);return s&&stuArr.includes(s)&&f.status==='Paid';}).reduce((a,b)=>a+b.amt,0);
  const feeBillFor = (stuArr) => stuArr.reduce((a,b)=>a+b.fee,0);
  // Transport Fee split the same way — it's used by boys and girls both.
  const tfCollFor2 = (stuArr) => filteredTransportFees.filter(t=>{const s=D.students.find(s=>s.roll===t.roll);return s&&stuArr.includes(s)&&t.status==='Paid';}).reduce((a,b)=>a+b.amt,0);
  const tfBillFor2 = (stuArr) => filteredTransportFees.filter(t=>{const s=D.students.find(s=>s.roll===t.roll);return s&&stuArr.includes(s);}).reduce((a,b)=>a+b.amt,0);
  const boysStu    = D.students.filter(s=>s.gender==='Male');
  const girlsStu   = D.students.filter(s=>s.gender==='Female');
  const boysInter  = boysStu.filter(s=>(s.cls||'').startsWith('Inter-'));
  const girlsInter = girlsStu.filter(s=>(s.cls||'').startsWith('Inter-'));

  const stuRow2    = s=>row(s.name+' — '+(s.cls||'').replace('Inter-','')+' ('+s.roll+')',bdg(s.status));
  // Inter-only Boys/Girls fee reports
  rpts['fee-boys'] =
    secHead('Intermediate — Boys ('+boysInter.length+' students)')+
    row('Fee Billed','Rs '+fmt(feeBillFor(boysInter)+tfBillFor2(boysInter)))+
    row('Collected','<span class="pos">Rs '+fmt(feeCollFor(boysInter)+tfCollFor2(boysInter))+'</span>')+
    row('— of which Transport','Rs '+fmt(tfCollFor2(boysInter)))+
    row('Pending/Overdue','<span class="neg">Rs '+fmt((feeBillFor(boysInter)+tfBillFor2(boysInter))-(feeCollFor(boysInter)+tfCollFor2(boysInter)))+'</span>')+
    row('Boys Pending Count',boysInter.filter(s=>s.status!=='Paid').length+' students')+
    '';
  rpts['fee-girls'] =
    secHead('Intermediate — Girls ('+girlsInter.length+' students)')+
    row('Fee Billed','Rs '+fmt(feeBillFor(girlsInter)+tfBillFor2(girlsInter)))+
    row('Collected','<span class="pos">Rs '+fmt(feeCollFor(girlsInter)+tfCollFor2(girlsInter))+'</span>')+
    row('— of which Transport','Rs '+fmt(tfCollFor2(girlsInter)))+
    row('Pending/Overdue','<span class="neg">Rs '+fmt((feeBillFor(girlsInter)+tfBillFor2(girlsInter))-(feeCollFor(girlsInter)+tfCollFor2(girlsInter)))+'</span>')+
    row('Girls Pending Count',girlsInter.filter(s=>s.status!=='Paid').length+' students')+
    '';
  // Student ledger
  rpts['student-boys'] =
    secHead('Intermediate — Boys ('+boysInter.length+')')+(boysInter.map(stuRow2).join('')||row('No students','—'));
  rpts['student-girls'] =
    secHead('Intermediate — Girls ('+girlsInter.length+')')+(girlsInter.map(stuRow2).join('')||row('No students','—'));

  // Fee & Student Ledger reports ke liye Boys/Girls/All toggle — pehle yeh sirf code mein tha, UI se access nahi hota tha
  var genderToggle='';
  var baseType=type.replace('-boys','').replace('-girls','');
  if(baseType==='fee'||baseType==='student'){
    var gtOpts=[{k:baseType,lbl:'All'},{k:baseType+'-boys',lbl:'👦 Boys (Inter)'},{k:baseType+'-girls',lbl:'👧 Girls (Inter)'}];
    genderToggle='<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px">'+
      gtOpts.map(o=>'<button class="btn btn-outline" style="padding:6px 14px;font-size:12px;'+(type===o.k?'background:var(--g6);color:#fff;border-color:var(--g6)':'')+'" onclick="rpShow(\''+o.k+'\')">'+o.lbl+'</button>').join('')+
      '</div>';
  }
  var actBtns='<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap"><button class="mo-save" onclick="printReport()">🖨️ Print Report</button><button class="btn btn-outline" style="padding:8px 16px;font-size:13px" onclick="showMo(\'exportReport\')">📤 Export</button></div>';
  $('rpBody').innerHTML=genderToggle+(rpts[type]||'')+actBtns;
  // Store current report type & clean title (filter info alag)
  window._curRptType=type;
  window._curRptTitle=titles[type]||type;
  // Show header Export button and update modal label
  var eb=$('rpExportBtn'); if(eb)eb.style.display='';
  var pb=$('rpPrintBtn'); if(pb)pb.style.display='';
  var el=$('rpExportLabel'); if(el)el.textContent=titles[type]||type;
  $('rpBox').scrollIntoView({behavior:'smooth',block:'start'});
}

/* ── printReport: sirf report box ko print karta hai, pura page nahi ── */
function printReport(){
  var title=window._curRptTitle||'Report';
  var bodyHTML=$('rpBody') ? $('rpBody').innerHTML : '';
  // Remove the print button itself from the printed output
  var cleanBody=bodyHTML.replace(/<div[^>]*margin-top:14px[^>]*>[\s\S]*?<\/div>/,'');

  // Collect all .mr rows as styled print HTML
  var css=`
@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:'Figtree',Arial,sans-serif;background:#fff;padding:28px 32px;color:#152219;}
.np{display:none!important;}
h2{font-size:18px;font-weight:800;color:#0e3824;margin-bottom:4px;}
.rpt-meta{font-size:11px;color:#6b7280;margin-bottom:18px;padding-bottom:10px;border-bottom:2px solid #134a2a;}
.mr{display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px solid #f0f4f1;}
.mr:last-child{border-bottom:none;}
.mr-k{font-size:13px;color:#3d5546;font-weight:500;}
.mr-v{font-size:13px;font-weight:700;color:#152219;}
.pos{color:#1a6636;}
.neg{color:#ef4444;}
[style*="font-size:10px"][style*="font-weight:700"]{
  font-size:10px;font-weight:700;color:#7a9888;
  letter-spacing:1px;text-transform:uppercase;
  padding:12px 0 4px;border-top:1px solid #f0f4f1;
  margin-top:6px;display:block;
}
.hdr{background:linear-gradient(135deg,#0d3b1e,#1a6636);padding:16px 20px;border-radius:10px;display:flex;align-items:center;gap:14px;margin-bottom:20px;}
.hdr-logo{width:38px;height:38px;background:rgba(255,255,255,.15);border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:900;color:#c9a227;border:2px solid rgba(255,255,255,.2);}
.hdr-info h1{font-size:14px;font-weight:800;color:#fff;margin:0;}
.hdr-info p{font-size:9px;color:rgba(255,255,255,.55);letter-spacing:2px;text-transform:uppercase;margin-top:2px;}
.hdr-badge{margin-left:auto;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);color:#fff;font-size:9px;font-weight:800;letter-spacing:1px;padding:4px 10px;border-radius:50px;}
@media print{.np{display:none!important;}}`;

  var rf=window._rpFilter;
  var filterNote='';
  if(rf&&(rf.month||rf.from||rf.to)){
    filterNote=rf.month?' · Filter: '+rf.month:(rf.from&&rf.to?' · Range: '+rf.from+' → '+rf.to:(rf.from?' · From: '+rf.from:(rf.to?' · Until: '+rf.to:'')));
  }

  var h=`<html><head><meta charset="UTF-8"><title>${title}</title><style>${css}</style></head><body>
    <div class="hdr">
      <div class="hdr-logo">${getLogoBadgeInner()}</div>
      <div class="hdr-info"><h1>${D.settings.instName}</h1><p>Finance Department · ${D.settings.city}</p></div>
      <div class="hdr-badge">${title.toUpperCase()}</div>
    </div>
    <div class="rpt-meta">Generated: ${new Date().toLocaleString()} &nbsp;|&nbsp; ${D.settings.instName} · CampusTreasury${filterNote}</div>
    ${cleanBody}
    <div class="np" style="margin-top:16px">
      <button onclick="window.print()" style="background:#1a6636;color:#fff;border:none;border-radius:7px;padding:8px 18px;font-size:13px;font-weight:700;cursor:pointer">🖨️ Print</button>
    </div>
  </body></html>`;
  showPrintPreview(h, title);
}

/* ══════════════════════════════════════════════════════════════════
   DATE FILTER — Reports page ke liye month / custom range filter
══════════════════════════════════════════════════════════════════ */

// Populate month dropdown from actual data
function rpPopulateMonths(){
  var sel=$('rpMonthSel'); if(!sel)return;
  var months=new Set();
  // Fee dates
  D.fees.forEach(f=>{
    if(!f.date||f.date==='-')return;
    var d=new Date(f.date);
    if(!isNaN(d))months.add(d.toLocaleString('default',{month:'long',year:'numeric'}));
  });
  // Expense dates
  D.expenses.forEach(e=>{
    if(!e.date||e.date==='-')return;
    var d=new Date(e.date);
    if(!isNaN(d))months.add(d.toLocaleString('default',{month:'long',year:'numeric'}));
  });
  // Salary months (already "March 2025" format)
  D.salaries.forEach(s=>{
    if(s.month)months.add(s.month);
  });
  // Sort chronologically
  var sorted=[...months].sort((a,b)=>new Date('1 '+a)-new Date('1 '+b));
  sel.innerHTML='<option value="">All Months</option>';
  sorted.forEach(m=>{
    var o=document.createElement('option');
    o.value=m; o.textContent=m;
    sel.appendChild(o);
  });
}

function rpToggleDateFilter(){
  var bar=$('rpDateBar');
  if(!bar)return;
  var isHidden=bar.style.display==='none';
  bar.style.display=isHidden?'':'none';
  var btn=$('rpDateToggleBtn');
  if(btn) btn.textContent=isHidden?'✕ Hide Filter':'📅 Date Filter';
  if(isHidden) rpPopulateMonths();
}

function rpApplyDateFilter(){
  var monthSel=($('rpMonthSel')||{}).value||'';
  var fromVal=($('rpFromDate')||{}).value||'';
  var toVal=($('rpToDate')||{}).value||'';

  // If month selected, clear custom range
  if(monthSel){
    if($('rpFromDate'))$('rpFromDate').value='';
    if($('rpToDate'))$('rpToDate').value='';
    fromVal=''; toVal='';
  }

  window._rpFilter={month:monthSel, from:fromVal, to:toVal};

  // Date Filter button ko highlight karo jab filter active ho
  var btn=$('rpDateToggleBtn');
  var isActive=!!(monthSel||fromVal||toVal);
  if(btn){
    btn.style.background=isActive?'var(--g6)':'';
    btn.style.color=isActive?'#fff':'';
    btn.style.borderColor=isActive?'var(--g6)':'';
  }

  // Update label
  var lbl=$('rpDateLabel');
  if(lbl){
    if(monthSel){lbl.textContent='📅 '+monthSel;lbl.style.display='';}
    else if(fromVal&&toVal){lbl.textContent='📅 '+fromVal+' → '+toVal;lbl.style.display='';}
    else if(fromVal){lbl.textContent='📅 From '+fromVal;lbl.style.display='';}
    else if(toVal){lbl.textContent='📅 Until '+toVal;lbl.style.display='';}
    else{lbl.style.display='none';}
  }

  // Chart ko bhi filter ke hisaab se refresh karo
  try{rReports();}catch(e){console.warn(e);}

  // Re-render current report if one is active
  if(window._curRptType) rpShow(window._curRptType);
}

function rpClearDateFilter(){
  if($('rpMonthSel'))$('rpMonthSel').value='';
  if($('rpFromDate'))$('rpFromDate').value='';
  if($('rpToDate'))$('rpToDate').value='';
  window._rpFilter=null;
  var lbl=$('rpDateLabel'); if(lbl)lbl.style.display='none';
  // Date filter button background reset
  var btn=$('rpDateToggleBtn');
  if(btn){btn.style.background='';btn.style.color='';}
  // Chart ko bhi refresh karo (filter clear ho gaya)
  try{rReports();}catch(e){console.warn(e);}
  if(window._curRptType) rpShow(window._curRptType);
}

// Helper: date string ko parse karke Date return karo
function _rpParseDate(str){
  if(!str||str==='-')return null;
  var d=new Date(str);
  if(!isNaN(d))return d;
  var p=str.trim().split(' ');
  if(p.length>=3){d=new Date(p[1]+' '+p[0]+' '+p[2]);if(!isNaN(d))return d;}
  return null;
}

// Helper: kya yeh date filter ke andar hai?
function _rpDateInRange(dateStr){
  var f=window._rpFilter;
  if(!f||(!f.month&&!f.from&&!f.to))return true; // no filter

  var d=_rpParseDate(dateStr);
  if(!d)return false;

  if(f.month){
    var dLabel=d.toLocaleString('default',{month:'long',year:'numeric'});
    return dLabel===f.month;
  }
  if(f.from){var fd=new Date(f.from);if(d<fd)return false;}
  if(f.to){var td=new Date(f.to);td.setHours(23,59,59);if(d>td)return false;}
  return true;
}

// Helper: salary month string filter check
function _rpSalInRange(monthStr){
  var f=window._rpFilter;
  if(!f||(!f.month&&!f.from&&!f.to))return true;
  if(!monthStr)return false;

  if(f.month) return monthStr===f.month;

  // Convert salary month to a mid-month date for range check
  var d=new Date('15 '+monthStr);
  if(isNaN(d))return false;
  if(f.from){var fd=new Date(f.from);if(d<fd)return false;}
  if(f.to){var td=new Date(f.to);if(d>td)return false;}
  return true;
}

/* ── exportReport: report data ko CSV / Excel / PDF mein export karta hai ── */
function exportReport(format){
  var type=window._curRptType||'';
  var title=window._curRptTitle||'Report';

  // Date filter — same as rpShow mein use hota hai
  var filteredFees    =D.fees.filter(f=>_rpDateInRange(f.date));
  var filteredExpenses=D.expenses.filter(e=>_rpDateInRange(e.date));
  var filteredSalaries=D.salaries.filter(s=>_rpSalInRange(s.month));
  // Transport Fee is real college income too — include it in exports.
  var filteredTransportFees=D.transportFees.filter(t=>_rpDateInRange(t.date));

  /* ── Build rows from current report type ── */
  var headers=[], rows=[], colWidths=[];

  if(type==='fee'||type==='fee-boys'||type==='fee-girls'){
    headers=['Student','Roll No','Class','Gender','Fee Billed (Rs)','Fee Paid (Rs)','Transport Paid (Rs)','Pending (Rs)','Status'];
    var stuArr=type==='fee-boys'
      ? D.students.filter(s=>s.gender==='Male'&&(s.cls||'').startsWith('Inter-'))
      : type==='fee-girls'
      ? D.students.filter(s=>s.gender==='Female'&&(s.cls||'').startsWith('Inter-'))
      : D.students;
    rows=stuArr.map(s=>{
      var paid=filteredFees.filter(f=>f.roll===s.roll&&f.status==='Paid').reduce((a,b)=>a+b.amt,0);
      var tfPaid=filteredTransportFees.filter(t=>t.roll===s.roll&&t.status==='Paid').reduce((a,b)=>a+b.amt,0);
      var tfBilled=filteredTransportFees.filter(t=>t.roll===s.roll).reduce((a,b)=>a+b.amt,0);
      var billed=(s.fee||0)+tfBilled;
      return[s.name,s.roll,s.cls||'',s.gender||'',billed,paid,tfPaid,Math.max(0,billed-paid-tfPaid),s.status];
    });
    colWidths=[25,15,14,10,15,15,15,14,10];
  } else if(type==='salary'){
    headers=['Name','Designation','Basic (Rs)','Allowance (Rs)','Deduction (Rs)','Net Pay (Rs)','Month','Status'];
    rows=filteredSalaries.map(s=>[s.name,s.desig,s.basic,s.allow,s.deduct||0,netPay(s),s.month,s.status]);
    colWidths=[25,20,14,15,14,14,16,10];
  } else if(type==='expense'){
    headers=['Description','Category','Amount (Rs)','Date','Approved By','Status'];
    rows=filteredExpenses.map(e=>[e.desc,e.cat,e.amt,e.date,e.approver,e.status]);
    colWidths=[35,18,14,14,18,12];
  } else if(type==='balance'){
    var tfInc=filteredTransportFees.filter(t=>t.status==='Paid').reduce((a,b)=>a+b.amt,0);
    var inc=filteredFees.reduce((a,b)=>a+feePaidAmt(b),0)+tfInc;
    var salExp=filteredSalaries.filter(s=>s.status==='Paid').reduce((a,b)=>a+netPay(b),0);
    var othExp=filteredExpenses.reduce((a,b)=>a+b.amt,0);
    var net=inc-salExp-othExp;
    headers=['Item','Amount (Rs)'];
    rows=[['Total Fee Income (incl. Transport)',inc],['— of which Transport Fee',tfInc],['Salary Expenditure',salExp],['Other Expenses',othExp],['Total Expenditure',salExp+othExp],['Net Balance ('+(net>=0?'Surplus':'Deficit')+')',Math.abs(net)]];
    colWidths=[35,20];
  } else if(type==='student'||type==='student-boys'||type==='student-girls'){
    headers=['Name','Roll No','Class','Gender','Semester','Fee (Rs)','Status'];
    var stuArr2=type==='student-boys'
      ? D.students.filter(s=>s.gender==='Male'&&(s.cls||'').startsWith('Inter-'))
      : type==='student-girls'
      ? D.students.filter(s=>s.gender==='Female'&&(s.cls||'').startsWith('Inter-'))
      : D.students;
    rows=stuArr2.map(s=>[s.name,s.roll,s.cls||'',s.gender||'',s.sem||'',s.fee||0,s.status]);
    colWidths=[25,15,14,10,10,12,10];
  } else if(type==='annual'){
    // Multi-section annual export
    headers=['Section','Item','Value'];
    var aTfInc=filteredTransportFees.filter(t=>t.status==='Paid').reduce((a,b)=>a+b.amt,0);
    var aInc=filteredFees.reduce((a,b)=>a+feePaidAmt(b),0)+aTfInc;
    var aSal=filteredSalaries.filter(s=>s.status==='Paid').reduce((a,b)=>a+netPay(b),0);
    var aExp=filteredExpenses.reduce((a,b)=>a+b.amt,0);
    var aNet=aInc-aSal-aExp;
    var feeBilled=D.students.reduce((a,s)=>a+s.fee,0)+filteredTransportFees.reduce((a,b)=>a+b.amt,0);
    var feeRate=feeBilled>0?((aInc/feeBilled)*100).toFixed(1)+'%':'0%';
    rows=[
      ['Enrollment','Total Students',D.students.length],
      ['Enrollment','Male Students',D.students.filter(s=>s.gender==='Male').length],
      ['Enrollment','Female Students',D.students.filter(s=>s.gender==='Female').length],
      ['Staff','Total Employees',D.employees.length],
      ['Fee','Total Billed (Rs, incl. Transport)',feeBilled],
      ['Fee','Total Collected (Rs, incl. Transport)',aInc],
      ['Fee','— of which Transport Fee (Rs)',aTfInc],
      ['Fee','Collection Rate',feeRate],
      ['Salary','Total Paid (Rs)',aSal],
      ['Expenses','Total Other Expenses (Rs)',aExp],
      ['Balance','Total Expenditure (Rs)',aSal+aExp],
      ['Balance','Net Balance (Rs)',(aNet>=0?'+':'')+aNet],
    ];
    // Add month-wise rows
    var mSet={};
    filteredFees.filter(f=>f.status==='Paid'&&f.date&&f.date!=='-').forEach(f=>{
      var d=new Date(f.date);if(isNaN(d))return;
      var k=d.toLocaleString('default',{month:'short',year:'numeric'});
      mSet[k]=mSet[k]||{inc:0,exp:0};mSet[k].inc+=f.amt;
    });
    filteredTransportFees.filter(t=>t.status==='Paid'&&t.date&&t.date!=='-').forEach(t=>{
      var d=new Date(t.date);if(isNaN(d))return;
      var k=d.toLocaleString('default',{month:'short',year:'numeric'});
      mSet[k]=mSet[k]||{inc:0,exp:0};mSet[k].inc+=t.amt;
    });
    filteredExpenses.forEach(e=>{
      var d=new Date(e.date);if(isNaN(d))return;
      var k=d.toLocaleString('default',{month:'short',year:'numeric'});
      mSet[k]=mSet[k]||{inc:0,exp:0};mSet[k].exp+=e.amt;
    });
    Object.keys(mSet).sort().forEach(m=>{
      rows.push(['Monthly',m+' — Income (Rs)',mSet[m].inc]);
      rows.push(['Monthly',m+' — Expenses (Rs)',mSet[m].exp]);
    });
    colWidths=[18,35,18];
  } else {
    toast('Export not available for this report');return;
  }

  var cfg={title:title,headers:headers,rows:()=>rows,colWidths:colWidths};
  var slug=type+'_report';
  if(format==='csv')     exportCSV(cfg,slug);
  else if(format==='excel') exportExcel(cfg,slug);
  else if(format==='pdf')   exportPDF(cfg,slug);
}

/* ══════════════════════════════════════════════════
   TRANSACTIONS
══════════════════════════════════════════════════ */
let TF={q:'',ty:'',from:'',to:'',sortKey:'date',sortDir:1,page:1};
const TX_PAGE_SIZE=25;

function txParseDate(dateStr){
  if(!dateStr||dateStr==='-')return null;
  var d=new Date(dateStr);
  if(isNaN(d.getTime())){var p=dateStr.trim().split(' ');if(p.length>=3)d=new Date(p[1]+' '+p[0]+' '+p[2]);}
  return isNaN(d.getTime())?null:d;
}

function txRunningBalances(){
  // Cumulative balance always reflects the FULL ledger in chronological order,
  // independent of whatever filter/sort/page is currently applied to the view.
  const withDates=D.tx.map((t,origIdx)=>({t,origIdx,ts:(txParseDate(t.date)||new Date(0)).getTime()}));
  withDates.sort((a,b)=>a.ts-b.ts||a.origIdx-b.origIdx);
  let bal=0;const map={};
  withDates.forEach(({t})=>{bal+=(t.type==='Income'?t.amt:-t.amt);map[t.id]=bal;});
  return map;
}
// Returns D.tx sorted chronologically (oldest first) — same order txRunningBalances()
// uses internally. Any full-ledger view (print, export) must use this so the printed
// Balance column reads as a proper running total top-to-bottom, instead of jumping
// around because rows were left in fee/salary/expense insertion order.
function txChronological(){
  return D.tx.map((t,origIdx)=>({t,origIdx,ts:(txParseDate(t.date)||new Date(0)).getTime()}))
    .sort((a,b)=>a.ts-b.ts||a.origIdx-b.origIdx)
    .map(x=>x.t);
}

function openAddTx(){
  $('mtd').value='';$('mtc').value='';$('mta').value=1000;$('mtt').value='Income';
  $('mtdt').value=new Date().toISOString().slice(0,10);
  showMo('addTx');
}
function saveManualTx(){
  if(!requirePerm('canEdit','add transaction'))return;
  const d=$('mtd').value.trim();const a=$('mta').value.trim();
  if(!d||!a){toast('Description and Amount are required');return;}
  const amtVal=parseInt(a);
  if(isNaN(amtVal)||amtVal<=0){toast('Please enter a valid amount greater than 0');return;}
  const type=$('mtt').value;
  const dateVal=$('mtdt').value;
  const dateStr=dateVal?new Date(dateVal).toLocaleDateString('en-PK',{day:'numeric',month:'short',year:'numeric'}):todayStr();
  const cat=$('mtc').value.trim()||(type==='Income'?'Other Income':'Other');
  const id='MAN-'+Date.now().toString().slice(-6);
  D.manualTx.push({id,desc:d,type,amt:amtVal,date:dateStr,cat,srcType:'manual'});
  auditLog('action','Manual transaction added: '+d+' ('+type+', Rs '+fmt(amtVal)+')');
  buildTx();rTx();rDash();closeMo('addTx');toast('✅ Transaction added!');
}
function deleteManualTx(id){
  const idx=D.manualTx.findIndex(m=>m.id===id);
  if(idx===-1)return;
  if(!requirePerm('canDelete','delete transaction'))return;
  if(!confirm('Delete this manual transaction? This cannot be undone.'))return;
  const removed=D.manualTx.splice(idx,1)[0];
  auditLog('action','Manual transaction deleted: '+removed.desc);
  buildTx();rTx();rDash();closeMo('viewTx');toast('🗑️ Transaction deleted');
}

function viewTx(id){
  const t=D.tx.find(x=>x.id===id);
  if(!t)return;
  $('vTxId').textContent=t.id;
  const base=[['Description',`<strong>${t.desc}</strong>`],['Type',bdg(t.type)],['Amount',`<strong class="${t.type==='Income'?'pos':'neg'}">${t.type==='Income'?'+':'-'}Rs ${fmt(t.amt)}</strong>`],['Date',t.date],['Category',t.cat]];
  let extra=[];
  if(t.srcType==='fee'){
    const f=D.fees[t.srcIdx];
    if(f)extra=[['Receipt No',`<code class="id-tag">${f.receipt||'-'}</code>`],['Student',f.student],['Roll Number',f.roll],['Semester',f.sem],['Method',f.method&&f.method!=='-'?f.method:'-'],['Status',bdg(f.status)]];
  }else if(t.srcType==='salary'){
    const s=D.salaries[t.srcIdx];
    if(s)extra=[['Salary ID',`<code class="id-tag">${s.salId||'-'}</code>`],['Employee',s.name],['Designation',s.desig],['Department',s.dept||'-'],['Month',s.month],['Status',bdg(s.status)]];
  }else if(t.srcType==='expense'){
    const e=D.expenses[t.srcIdx];
    if(e)extra=[['Vendor',e.vendor||'-'],['Approved By',e.approver||'-'],['Financial Year',e.year||'-'],['Status',bdg(e.status||'Approved')]];
  }else if(t.srcType==='transportFee'){
    const tf=D.transportFees[t.srcIdx];
    if(tf)extra=[['Receipt No',`<code class="id-tag">${tf.receipt||'-'}</code>`],['Student',tf.student],['Roll Number',tf.roll],['Route',tf.route||'-'],['Method',tf.method&&tf.method!=='-'?tf.method:'-'],['Status',bdg(tf.status)]];
  }else if(t.srcType==='manual'){
    extra=[['Source','Manually added entry (not linked to fee/salary/expense records)']];
  }
  const rows=base.concat(extra);
  $('vTxBody').innerHTML=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:13px;margin-bottom:12px">${rows.map(([k,v])=>`<div><div style="font-size:10px;font-weight:700;color:var(--s4);text-transform:uppercase;letter-spacing:1px;margin-bottom:3px">${k}</div><div>${v}</div></div>`).join('')}</div>${t.srcType==='manual'?`<button class="btn btn-red" style="padding:8px 16px;font-size:12px" onclick="deleteManualTx('${t.id}')">🗑️ Delete Transaction</button>`:''}`;
  showMo('viewTx');
}

function rTx(){
  const fromD=TF.from?new Date(TF.from):null;
  const toD=TF.to?new Date(TF.to):null;
  let data=D.tx.filter(t=>{
    if(TF.q&&!t.desc.toLowerCase().includes(TF.q)&&!t.id.toLowerCase().includes(TF.q))return false;
    if(TF.ty&&t.type!==TF.ty)return false;
    if(fromD||toD){
      const td=txParseDate(t.date);
      if(!td)return false;
      if(fromD&&td<fromD)return false;
      if(toD&&td>toD)return false;
    }
    return true;
  });
  if(TF.sortKey){
    const k=TF.sortKey,dir=TF.sortDir;
    data=data.slice().sort((a,b)=>{
      let av=a[k],bv=b[k];
      if(k==='amt'){av=Number(av);bv=Number(bv);}
      else if(k==='date'){av=txParseDate(a.date)||new Date(0);bv=txParseDate(b.date)||new Date(0);}
      if(av<bv)return -1*dir; if(av>bv)return 1*dir; return 0;
    });
  }
  const inc=D.tx.filter(t=>t.type==='Income').reduce((a,b)=>a+b.amt,0);
  const exp=D.tx.filter(t=>t.type==='Expense').reduce((a,b)=>a+b.amt,0);
  const bal=inc-exp;
  $('tx-in').textContent=fmt(inc);$('tx-out').textContent=fmt(exp);
  $('tx-bal').textContent=(bal<0?'-':'')+fmt(Math.abs(bal));
  $('nb-t').textContent=D.tx.length;

  const total=data.length;
  const totalPages=Math.max(1,Math.ceil(total/TX_PAGE_SIZE));
  if(TF.page>totalPages)TF.page=totalPages;
  if(TF.page<1)TF.page=1;
  const startIdx=(TF.page-1)*TX_PAGE_SIZE;
  const pageData=data.slice(startIdx,startIdx+TX_PAGE_SIZE);
  const balMap=txRunningBalances();

  $('txTB').innerHTML=pageData.map(t=>{
    const rb=balMap[t.id]||0;
    return `<tr onclick="viewTx('${t.id}')" style="cursor:pointer" title="Click for details">
    <td><code class="tx-tag">${t.id}</code></td>
    <td><strong>${t.desc}</strong></td>
    <td>${bdg(t.type)}</td>
    <td class="${t.type==='Income'?'pos':'neg'}">${t.type==='Income'?'+':'-'}Rs ${fmt(t.amt)}</td>
    <td>${t.date}</td><td>${t.cat}</td>
    <td class="${rb<0?'neg':'pos'}">Rs ${(rb<0?'-':'')+fmt(Math.abs(rb))}</td>
  </tr>`;}).join('');

  const pgn=$('txPgn');
  if(pgn){
    if(total===0){
      pgn.innerHTML='';
    }else{
      const rangeStart=startIdx+1,rangeEnd=Math.min(startIdx+TX_PAGE_SIZE,total);
      pgn.innerHTML=`<span>Showing ${rangeStart}–${rangeEnd} of ${total}</span>
        <button class="btn btn-outline" style="padding:5px 10px" ${TF.page<=1?'disabled':''} onclick="txSetPage(${TF.page-1})">‹ Prev</button>
        <span>Page ${TF.page} of ${totalPages}</span>
        <button class="btn btn-outline" style="padding:5px 10px" ${TF.page>=totalPages?'disabled':''} onclick="txSetPage(${TF.page+1})">Next ›</button>`;
    }
  }

  ['id','amt','date'].forEach(k=>{
    const el=$('txsi-'+k);
    if(el) el.textContent = TF.sortKey===k ? (TF.sortDir===1?' ▲':' ▼') : '';
  });
}
function fTx(v){TF.q=v.toLowerCase();TF.page=1;rTx();}
function fTxT(v){TF.ty=v;TF.page=1;rTx();}
function fTxFrom(v){TF.from=v;TF.page=1;rTx();}
function fTxTo(v){TF.to=v;TF.page=1;rTx();}
function sortTx(key){
  if(TF.sortKey===key){TF.sortDir=-TF.sortDir;}else{TF.sortKey=key;TF.sortDir=1;}
  TF.page=1;
  rTx();
}
function txSetPage(n){TF.page=n;rTx();}

function printTx(){
  const bm=txRunningBalances();
  const rows=txChronological().map(t=>[t.id,t.desc,t.type,(t.type==='Income'?'+':'-')+'Rs '+t.amt.toLocaleString(),t.date,t.cat,(bm[t.id]<0?'-':'')+'Rs '+Math.abs(bm[t.id]||0).toLocaleString()]);
  const thead='<th>ID</th><th>Description</th><th>Type</th><th>Amount</th><th>Date</th><th>Category</th><th>Balance</th>';
  const body=rows.map(r=>'<tr>'+r.map(c=>'<td>'+c+'</td>').join('')+'</tr>').join('');
  const h='<html><head><meta charset="UTF-8"><style>*{box-sizing:border-box;}body{font-family:Arial,sans-serif;padding:22px;}h2{color:#1a6636;font-size:18px;margin-bottom:6px;}.inf{font-size:12px;color:#666;margin-bottom:12px;}table{width:100%;border-collapse:collapse;}th{background:#1a6636;color:#fff;padding:7px 9px;text-align:left;font-size:11px;}td{padding:7px 9px;border-bottom:1px solid #e0e0e0;font-size:12px;}tr:nth-child(even)td{background:#f5faf6;}@media print{.np{display:none;}}</style></head><body><h2>'+D.settings.instName+' - Transactions</h2><div class="inf">Generated: '+new Date().toLocaleString()+' | Total: '+D.tx.length+'</div><table><thead><tr>'+thead+'</tr></thead><tbody>'+body+'</tbody></table><div class="np" style="margin-top:12px"><button onclick="window.print()" style="padding:7px 16px;background:#1a6636;color:#fff;border:none;border-radius:6px;cursor:pointer;">Print</button></div></body></html>';
  showPrintPreview(h,'Transactions');
}

/* ══════════════════════════════════════════════════
   FEE REMINDER SYSTEM
══════════════════════════════════════════════════ */
function getRemTemplate(key){
  const inst=D.settings.instName;
  const templates = {
    urdu: `Assalam o Alaikum, Dear Parent/Guardian of {name},

This is a reminder from ${inst} that the fee for {program} is still outstanding.

Roll No: {roll}
Amount Due: Rs {amount}
Status: {status}

Kindly pay the dues as soon as possible to avoid any action.

Regards,
${inst} Finance Office
042-35761234 / 0300-8001234`,

    english: `Dear Parent/Guardian of {name},

This is a reminder from ${inst} that the tuition fee for {program} is still outstanding.

Roll No: {roll}
Amount Due: Rs {amount}
Status: {status}

Kindly clear the dues at your earliest convenience to avoid any inconvenience.

Best regards,
${inst}
Finance Department`,

    formal: `${inst.toUpperCase()} — OFFICIAL FEE NOTICE

Student: {name}
Roll No: {roll}
Program: {program}
Amount Due: Rs {amount}
Payment Status: {status}

This is an official reminder that fee payment is due. Please visit the accounts office or pay online within 3 working days.

Failure to pay may result in suspension of student services.

Finance Office | ${inst}`
  };
  return templates[key]||'';
}

let _remState = {
  channel: 'whatsapp',
  filter: 'both',
  selected: new Set(),
  log: []
};

function getReminderStudents() {
  const f = _remState.filter;
  return D.students.filter(s => {
    if (f === 'both') return s.status === 'Pending' || s.status === 'Overdue';
    return s.status === f;
  });
}

function buildReminderTable() {
  const students = getReminderStudents();
  const tb = $('rem-student-tb');
  if (!tb) return;
  if (!students.length) {
    tb.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:20px;color:var(--s4);font-size:13px">No pending/overdue students found</td></tr>';
    updateRemSummary();
    return;
  }
  tb.innerHTML = students.map((s, i) => {
    const fee = D.fees.find(f => f.roll === s.roll);
    const amt = fee ? fee.amt : s.fee;
    const checked = _remState.selected.has(s.roll);
    const statusCls = s.status === 'Overdue' ? 'badge bg-r' : 'badge bg-y';
    return `<tr id="rem-row-${i}">
      <td><input type="checkbox" class="rem-chk" data-roll="${s.roll}" ${checked ? 'checked' : ''} onchange="reminderToggle('${s.roll}',this.checked)" style="cursor:pointer"></td>
      <td>
        <div style="display:flex;align-items:center;gap:8px">
          <div style="width:28px;height:28px;border-radius:50%;background:${s.status==='Overdue'?'var(--rd)':'var(--yl)'};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff;flex-shrink:0">${s.name[0]}</div>
          <div>
            <div style="font-size:13px;font-weight:600;color:var(--s6)">${s.name}</div>
            <div style="font-size:11px;color:var(--s4)">${s.father||''}</div>
          </div>
        </div>
      </td>
      <td><code class="id-tag">${s.roll}</code></td>
      <td style="font-size:12px">${s.cls||s.dept||''}</td>
      <td style="font-size:12px;color:var(--bl)">${s.contact||'—'}</td>
      <td style="font-weight:700;color:var(--rd)">Rs ${fmt(amt)}</td>
      <td><span class="${statusCls}">${s.status}</span></td>
    </tr>`;
  }).join('');
  updateRemSummary();
}

function reminderToggle(roll, checked) {
  if (checked) _remState.selected.add(roll);
  else _remState.selected.delete(roll);
  updateRemSummary();
  syncRemAllCheckbox();
}

function reminderSelectAll(checked) {
  const students = getReminderStudents();
  if (checked) students.forEach(s => _remState.selected.add(s.roll));
  else _remState.selected.clear();
  buildReminderTable();
  const hdr = $('rem-chk-all'); if(hdr) hdr.checked = checked;
}

function syncRemAllCheckbox() {
  const students = getReminderStudents();
  const allChk = students.length > 0 && students.every(s => _remState.selected.has(s.roll));
  const hdr = $('rem-chk-all'); if(hdr) hdr.checked = allChk;
}

function reminderFilterStatus(val) {
  _remState.filter = val;
  _remState.selected.clear();
  buildReminderTable();
}

function updateRemSummary() {
  const cnt = _remState.selected.size;
  const el = $('rem-send-summary');
  if (el) {
    if (cnt === 0) { el.textContent = '0 students selected — check boxes above'; el.style.color = 'var(--s4)'; }
    else { el.textContent = cnt + ' student' + (cnt !== 1 ? 's' : '') + ' selected'; el.style.color = 'var(--g6)'; }
  }
}

function setReminderTemplate(key) {
  const ta = $('rem-template');
  if (ta) ta.value = getRemTemplate(key);
}

// Returns the amount actually due for a student — prefers a fee record whose
// status matches the student's own status (Pending/Overdue), falling back to
// any unpaid record, then to the student's base fee. Using D.fees.find() by
// roll alone (the old approach) could return a Paid installment's amount
// instead of the real due amount when a student has multiple fee/instalment
// records.
function getStudentDueFee(student){
  const own = D.fees.filter(f=>f.roll===student.roll && f.status===student.status);
  if(own.length) return own.reduce((a,b)=>a+b.amt,0);
  const unpaid = D.fees.filter(f=>f.roll===student.roll && f.status!=='Paid');
  if(unpaid.length) return unpaid.reduce((a,b)=>a+b.amt,0);
  // Tuition fee is fully settled — but the student may still owe Transport
  // Fee, which is tracked separately and wouldn't show up above.
  const unpaidTf = D.transportFees.filter(t=>t.roll===student.roll && t.status!=='Paid');
  if(unpaidTf.length) return unpaidTf.reduce((a,b)=>a+b.amt,0);
  return student.fee;
}

function buildMessage(student, template) {
  const amt = getStudentDueFee(student);
  return template
    .replace(/{name}/g, student.name)
    .replace(/{roll}/g, student.roll)
    .replace(/{amount}/g, fmt(amt))
    .replace(/{program}/g, student.cls || student.dept || '')
    .replace(/{status}/g, student.status);
}

function openReminderModal(channel) {
  if (_remState.selected.size === 0) { toast('⚠️ Please select at least one student'); return; }
  _remState.channel = channel;
  const template = ($('rem-template') || {}).value || getRemTemplate('english');
  const selStudents = D.students.filter(s => _remState.selected.has(s.roll));
  const totalAmt = selStudents.reduce((a, s) => a + getStudentDueFee(s), 0);

  if($('rem-modal-title')) $('rem-modal-title').textContent = channel === 'whatsapp' ? '📱 WhatsApp Reminder Preview' : '💬 SMS Reminder Preview';
  if($('rem-modal-cnt')) $('rem-modal-cnt').textContent = selStudents.length;
  if($('rem-modal-amt')) $('rem-modal-amt').textContent = 'Rs '+fmt(totalAmt);
  if($('rem-modal-type-badge')) $('rem-modal-type-badge').textContent = channel === 'whatsapp' ? 'WA' : 'SMS';

  // Message preview for first student
  if($('rem-modal-preview') && selStudents[0])
    $('rem-modal-preview').textContent = buildMessage(selStudents[0], template);

  // Recipients list
  if($('rem-modal-list'))
    $('rem-modal-list').innerHTML = selStudents.map((s,i) => {
      const amt=getStudentDueFee(s);
      return `<div style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-bottom:${i<selStudents.length-1?'1px solid var(--s1)':'none'}">
        <div style="width:26px;height:26px;border-radius:50%;background:${s.status==='Overdue'?'var(--rd)':'var(--yl)'};display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#fff;flex-shrink:0">${s.name[0]}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:600;color:var(--s6)">${s.name}</div>
          <div style="font-size:11px;color:var(--s4)">${s.contact||'No contact'} · ${s.roll}</div>
        </div>
        <div style="font-size:12px;font-weight:700;color:var(--rd);flex-shrink:0">Rs ${fmt(amt)}</div>
      </div>`;
    }).join('');

  // Update send button style/label
  const btn = $('rem-modal-send-btn');
  if (btn) {
    if (channel === 'whatsapp') { btn.style.background='#25D366'; btn.textContent='📱 Open WhatsApp & Send'; }
    else { btn.style.background='#0088cc'; btn.textContent='💬 Launch SMS App'; }
  }
  showMo('reminderPreview');
}

function sendBulkReminder(channel) {
  if (_remState.selected.size === 0) { toast('⚠️ Please select at least one student'); return; }
  openReminderModal(channel);
}

function confirmSendReminders() {
  const channel = _remState.channel;
  const template = ($('rem-template') || {}).value || getRemTemplate('english');
  const selStudents = D.students.filter(s => _remState.selected.has(s.roll));

  if (channel === 'whatsapp') {
    // Open WhatsApp links one by one (opens in new tabs/app)
    selStudents.forEach((s, i) => {
      const contact = (s.contact || '').replace(/\D/g, '');
      const msg = buildMessage(s, template);
      const encoded = encodeURIComponent(msg);
      // Stagger slightly to avoid browser blocking
      setTimeout(() => {
        const num = contact.startsWith('92') ? contact : '92' + contact.replace(/^0/, '');
        window.open('https://wa.me/' + num + '?text=' + encoded, '_blank');
      }, i * 400);
    });
  } else {
    // SMS: open one sms: link per selected student, staggered like WhatsApp,
    // so all selected students get a pre-filled SMS draft opened — not just
    // the first one. Note: some browsers block multiple popups triggered
    // this way; if that happens the person may need to allow popups for
    // this site once.
    selStudents.forEach((s, i) => {
      const contact = (s.contact || '').replace(/\D/g, '');
      const msg = buildMessage(s, template);
      setTimeout(() => {
        window.open('sms:' + contact + '?body=' + encodeURIComponent(msg));
      }, i * 500);
    });
  }

  // Log the action
  const now = new Date();
  const logEntry = {
    time: now.toLocaleString('en-PK'),
    channel,
    count: selStudents.length,
    names: selStudents.map(s=>s.name).join(', '),
    by: SESSION.user ? SESSION.user.name : 'Admin'
  };
  _remState.log.unshift(logEntry);
  auditLog('action', 'Fee reminders sent via ' + channel.toUpperCase() + ' to ' + selStudents.length + ' students');

  // Update log UI
  const logEl = $('rem-log');
  const logList = $('rem-log-list');
  if (logEl && logList) {
    logEl.style.display = 'block';
    logList.innerHTML = _remState.log.slice(0, 10).map(l => `
      <div style="display:flex;align-items:flex-start;gap:10px;padding:8px 12px;border-bottom:1px solid var(--s1);font-size:12px">
        <div style="width:28px;height:28px;border-radius:6px;background:${l.channel==='whatsapp'?'#25D366':'#0088cc'};display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0">${l.channel==='whatsapp'?'📱':'💬'}</div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:600;color:var(--s6)">${l.channel==='whatsapp'?'WhatsApp':'SMS'} — ${l.count} student${l.count!==1?'s':''} · by ${l.by}</div>
          <div style="color:var(--s4);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${l.names}</div>
        </div>
        <div style="color:var(--s4);white-space:nowrap;flex-shrink:0">${l.time}</div>
      </div>`).join('');
  }

  closeMo('reminderPreview');
  toast('✅ ' + selStudents.length + ' reminder' + (selStudents.length!==1?'s':'')+' sent via ' + (channel==='whatsapp'?'WhatsApp':'SMS') + '!');
}

function selectAllOverdue() {
  D.students.filter(s=>s.status==='Overdue').forEach(s=>_remState.selected.add(s.roll));
  buildReminderTable();
  toast('✅ Saare overdue students select ho gaye');
}

function printReminderList() {
  const selStudents = D.students.filter(s => _remState.selected.has(s.roll));
  if (!selStudents.length) { toast('⚠️ Please select at least one student'); return; }
  const rows = selStudents.map(s => {
    const amt=getStudentDueFee(s);
    return `<tr><td>${s.name}</td><td>${s.father||''}</td><td>${s.roll}</td><td>${s.cls||''}</td><td>${s.contact||''}</td><td>Rs ${fmt(amt)}</td><td>${s.status}</td></tr>`;
  }).join('');
  const h = `<html><head><meta charset="UTF-8"><style>*{box-sizing:border-box;}body{font-family:Arial,sans-serif;padding:22px;}h2{color:#1a6636;font-size:18px;margin-bottom:4px;}.inf{font-size:12px;color:#666;margin-bottom:14px;}table{width:100%;border-collapse:collapse;}th{background:#1a6636;color:#fff;padding:7px 9px;text-align:left;font-size:11px;}td{padding:7px 9px;border-bottom:1px solid #e0e0e0;font-size:12px;}tr:nth-child(even)td{background:#f5faf6;}@media print{button{display:none}}</style></head><body><h2>${D.settings.instName} — Fee Reminder List</h2><div class="inf">Generated: ${new Date().toLocaleString()} | Total: ${selStudents.length} students</div><table><thead><tr><th>Name</th><th>Father</th><th>Roll No</th><th>Program</th><th>Contact</th><th>Amount Due</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table><div style="margin-top:12px"><button onclick="window.print()" style="padding:7px 16px;background:#1a6636;color:#fff;border:none;border-radius:6px;cursor:pointer;">Print</button></div></body></html>`;
  showPrintPreview(h, 'Fee Reminder List');
}

// Init reminder panel on first load
function initReminderPanel() {
  setReminderTemplate('urdu');
  buildReminderTable();
}


let _dbView = 'monthly'; // 'monthly' | 'yearly'

// Live clock
(function dbClock(){
  function tick(){
    const el=$('db-clock'); if(!el) return;
    const now=new Date();
    el.textContent=now.toLocaleString('en-PK',{weekday:'short',day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'});
  }
  tick();
  setInterval(tick,30000);
})();

function dbToggle(view){
  _dbView=view;
  $('db-tog-month').className='btn '+(view==='monthly'?'btn-green':'btn-outline');
  $('db-tog-year').className='btn '+(view==='yearly'?'btn-green':'btn-outline');
  $('db-chart-title').textContent='📊 Income vs Expenses — '+(view==='monthly'?'Monthly':'Yearly');
  _dbDrawIncomeChart();
}

// Builds the last 10 calendar months (oldest→newest) ending at the current
// month, and sums the ACTUAL Income/Expense transactions in D.tx that fall
// into each month — instead of hardcoded numbers that never move.
function _dbMonthlyIncomeExpense(){
  const now = new Date();
  const months = [];
  for(let i=9;i>=0;i--){
    const d = new Date(now.getFullYear(), now.getMonth()-i, 1);
    months.push({label:d.toLocaleString('default',{month:'short'}), y:d.getFullYear(), m:d.getMonth(), inc:0, exp:0});
  }
  D.tx.forEach(t=>{
    const d = txParseDate(t.date);
    if(!d) return;
    const bucket = months.find(mo=>mo.y===d.getFullYear() && mo.m===d.getMonth());
    if(!bucket) return;
    if(t.type==='Income') bucket.inc += t.amt; else bucket.exp += t.amt;
  });
  return {labels:months.map(mo=>mo.label), income:months.map(mo=>mo.inc), expense:months.map(mo=>mo.exp)};
}

// Groups the actual ledger (D.tx) by calendar year, showing up to the last 5
// years that have real transaction data (falls back to the current year if
// the ledger is empty) — instead of hardcoded totals.
function _dbYearlyIncomeExpense(){
  const yearsSet = {};
  D.tx.forEach(t=>{ const d=txParseDate(t.date); if(d) yearsSet[d.getFullYear()]=true; });
  let years = Object.keys(yearsSet).map(Number).sort((a,b)=>a-b);
  if(!years.length) years=[new Date().getFullYear()];
  years = years.slice(-5);
  const rows = years.map(y=>{
    let inc=0, exp=0;
    D.tx.forEach(t=>{
      const d=txParseDate(t.date);
      if(d && d.getFullYear()===y){ if(t.type==='Income') inc+=t.amt; else exp+=t.amt; }
    });
    return {y, inc, exp};
  });
  return {labels:rows.map(r=>String(r.y)), income:rows.map(r=>r.inc), expense:rows.map(r=>r.exp)};
}

function _dbDrawIncomeChart(){
  if(_dbView==='monthly'){
    const {labels,income,expense} = _dbMonthlyIncomeExpense();
    mkChart('ch-ie','bar',{
      labels,
      datasets:[
        {label:'Income',data:income,backgroundColor:C.g,borderRadius:5,borderSkipped:false},
        {label:'Expenses',data:expense,backgroundColor:C.o,borderRadius:5,borderSkipped:false}
      ]
    });
  } else {
    const {labels,income,expense} = _dbYearlyIncomeExpense();
    mkChart('ch-ie','line',{
      labels,
      datasets:[
        {label:'Income',data:income,borderColor:C.g,backgroundColor:'rgba(32,149,74,.1)',tension:.4,fill:true,pointRadius:5},
        {label:'Expenses',data:expense,borderColor:C.o,backgroundColor:'rgba(245,158,11,.1)',tension:.4,fill:true,pointRadius:5}
      ]
    });
  }
}

// Computes the next occurrence (on/after today) of a recurring day-of-month
// event — replaces hardcoded fixed dates like "25 April 2025" that never
// change and go stale after that month passes.
function _nextMonthlyOccurrence(day){
  const now=new Date();
  const today=new Date(now.getFullYear(),now.getMonth(),now.getDate());
  const clamp=(y,m)=>{ const lastDay=new Date(y,m+1,0).getDate(); return new Date(y,m,Math.min(day,lastDay)); };
  let d=clamp(today.getFullYear(),today.getMonth());
  if(d<today) d=clamp(today.getFullYear(),today.getMonth()+1);
  return d;
}
function _fmtEventDate(d){
  return d.toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});
}
function renderUpcomingEvents(){
  const container=$('db-events');
  if(!container) return;
  const defs=[
    {icon:'📅',cls:'ig',label:'Fee Due Reminder',   day:25},
    {icon:'👥',cls:'ib',label:'Staff Meeting',      day:28},
    {icon:'📝',cls:'io',label:'Exam Fee Collection',day:30},
    {icon:'💰',cls:'ir',label:'Salary Disbursement',day:1},
  ];
  const events=defs.map(e=>({...e, date:_nextMonthlyOccurrence(e.day)})).sort((a,b)=>a.date-b.date);
  container.innerHTML=events.map(e=>`
    <div class="ev"><div class="ev-ic ${e.cls}">${e.icon}</div><div class="ev-inf"><p>${e.label}</p><span>${_fmtEventDate(e.date)}</span></div></div>
  `).join('');
}

// Builds real notifications from actual data (overdue fees, pending
// salaries, upcoming fee due day) instead of the old bell icon which had
// no click handler and a permanently-on dot that meant nothing.
let _lastNotifCount = 0;
function renderNotifications(){
  const list=$('notif-list'), badge=$('nb-badge');
  if(!list) return;
  const items=[];

  const overdueStu=D.students.filter(s=>s.status==='Overdue');
  if(overdueStu.length){
    const amt=overdueStu.reduce((a,s)=>a+getStudentDueFee(s),0);
    items.push({icon:'🚨',bg:'#fff1f1',label:overdueStu.length+' student'+(overdueStu.length!==1?'s':'')+' overdue on fees',sub:'Rs '+fmt(amt)+' due',go:()=>goTo('dashboard',document.querySelector('.ni[onclick*=dashboard]'))});
  }

  const pendingSal=D.salaries.filter(s=>s.status==='Pending');
  if(pendingSal.length){
    const amt=pendingSal.reduce((a,s)=>a+netPay(s),0);
    items.push({icon:'💰',bg:'#fffbeb',label:pendingSal.length+' pending salary payment'+(pendingSal.length!==1?'s':''),sub:'Rs '+fmt(amt)+' due',go:()=>goTo('salaries',document.querySelector('.ni[onclick*=salaries]'))});
  }

  const pendingStu=D.students.filter(s=>s.status==='Pending');
  if(pendingStu.length){
    items.push({icon:'⏳',bg:'#fffbeb',label:pendingStu.length+' student'+(pendingStu.length!==1?'s':'')+' with pending fees',sub:'Tap to review',go:()=>goTo('students',document.querySelector('.ni[onclick*=students]'))});
  }

  // Transport Fee has its own Pending/Overdue lifecycle, separate from the
  // student's overall fee status — so it needs its own alert too, or an
  // overdue transport-only balance would never surface here.
  const overdueTf=D.transportFees.filter(t=>t.status==='Overdue');
  if(overdueTf.length){
    const amt=overdueTf.reduce((a,t)=>a+t.amt,0);
    items.push({icon:'🚌',bg:'#fff1f1',label:overdueTf.length+' transport fee'+(overdueTf.length!==1?'s':'')+' overdue',sub:'Rs '+fmt(amt)+' due',go:()=>goTo('transportFee',document.querySelector('.ni[onclick*=transportFee]'))});
  }
  const pendingTf=D.transportFees.filter(t=>t.status==='Pending');
  if(pendingTf.length){
    items.push({icon:'🚌',bg:'#fffbeb',label:pendingTf.length+' pending transport fee'+(pendingTf.length!==1?'s':''),sub:'Tap to review',go:()=>goTo('transportFee',document.querySelector('.ni[onclick*=transportFee]'))});
  }

  if(badge){
    if(items.length){
      badge.style.display='flex';
      badge.textContent = items.length>9 ? '9+' : items.length;
      // Pulse only when the count actually went UP since the last render —
      // i.e. a genuinely new alert appeared, not just a re-render of the
      // same alerts (which would happen on every dashboard refresh).
      if(items.length>_lastNotifCount){
        badge.classList.remove('pulse'); void badge.offsetWidth; badge.classList.add('pulse');
      }
    } else {
      badge.style.display='none';
    }
  }
  _lastNotifCount = items.length;

  list.innerHTML = items.length
    ? items.map(it=>`<div class="notif-item" onclick='window._notifGo(${items.indexOf(it)})'>
        <div class="notif-ic" style="background:${it.bg}">${it.icon}</div>
        <div class="notif-txt"><p>${it.label}</p><span>${it.sub}</span></div>
      </div>`).join('')
    : `<div class="notif-empty">✅ No new alerts</div>`;
  window._notifItems = items;
}
window._notifGo = function(i){
  const it = (window._notifItems||[])[i];
  if(it && it.go) it.go();
  closeNotifPanel();
};
function toggleNotifPanel(e){
  if(e) e.stopPropagation();
  const p=$('notif-panel');
  if(!p) return;
  if(p.classList.contains('open')) closeNotifPanel();
  else { renderNotifications(); p.classList.add('open'); }
}
function closeNotifPanel(){ const p=$('notif-panel'); if(p) p.classList.remove('open'); }
document.addEventListener('click', function(e){
  const p=$('notif-panel');
  if(p && p.classList.contains('open') && !p.contains(e.target) && !e.target.closest('.nb-btn')) closeNotifPanel();
});

function rDash(){
  // ── Counts ──
  // Uses feePaidAmt/feeRemainingAmt (not a plain status==='Paid' filter on
  // f.amt) so a partially-paid instalment contributes its paid portion to
  // "collected" and only its true remaining balance to "pending/overdue" —
  // otherwise partial cash already received would vanish from every total.
  const pend   = D.fees.filter(f=>f.status==='Pending'||f.status==='Partial');
  const over   = D.fees.filter(f=>f.status==='Overdue'||f.status==='Partial-Overdue');
  // Transport Fee is its own module (D.transportFees) but is still real
  // college income, so it must be folded into the dashboard's fee totals
  // (progress bar, this-month collected, pending/overdue, balance summary).
  const tfPaidRecs = D.transportFees.filter(t=>t.status==='Paid');
  const tfPendRecs = D.transportFees.filter(t=>t.status==='Pending');
  const tfOverRecs = D.transportFees.filter(t=>t.status==='Overdue');
  const fPaid  = D.fees.reduce((a,b)=>a+feePaidAmt(b),0) + tfPaidRecs.reduce((a,b)=>a+b.amt,0);
  const fPend  = pend.reduce((a,b)=>a+feeRemainingAmt(b),0) + tfPendRecs.reduce((a,b)=>a+b.amt,0);
  const fOver  = over.reduce((a,b)=>a+feeRemainingAmt(b),0) + tfOverRecs.reduce((a,b)=>a+b.amt,0);
  const fTotal = D.fees.reduce((a,b)=>a+b.amt,0) + D.transportFees.reduce((a,b)=>a+b.amt,0);
  const totExp = D.expenses.reduce((a,b)=>a+b.amt,0);
  const totSal = D.salaries.filter(s=>s.status==='Paid').reduce((a,b)=>a+netPay(b),0);
  const totSalAll = D.salaries.reduce((a,b)=>a+netPay(b),0); // all (for pie chart)
  const allExp = totExp+totSal;
  const netBal = fPaid-allExp;

  // ── Sidebar badges ──
  $('nb-s').textContent=D.students.length;
  $('nb-e').textContent=D.employees.length;
  if($('db-academic-year')) $('db-academic-year').textContent=D.settings.academicYear;

  // ── Quick stats ──
  $('db-s').textContent = D.students.length;
  const interC = D.students.filter(s=>(s.cls||'').startsWith('Inter-')).length;
  const bsC    = D.students.length - interC;
  const boysC  = D.students.filter(s=>s.gender==='Male').length;
  const girlsC = D.students.filter(s=>s.gender==='Female').length;
  if($('db-s-sub')) $('db-s-sub').innerHTML = `<span style="color:var(--bl)">Boys:</span> ${boysC} &nbsp;·&nbsp; <span style="color:var(--pu)">Girls:</span> ${girlsC}`;

  $('db-e').textContent = D.employees.length;
  // "This Month Collected" must only count fees actually PAID during the
  // current calendar month — not the all-time total (that's what
  // "Overall Target" / "Total Income" further down are for).
  const now = new Date();
  // Note: this buckets by each fee record's most-recent-payment date. For a
  // fee paid across multiple partial payments in different months, the full
  // cumulative amount is attributed to the latest month (D.feePayments has
  // the precise per-transaction log if exact month-splitting is ever needed).
  const paidFeesList = D.fees.filter(f=>feePaidAmt(f)>0);
  const paidThisMonth = paidFeesList.filter(f=>{
    const d = txParseDate(f.date);
    return d && d.getFullYear()===now.getFullYear() && d.getMonth()===now.getMonth();
  });
  const tfPaidThisMonth = tfPaidRecs.filter(t=>{
    const d = txParseDate(t.date);
    return d && d.getFullYear()===now.getFullYear() && d.getMonth()===now.getMonth();
  });
  const fPaidThisMonth = paidThisMonth.reduce((a,b)=>a+feePaidAmt(b),0) + tfPaidThisMonth.reduce((a,b)=>a+b.amt,0);
  $('db-f').textContent = 'Rs '+fmt(fPaidThisMonth);
  if($('db-f-sub')) $('db-f-sub').innerHTML = `<span style="color:var(--g6)">+${paidThisMonth.length+tfPaidThisMonth.length} receipts this month</span>`;

  // Pending this week = pending + overdue count (count, not amount)
  const pendingCnt = pend.length + over.length + tfPendRecs.length + tfOverRecs.length;
  $('db-pending-week').textContent = pendingCnt;
  if($('db-pw-sub')) $('db-pw-sub').innerHTML = `<span style="color:var(--rd)">Rs ${fmt(fPend+fOver)} due</span>`;

  // ── Fee collection progress bar ──
  const pct = fTotal>0 ? Math.round((fPaid/fTotal)*100) : 0;
  const pbarEl=$('db-fee-pbar'); if(pbarEl){ pbarEl.style.width=pct+'%'; pbarEl.style.background=pct>=75?'linear-gradient(90deg,var(--g6),var(--g4))':pct>=50?'linear-gradient(90deg,var(--yl),#fbbf24)':'linear-gradient(90deg,var(--rd),#f87171)'; }
  const badgeEl=$('db-fee-pct-badge'); if(badgeEl){ badgeEl.textContent=pct+'% Collected'; badgeEl.className='badge '+(pct>=75?'bg-g':pct>=50?'bg-y':'bg-r'); }
  if($('db-fee-prog-lbl')) $('db-fee-prog-lbl').textContent='Rs '+fmt(fPaid)+' / Rs '+fmt(fTotal);
  if($('db-pc-paid')) $('db-pc-paid').textContent=paidFeesList.length;
  if($('db-pc-pend')) $('db-pc-pend').textContent=pend.length;
  if($('db-pc-over')) $('db-pc-over').textContent=over.length;

  // Per-program progress bars
  const progEl=$('db-prog-bars');
  if(progEl){
    // Intermediate students only — cls starting with 'Inter-'
    const isInterStu=s=>(s.cls||'').startsWith('Inter-');
    const segments=[
      {label:'Intermediate — Boys', filter:s=>isInterStu(s) && s.gender==='Male',   color:'var(--bl)'},
      {label:'Intermediate — Girls',filter:s=>isInterStu(s) && s.gender==='Female', color:'var(--pu)'},
    ];
    progEl.innerHTML=segments.map(p=>{
      const stus=D.students.filter(p.filter);
      const feesForStus=D.fees.filter(f=>stus.some(s=>s.roll===f.roll));
      const tfForStus=D.transportFees.filter(t=>stus.some(s=>s.roll===t.roll));
      const paidAmt=feesForStus.reduce((a,b)=>a+feePaidAmt(b),0)+tfForStus.filter(t=>t.status==='Paid').reduce((a,b)=>a+b.amt,0);
      const totAmt=feesForStus.reduce((a,b)=>a+b.amt,0)+tfForStus.reduce((a,b)=>a+b.amt,0);
      const pp=totAmt>0?Math.round((paidAmt/totAmt)*100):0;
      const cnt=stus.length;
      return `<div class="bp" style="margin-bottom:10px">
        <div class="bp-h">
          <span class="bp-n" style="font-size:12px">${p.label} <span style="font-size:10px;color:var(--s4);font-weight:400">(${cnt} students)</span></span>
          <span class="bp-p" style="font-size:12px;color:${p.color}">${pp}%</span>
        </div>
        <div class="pbar" style="height:6px"><div style="height:100%;border-radius:50px;width:${pp}%;background:${p.color};transition:width .6s"></div></div>
      </div>`;
    }).join('');
  }

  // ── Balance summary ──
  if($('db-bal-in'))  $('db-bal-in').textContent  = 'Rs '+fmt(fPaid);
  if($('db-bal-ex'))  $('db-bal-ex').textContent  = 'Rs '+fmt(allExp);
  if($('db-bal-net')){ $('db-bal-net').textContent='Rs '+fmt(Math.abs(netBal))+' '+(netBal>=0?'Surplus':'Deficit'); $('db-bal-net').style.color=netBal>=0?'var(--g6)':'var(--rd)'; }

  // ── Pending salary alert ──
  renderPendingSalAlert();

  // ── Upcoming events (dynamic, relative to today) ──
  renderUpcomingEvents();

  // ── Notification bell dot (refresh count without opening panel) ──
  renderNotifications();

  // ── Overdue alerts ──
  // A student can be Overdue/Pending purely on Transport Fee even when their
  // tuition (s.status) shows Paid, so derive these lists from the actual fee
  // + transport-fee records by roll, not just s.status.
  const overdueRolls = new Set([
    ...D.fees.filter(f=>f.status==='Overdue').map(f=>f.roll),
    ...D.transportFees.filter(t=>t.status==='Overdue').map(t=>t.roll)
  ]);
  const pendingRolls = new Set([
    ...D.fees.filter(f=>f.status==='Pending').map(f=>f.roll),
    ...D.transportFees.filter(t=>t.status==='Pending').map(t=>t.roll)
  ]);
  const overdueStudents = D.students.filter(s=>overdueRolls.has(s.roll));
  const pendingStudents = D.students.filter(s=>pendingRolls.has(s.roll) && !overdueRolls.has(s.roll));
  if($('db-overdue-cnt')) $('db-overdue-cnt').textContent = overdueStudents.length+' Student'+(overdueStudents.length!==1?'s':'');
  if($('db-reminder-bar')) $('db-reminder-bar').style.display = (overdueStudents.length+pendingStudents.length > 0) ? 'block' : 'none';
  if($('db-sel-count')) $('db-sel-count').textContent = overdueStudents.length + ' overdue';
  if($('db-overdue-list') && $('db-overdue-empty')){
    if(overdueStudents.length===0){
      $('db-overdue-list').style.display='none'; $('db-overdue-empty').style.display='block';
    } else {
      $('db-overdue-empty').style.display='none';
      $('db-overdue-list').style.display='block';
      $('db-overdue-list').innerHTML = overdueStudents.map(s=>{
        // Only sum fee records that are ACTUALLY overdue for this student —
        // a student can have multiple fee/instalment rows (some Paid, some
        // Pending, some Overdue), so grabbing the first match by roll alone
        // could show a Paid or Pending row's amount instead of the real
        // overdue amount.
        const stuOverdueFees=D.fees.filter(f=>f.roll===s.roll && f.status==='Overdue');
        const stuOverdueTf=D.transportFees.filter(t=>t.roll===s.roll && t.status==='Overdue');
        const overdueAmt=(stuOverdueFees.length||stuOverdueTf.length) ? (stuOverdueFees.reduce((a,b)=>a+b.amt,0)+stuOverdueTf.reduce((a,b)=>a+b.amt,0)) : s.fee;
        return `<div style="display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:9px;background:#fff1f1;border:1px solid #fecaca;margin-bottom:6px">
          <div style="width:32px;height:32px;border-radius:50%;background:var(--rd);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#fff;flex-shrink:0">${s.name[0]}</div>
          <div style="flex:1;min-width:0">
            <p style="font-size:13px;font-weight:700;color:var(--s6);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${s.name}</p>
            <span style="font-size:11px;color:var(--s4)">${s.roll} · ${s.dept}</span>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:13px;font-weight:800;color:var(--rd)">Rs ${fmt(overdueAmt)}</div>
            <div style="font-size:10px;color:var(--s4)">OVERDUE</div>
          </div>
        </div>`;
      }).join('');
    }
  }

  // Init reminder panel
  initReminderPanel();

  // ── Recent transactions ──
  // Show the 5 most recent BY DATE (newest first) — not just the first 5 in
  // insertion order, which would always surface old fee entries instead of
  // whatever was actually added/paid most recently.
  const recentTx = txChronological().slice(-5).reverse();
  $('db-tx').innerHTML=recentTx.map(t=>`
    <div class="ev">
      <div class="ev-ic ${t.type==='Income'?'ig':'ir'}">${t.type==='Income'?'💳':'💸'}</div>
      <div class="ev-inf" style="flex:1;min-width:0"><p style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${t.desc}</p><span>${t.date}</span></div>
      <span class="${t.type==='Income'?'pos':'neg'}" style="flex-shrink:0">${t.type==='Income'?'+':'-'}Rs ${fmt(t.amt)}</span>
    </div>`).join('');

  // ── Charts ──
  _dbDrawIncomeChart();
  const isInterStuPie=s=>(s.cls||'').startsWith('Inter-');
  const interBoysIncome = D.fees.filter(f=>{const s=D.students.find(s=>s.roll===f.roll);return s&&isInterStuPie(s)&&s.gender==='Male'&&f.status==='Paid';}).reduce((a,b)=>a+b.amt,0)
    + D.transportFees.filter(t=>{const s=D.students.find(s=>s.roll===t.roll);return s&&isInterStuPie(s)&&s.gender==='Male'&&t.status==='Paid';}).reduce((a,b)=>a+b.amt,0);
  const interGirlsIncome= D.fees.filter(f=>{const s=D.students.find(s=>s.roll===f.roll);return s&&isInterStuPie(s)&&s.gender==='Female'&&f.status==='Paid';}).reduce((a,b)=>a+b.amt,0)
    + D.transportFees.filter(t=>{const s=D.students.find(s=>s.roll===t.roll);return s&&isInterStuPie(s)&&s.gender==='Female'&&t.status==='Paid';}).reduce((a,b)=>a+b.amt,0);
  mkChart('ch-pie','doughnut',{
    labels:['Inter Boys Fee','Inter Girls Fee','Expenses','Salaries'],
    datasets:[{data:[interBoysIncome,interGirlsIncome,totExp,totSalAll],backgroundColor:[C.b,'#8b5cf6',C.o,'#f59e0b'],borderWidth:2,borderColor:'#fff'}]
  });
}

/* ══════════════════════════════════════════════════
   INSTALMENT INTERVAL HELPER
══════════════════════════════════════════════════ */
// Inter = full year (12 months)
function getInstInterval(cls, count){
  return Math.max(1,Math.round(12/count));
}

/* ══════════════════════════════════════════════════
   4-PART INSTALMENT SYSTEM — partial-payment-aware helpers
   Every instalment fee record now tracks `paidAmt` (cumulative amount
   actually paid against it) separately from `amt` (amount owed), so a
   student can pay less than the full instalment in one go. Status is
   always DERIVED from these two numbers — never trusted as free text —
   so it can't drift out of sync with the real payment figures.
   Old records that predate this field (status==='Paid' with no paidAmt
   set) are treated as fully paid for backward compatibility.
══════════════════════════════════════════════════ */
function feePaidAmt(f){
  if(f.paidAmt!=null) return f.paidAmt;
  return f.status==='Paid' ? f.amt : 0;
}
function feeRemainingAmt(f){
  return Math.max(0, f.amt - feePaidAmt(f));
}
function feeComputeStatus(f){
  const paid=feePaidAmt(f);
  if(paid>=f.amt) return 'Paid';
  const today=new Date(); today.setHours(0,0,0,0);
  const due=f.dueDate?new Date(f.dueDate):null; if(due) due.setHours(0,0,0,0);
  const overdue=due && due<today;
  if(paid>0) return overdue?'Partial-Overdue':'Partial';
  return overdue?'Overdue':'Pending';
}
function feeStatusLabel(status){
  return {Paid:'PAID',Partial:'PARTIALLY PAID','Partial-Overdue':'PARTIALLY PAID (OVERDUE)',Overdue:'OVERDUE',Pending:'UNPAID'}[status]||status.toUpperCase();
}
// All instalment rows belonging to the same 4-part plan as fee record `f`.
function instPlanRows(f){
  return D.fees.filter(x=>x.roll===f.roll&&x.isInstalment&&x.instTotal===f.instTotal)
    .sort((a,b)=>(a.instIdx??0)-(b.instIdx??0));
}
function instPlanSummary(f){
  const rows=instPlanRows(f);
  const totalFee=f.instTotal;
  const totalPaid=rows.reduce((s,r)=>s+feePaidAmt(r),0);
  const paidCount=rows.filter(r=>feeComputeStatus(r)==='Paid').length;
  return {
    rows, totalFee, totalPaid,
    totalRemaining:Math.max(0,totalFee-totalPaid),
    paidCount, remainingCount:rows.length-paidCount,
    fullyPaid: paidCount===rows.length && rows.length>0
  };
}

/* ══════════════════════════════════════════════════
   ADD STUDENT — Fee Plan helpers
══════════════════════════════════════════════════ */
function onStuFeeTypeChange(val){
  const wrap=$('s-finst-wrap');
  if(wrap) wrap.style.display=(val==='instalment')?'':'none';
  if(val==='instalment'){
    // Update instalment count options based on level
    const clsVal=($('scls')||{}).value||'';
    const isInter=clsVal.startsWith('Inter-');
    const countEl=$('s-finst-count');
    if(countEl){
      countEl.innerHTML=isInter
        ?`<option value="2">2 Instalments (every 6 months)</option>
           <option value="3">3 Instalments (every 4 months)</option>
           <option value="4" selected>4 Instalments (every 3 months)</option>
           <option value="12">12 Instalments (monthly)</option>`
        :`<option value="2">2 Instalments (every 3 months)</option>
           <option value="3" selected>3 Instalments (every 2 months)</option>
           <option value="6">6 Instalments (monthly)</option>`;
    }
  }
  stuFeePreview();
}

function stuFeePreview(){
  const prev=$('s-fee-preview');
  if(!prev) return;
  const feeAmt=parseInt(($('sfa')||{}).value)||0;
  const feeType=($('s-ftype')||{}).value||'full';
  const instCount=parseInt(($('s-finst-count')||{}).value)||2;
  const dueDate=($('s-fdue')||{}).value||'';
  if(!feeAmt||!dueDate){prev.style.display='none';return;}
  const today=new Date(); today.setHours(0,0,0,0);
  const dueDt=new Date(dueDate); dueDt.setHours(0,0,0,0);
  const isOverdue=dueDt<today;
  const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  let html='<div style="font-size:11px;font-weight:700;color:var(--s5);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">📋 Fee Plan Preview</div>';
  if(feeType==='instalment'){
    const perAmt=Math.floor(feeAmt/instCount);
    const remainder=feeAmt-(perAmt*instCount);
    // Detect level from current student form
    const clsVal=($('scls')||{}).value||'';
    const interval=getInstInterval(clsVal,instCount);
    html+=`<div style="font-size:11px;color:var(--s5);margin-bottom:6px">📐 Intermediate (12-month year) · Every <strong>${interval} month(s)</strong> apart</div>`;
    html+='<div style="display:flex;flex-wrap:wrap;gap:6px">';
    for(let i=0;i<instCount;i++){
      const amt=i===instCount-1?perAmt+remainder:perAmt;
      const instDue=new Date(dueDt.getFullYear(),dueDt.getMonth()+(i*interval),dueDt.getDate());
      const instOverdue=instDue<today;
      html+=`<div style="background:${instOverdue?'#fee2e2':'#fff'};border:1px solid ${instOverdue?'#fca5a5':'var(--g1)'};border-radius:7px;padding:7px 10px;flex:1;min-width:90px;text-align:center">
        <div style="font-size:11px;font-weight:700;color:${instOverdue?'var(--rd)':'var(--g7)'}">${instOverdue?'⚠️ OVERDUE':'📆 Inst '+(i+1)}</div>
        <div style="font-size:14px;font-weight:800;color:var(--s6);margin:2px 0">Rs ${amt.toLocaleString()}</div>
        <div style="font-size:10px;color:var(--s4)">${instDue.toISOString().slice(0,10)}</div>
      </div>`;
    }
    html+='</div>';
  } else {
    html+=`<div style="display:flex;justify-content:space-between;align-items:center;background:${isOverdue?'#fee2e2':'#fff'};border:1px solid ${isOverdue?'#fca5a5':'var(--g1)'};border-radius:8px;padding:10px 14px">
      <div>
        <div style="font-size:12px;color:var(--s4)">Due: ${dueDate}</div>
        <div style="font-size:16px;font-weight:800;color:var(--s6)">Rs ${feeAmt.toLocaleString()}</div>
      </div>
      <div style="font-size:12px;font-weight:700;padding:4px 10px;border-radius:50px;background:${isOverdue?'#fecaca':'var(--g1)'};color:${isOverdue?'#991b1b':'#134a2a'}">${isOverdue?'⚠️ OVERDUE':'⏳ PENDING'}</div>
    </div>`;
  }
  prev.innerHTML=html;
  prev.style.display='block';
}

/* ══════════════════════════════════════════════════
   FEE MODAL — Roll No Quick Lookup
══════════════════════════════════════════════════ */
function feeRollLookup(val){
  const container=$('f-roll-fees');
  if(!container) return;
  const q=val.trim().toLowerCase();
  if(!q){container.style.display='none';return;}

  const stu=D.students.find(s=>
    s.roll.toLowerCase()===q ||
    (s.id||'').toLowerCase()===q ||
    s.roll.toLowerCase().startsWith(q) ||
    (s.id||'').toLowerCase().startsWith(q)
  );

  if(!stu){
    container.innerHTML='<div style="font-size:12px;color:var(--rd);padding:6px 0">❌ No student found with this Roll No. / ID</div>';
    container.style.display='block';
    return;
  }

  const today=new Date(); today.setHours(0,0,0,0);
  const stuFees=D.fees.filter(f=>f.roll===stu.roll&&f.status!=='Paid');

  let html=`<div style="background:#fff;border:1px solid var(--g1);border-radius:8px;padding:10px 12px;margin-bottom:8px;display:flex;align-items:center;gap:10px">
    <div style="width:34px;height:34px;border-radius:50%;background:var(--g5);color:#fff;font-weight:800;font-size:14px;display:flex;align-items:center;justify-content:center;flex-shrink:0">${stu.name[0]}</div>
    <div>
      <div style="font-size:13px;font-weight:700;color:var(--s6)">${stu.name}</div>
      <div style="font-size:11px;color:var(--s4)">${stu.roll} · ${stu.dept} · ${stu.sem}</div>
    </div>
    <button onclick="feeRollSelect('${stu.roll}')" style="margin-left:auto;background:var(--g6);color:#fff;border:none;border-radius:7px;padding:6px 12px;font-size:12px;font-weight:700;cursor:pointer">Select ✓</button>
  </div>`;

  if(stuFees.length>0){
    html+='<div style="font-size:11px;font-weight:700;color:var(--s5);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Pending / Overdue Fees</div>';
    stuFees.forEach((f,i)=>{
      const idx=D.fees.indexOf(f);
      const dueDt=f.dueDate?new Date(f.dueDate):null;
      if(dueDt) dueDt.setHours(0,0,0,0);
      const isOvr=dueDt&&dueDt<today;
      const diffDays=dueDt?Math.ceil((dueDt-today)/(1000*60*60*24)):null;
      html+=`<div style="display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:8px;background:${isOvr?'#fff1f1':'var(--s0)'};border:1px solid ${isOvr?'#fca5a5':'var(--s2)'};margin-bottom:5px">
        <div style="flex:1;min-width:0">
          <div style="font-size:12px;font-weight:700;color:${isOvr?'var(--rd)':'var(--s6)'}">${isOvr?'⚠️ OVERDUE':'⏳ PENDING'} ${f.isInstalment?'· Inst '+f.instPart:''}</div>
          <div style="font-size:11px;color:var(--s4)">Rs ${f.amt.toLocaleString()} ${f.dueDate?'· Due: '+f.dueDate:''} ${isOvr&&diffDays!==null?'('+Math.abs(diffDays)+' days overdue)':(!isOvr&&diffDays!==null?'('+diffDays+' days left)':'')}</div>
        </div>
        <button onclick="feeRollCollect(${idx},'${stu.roll}')" style="background:var(--g6);color:#fff;border:none;border-radius:7px;padding:5px 10px;font-size:11px;font-weight:700;cursor:pointer;flex-shrink:0">Collect 💳</button>
      </div>`;
    });
  } else {
    html+='<div style="font-size:12px;color:var(--g6);padding:4px 0">✅ No pending fees for this student</div>';
  }

  container.innerHTML=html;
  container.style.display='block';
}

function feeRollSelect(roll){
  const stu=D.students.find(s=>s.roll===roll);
  if(!stu) return;
  feeSelectStu(stu);
  if($('f-roll-lookup')) $('f-roll-lookup').value='';
  if($('f-roll-fees')) $('f-roll-fees').style.display='none';
}

function feeRollCollect(feeIdx, roll){
  const stu=D.students.find(s=>s.roll===roll);
  const fee=D.fees[feeIdx];
  if(!stu||!fee) return;

  openAddFee();

  // Directly set all fields
  _feeSelectedStu = stu;
  $('fn').value = stu.name;
  $('fr').value = stu.roll;
  $('feeEditIdx').value = feeIdx;
  $('fa').value = fee.amt;
  const semEl=$('fsm');
  if(semEl){for(let i=0;i<semEl.options.length;i++){if(semEl.options[i].value===fee.sem||semEl.options[i].text===fee.sem){semEl.selectedIndex=i;break;}}}
  $('fdd').value = fee.dueDate||'';
  $('fst').value = 'Paid';
  feeStatusChange('Paid');
  $('frc').value = 'REC-'+Date.now().toString().slice(-5);
  feeShowSelected(stu);
  $('fstep1-next').disabled=false;
  $('fstep1-next').style.opacity='1';

  if($('fsum-name')) $('fsum-name').textContent = stu.name;
  if($('fsum-roll')) $('fsum-roll').textContent = stu.roll;
  if($('fsum-amt'))  $('fsum-amt').textContent  = 'Rs '+fmt(fee.amt);
  if($('fsum-st'))   $('fsum-st').innerHTML     = bdg('Paid');
  if($('fsum-mt'))   $('fsum-mt').textContent   = 'Cash';

  if($('f-roll-lookup')) $('f-roll-lookup').value='';
  if($('f-roll-fees'))   $('f-roll-fees').style.display='none';

  feeShowInstPlan(roll, fee.instTotal||null);
  feeStep(3);
}
fillDeptDropdowns();


/* ══════════════════════════════════════════════════════════════════
   FEATURE 1 — INCREMENT TRACKER
══════════════════════════════════════════════════════════════════ */
function openIncrementModal(empIdx){
  if(!requirePerm('canEdit','add increment'))return;
  fillIncrementEmpDropdown();
  $('incEmpSel').value='';
  $('incCurBasic').value='';$('incCurAllow').value='';
  $('incVal').value='';$('incNewDesig').value='';$('incNewBasic').value='';
  $('incDate').value=todayStr();
  $('incReason').value='';$('incPreview').innerHTML='';
  $('incType').value='percentage';
  if(empIdx!=null && D.employees[empIdx]){
    $('incEmpSel').value=D.employees[empIdx].name;
    incEmpSelected(D.employees[empIdx].name);
  }
  showMo('addIncrement');
}

function fillIncrementEmpDropdown(){
  const sel=$('incEmpSel');if(!sel)return;
  sel.innerHTML='<option value="">-- Select Employee --</option>'+
    D.employees.filter(e=>e.status==='Active').map(e=>`<option value="${e.name}">${e.name} (${e.desig})</option>`).join('');
}

function incEmpSelected(name){
  if(!name)return;
  const emp=D.employees.find(e=>e.name===name);
  if(!emp)return;
  $('incCurBasic').value=emp.salary;
  $('incCurAllow').value=emp.allow;
  $('incNewDesig').value='';
  incCalcNew();
}

function incCalcNew(){
  const name=$('incEmpSel').value;
  const emp=D.employees.find(e=>e.name===name);
  if(!emp)return;
  const type=$('incType').value;
  const val=parseFloat($('incVal').value)||0;
  const lbl=$('incValLbl');
  let newBasic=emp.salary;
  if(type==='percentage'){if(lbl)lbl.textContent='Increment % *';newBasic=Math.round(emp.salary*(1+val/100));}
  else if(type==='fixed'){if(lbl)lbl.textContent='Fixed Amount (Rs) *';newBasic=emp.salary+val;}
  else{if(lbl)lbl.textContent='New Basic Salary (Rs) *';newBasic=val||emp.salary;}
  $('incNewBasic').value=newBasic;
  const diff=newBasic-emp.salary;
  const pct=emp.salary>0?((diff/emp.salary)*100).toFixed(1):0;
  const prev=$('incPreview');
  if(prev&&val>0){
    prev.innerHTML=`<div style="background:var(--g0);border:1px solid var(--g1);border-radius:10px;padding:12px 14px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;text-align:center">
      <div><div style="font-size:10px;color:var(--s4);text-transform:uppercase;font-weight:700">Current</div><div style="font-size:16px;font-weight:800;color:var(--s5)">Rs ${fmt(emp.salary)}</div></div>
      <div><div style="font-size:10px;color:var(--g7);text-transform:uppercase;font-weight:700">Increase</div><div style="font-size:16px;font-weight:800;color:var(--g6)">+Rs ${fmt(diff)} (${pct}%)</div></div>
      <div><div style="font-size:10px;color:var(--g7);text-transform:uppercase;font-weight:700">New Basic</div><div style="font-size:16px;font-weight:800;color:var(--g7)">Rs ${fmt(newBasic)}</div></div>
    </div>`;
  } else if(prev) prev.innerHTML='';
}

function saveIncrement(){
  if(!requirePerm('canEdit','save increment'))return;
  const name=$('incEmpSel').value.trim();
  if(!name){toast('Please select an employee');return;}
  const emp=D.employees.find(e=>e.name===name);
  if(!emp){toast('Employee not found');return;}
  const type=$('incType').value;
  const val=parseFloat($('incVal').value)||0;
  const reason=$('incReason').value.trim();
  const date=$('incDate').value;
  if(!reason){toast('Please enter a reason');return;}
  const oldBasic=emp.salary;
  let newBasic=oldBasic;
  if(type==='percentage')newBasic=Math.round(oldBasic*(1+val/100));
  else if(type==='fixed')newBasic=oldBasic+val;
  else newBasic=val||oldBasic;
  if(newBasic<=0){toast('Please enter a valid salary amount');return;}
  const newDesig=$('incNewDesig').value.trim();
  const oldDesig=emp.desig;
  // Record increment
  const inc={
    empId:emp.id,empName:name,
    date:date||todayStr(),
    type,val,
    oldBasic,newBasic,
    oldDesig,newDesig:newDesig||oldDesig,
    reason,
    pct:oldBasic>0?((newBasic-oldBasic)/oldBasic*100).toFixed(1):0
  };
  D.increments.push(inc);
  // Update employee
  const empIdx=D.employees.indexOf(emp);
  D.employees[empIdx].salary=newBasic;
  if(newDesig)D.employees[empIdx].desig=newDesig;
  // Auto-sync pending salary records
  const pendingSals=D.salaries.filter(s=>s.status==='Pending'&&(s.name===name||(emp.id&&s.empId===emp.id)));
  pendingSals.forEach(s=>{s.basic=newBasic;if(newDesig)s.desig=newDesig;});
  auditLog('action',`Increment applied: ${name} Rs ${fmt(oldBasic)}→Rs ${fmt(newBasic)} (${inc.pct}%)`);
  buildTx();rEmployees();rSalaries();rDash();
  closeMo('addIncrement');
  toast(`✅ Increment applied! Rs ${fmt(oldBasic)} → Rs ${fmt(newBasic)}${pendingSals.length?' ('+pendingSals.length+' pending salary updated)':''}`);
}

function showIncHistory(empIdx){
  const emp=D.employees[empIdx];
  if(!emp)return;
  $('incHistName').textContent=emp.name;
  const history=D.increments.filter(i=>i.empId===emp.id||i.empName===emp.name).sort((a,b)=>b.date.localeCompare(a.date));
  if(history.length===0){
    $('incHistBody').innerHTML='<div style="text-align:center;padding:32px;color:var(--s4);font-size:13px">📋 No increment history found</div>';
  } else {
    $('incHistBody').innerHTML=`
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:14px">
        <div style="background:var(--g0);border-radius:8px;padding:10px 12px;text-align:center">
          <div style="font-size:10px;color:var(--g7);font-weight:700;text-transform:uppercase">Total Increments</div>
          <div style="font-size:22px;font-weight:900;color:var(--g8)">${history.length}</div>
        </div>
        <div style="background:#eff6ff;border-radius:8px;padding:10px 12px;text-align:center">
          <div style="font-size:10px;color:#1d4ed8;font-weight:700;text-transform:uppercase">Total Increase</div>
          <div style="font-size:16px;font-weight:900;color:#1e3a8a">Rs ${fmt(history.reduce((a,b)=>a+(b.newBasic-b.oldBasic),0))}</div>
        </div>
        <div style="background:var(--s1);border-radius:8px;padding:10px 12px;text-align:center">
          <div style="font-size:10px;color:var(--s5);font-weight:700;text-transform:uppercase">Current Basic</div>
          <div style="font-size:16px;font-weight:900;color:var(--s6)">Rs ${fmt(emp.salary)}</div>
        </div>
      </div>
      <div style="border:1px solid var(--s2);border-radius:10px;overflow:hidden">
        ${history.map((inc,i)=>`
        <div style="padding:12px 14px;border-bottom:1px solid var(--s1);${i===0?'background:var(--g0)':''}">
          <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px;flex-wrap:wrap">
            <div style="flex:1;min-width:0">
              <div style="font-size:12px;font-weight:700;color:var(--g7)">📈 ${inc.reason}</div>
              <div style="font-size:11px;color:var(--s4);margin-top:3px">${inc.date} · ${inc.type==='percentage'?inc.val+'% increment':inc.type==='fixed'?'Fixed +Rs '+fmt(inc.val):'Promotion/Revised'}</div>
              ${inc.newDesig!==inc.oldDesig?`<div style="font-size:11px;color:var(--pu);margin-top:2px">🏷️ ${inc.oldDesig} → <strong>${inc.newDesig}</strong></div>`:''}
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:13px;font-weight:800;color:var(--g6)">Rs ${fmt(inc.oldBasic)} → Rs ${fmt(inc.newBasic)}</div>
              <div style="font-size:11px;color:var(--g5);margin-top:2px">+${inc.pct}% (+Rs ${fmt(inc.newBasic-inc.oldBasic)})</div>
            </div>
          </div>
        </div>`).join('')}
      </div>`;
  }
  showMo('incHistory');
}

/* ══════════════════════════════════════════════════════════════════
   FEATURE 2 — UNPAID LEAVE DEDUCTION
══════════════════════════════════════════════════════════════════ */
function openLeaveDeductModal(){
  if(!requirePerm('canEdit','add leave deduction'))return;
  const sel=$('lvEmpSel');if(sel)sel.innerHTML='<option value="">-- Select Employee --</option>'+D.employees.filter(e=>e.status==='Active').map(e=>`<option value="${e.name}">${e.name} (${e.desig})</option>`).join('');
  $('lvFrom').value='';$('lvTo').value='';$('lvReason').value='';
  $('lvMonth').value=getCurrentMonthLabel();
  $('lvPreview').style.display='none';
  showMo('leaveDeduct');
}

function lvEmpSelected(name){lvCalcDeduction();}

function lvCalcDeduction(){
  const name=$('lvEmpSel').value;
  const from=$('lvFrom').value;
  const to=$('lvTo').value;
  const emp=D.employees.find(e=>e.name===name);
  const prev=$('lvPreview');
  if(!emp||!from||!to){if(prev)prev.style.display='none';return;}
  const d1=new Date(from);const d2=new Date(to);
  if(d2<d1){if(prev)prev.style.display='none';return;}
  const leaveDays=Math.round((d2-d1)/(1000*60*60*24))+1;
  const perDay=Math.round(emp.salary/26); // 26 working days per month
  const deductAmt=perDay*leaveDays;
  if(prev){
    prev.style.display='block';
    prev.innerHTML=`<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;text-align:center">
      <div><div style="font-size:10px;color:var(--s4);font-weight:700;text-transform:uppercase">Leave Days</div><div style="font-size:20px;font-weight:900;color:var(--s6)">${leaveDays}</div></div>
      <div><div style="font-size:10px;color:var(--yl);font-weight:700;text-transform:uppercase">Per Day (÷26)</div><div style="font-size:20px;font-weight:900;color:#92400e">Rs ${fmt(perDay)}</div></div>
      <div><div style="font-size:10px;color:var(--rd);font-weight:700;text-transform:uppercase">Total Deduction</div><div style="font-size:20px;font-weight:900;color:var(--rd)">Rs ${fmt(deductAmt)}</div></div>
    </div>
    <div style="margin-top:10px;font-size:12px;color:var(--g7);text-align:center">
      Basic Rs ${fmt(emp.salary)} ÷ 26 = Rs ${fmt(perDay)}/day × ${leaveDays} days = <strong>Rs ${fmt(deductAmt)}</strong>
    </div>`;
  }
}

function saveLeaveDeduction(){
  if(!requirePerm('canEdit','save leave deduction'))return;
  const name=$('lvEmpSel').value.trim();
  const from=$('lvFrom').value;const to=$('lvTo').value;
  const month=$('lvMonth').value.trim();
  const reason=$('lvReason').value.trim();
  if(!name||!from||!to){toast('Please fill in employee and dates');return;}
  const emp=D.employees.find(e=>e.name===name);
  if(!emp){toast('Employee not found');return;}
  const d1=new Date(from);const d2=new Date(to);
  const leaveDays=Math.round((d2-d1)/(1000*60*60*24))+1;
  const perDay=Math.round(emp.salary/26);
  const deductAmt=perDay*leaveDays;
  const type=$('lvType').value;
  // Record leave
  const leave={empId:emp.id,empName:name,from,to,leaveDays,perDay,deductAmt,type,month,reason:reason||type,date:todayStr()};
  D.leaves.push(leave);
  // Apply deduction to matching Pending salary record
  const salRec=D.salaries.find(s=>s.month===month&&(s.name===name||(emp.id&&s.empId===emp.id))&&s.status==='Pending');
  let salMsg='';
  if(salRec){
    const grossVal=(salRec.basic||0)+(salRec.allow||0);
    const newDeduct=(salRec.deduct||0)+deductAmt;
    if(newDeduct>grossVal){
      salRec.deduct=grossVal;
      salMsg=` · ${month} salary record updated (deduct capped at gross Rs ${fmt(grossVal)} — net pay Rs 0)`;
    } else {
      salRec.deduct=newDeduct;
      salMsg=` · ${month} salary record updated (deduct: Rs ${fmt(salRec.deduct)})`;
    }
  } else {
    salMsg=` · ${month} — no pending salaries found for that month — apply manually`;
  }
  auditLog('action',`Leave deduction: ${name} ${leaveDays} days Rs ${fmt(deductAmt)}${salMsg}`);
  buildTx();rSalaries();rDash();
  closeMo('leaveDeduct');
  toast(`✅ Leave recorded! Rs ${fmt(deductAmt)} deduction${salRec?' applied to '+month+' salary':' — salary record not found'}`);
}

/* ══════════════════════════════════════════════════════════════════
   FEATURE 3 — BULK SALARY SLIP PRINT
══════════════════════════════════════════════════════════════════ */
function openBulkSlipModal(){
  const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
  const existing=[...new Set(D.salaries.map(s=>s.month).filter(Boolean))].sort(salMonthSort);
  const sel=$('bsMonth');
  if(sel){
    sel.innerHTML='<option value="">-- Select Month --</option>';
    existing.forEach(m=>sel.innerHTML+=`<option value="${m}">${m}</option>`);
    if(SLF.month)sel.value=SLF.month;
  }
  refreshBulkSlipPreview();
  showMo('bulkSlip');
}

function refreshBulkSlipPreview(){
  const month=($('bsMonth')||{}).value;
  const status=($('bsStatus')||{}).value||'';
  const pre=$('bsPreview');const btn=$('bsConfirmBtn');
  if(!pre)return;
  if(!month){pre.innerHTML='<div style="text-align:center;padding:16px;color:var(--s4)">Please select a month</div>';if(btn){btn.disabled=true;btn.textContent='🖨️ Print All Slips';}return;}
  const sals=D.salaries.filter(s=>s.month===month&&(!status||s.status===status));
  const total=sals.reduce((a,s)=>a+netPay(s),0);
  pre.innerHTML=`<div style="background:var(--g0);border:1px solid var(--g1);border-radius:8px;padding:12px 14px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
    <div>
      <div style="font-size:13px;font-weight:700;color:var(--g7)">${sals.length} employee${sals.length!==1?'s':''} ke slips print honge</div>
      <div style="font-size:11px;color:var(--s4);margin-top:2px">Month: ${month} · Total: Rs ${fmt(total)}</div>
    </div>
    <div style="display:flex;gap:6px">${['Paid','Pending'].map(st=>{const c=sals.filter(s=>s.status===st).length;return c>0?`<span style="background:${st==='Paid'?'var(--g1)':'#fef3c7'};color:${st==='Paid'?'var(--g7)':'#92400e'};padding:3px 10px;border-radius:50px;font-size:11px;font-weight:700">${st}: ${c}</span>`:'';}).join('')}</div>
  </div>
  ${sals.length>0?`<div style="border:1px solid var(--s2);border-radius:8px;overflow:hidden;max-height:140px;overflow-y:auto">
    ${sals.map(s=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 12px;border-bottom:1px solid var(--s1);font-size:12px">
      <span><strong>${s.name}</strong> · ${s.desig}</span>
      <span style="font-weight:700">Rs ${fmt(netPay(s))} ${bdg(s.status)}</span>
    </div>`).join('')}
  </div>`:'<div style="text-align:center;padding:20px;color:var(--s4)">No records found for this month/filter</div>'}`;
  if(btn){btn.disabled=sals.length===0;btn.textContent=sals.length>0?`🖨️ Print ${sals.length} Slips`:'No records found';}
}

function printBulkSlips(){
  const month=($('bsMonth')||{}).value;
  const status=($('bsStatus')||{}).value||'';
  if(!month){toast('Please select a month');return;}
  const sals=D.salaries.filter(s=>s.month===month&&(!status||s.status===status));
  if(!sals.length){toast('No salary records found');return;}
  const slipCSS=`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:'Inter',Arial,sans-serif;background:#f1f5f9;padding:16px;}
.slip{width:100%;max-width:640px;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.10);margin:0 auto 32px;page-break-after:always;}
.slip:last-child{page-break-after:auto;}
.hdr{background:linear-gradient(135deg,#0d3b1e 0%,#1a6636 60%,#20954a 100%);padding:18px 22px;display:flex;align-items:center;gap:14px;}
.hdr-logo{width:42px;height:42px;background:rgba(255,255,255,.15);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:900;color:#c9a227;border:2px solid rgba(255,255,255,.2);}
.hdr-info h1{font-size:15px;font-weight:800;color:#fff;margin:0;}
.hdr-info p{font-size:9px;color:rgba(255,255,255,.5);letter-spacing:2px;text-transform:uppercase;margin-top:2px;}
.hdr-badge{margin-left:auto;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);color:#fff;font-size:9px;font-weight:800;letter-spacing:1px;padding:4px 10px;border-radius:50px;white-space:nowrap;}
.emp-row{display:flex;align-items:center;gap:12px;padding:14px 22px;background:#f8fafc;border-bottom:1px solid #e5e7eb;}
.emp-av{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#134a2a,#20954a);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:800;color:#fff;flex-shrink:0;}
.emp-meta h2{font-size:14px;font-weight:700;color:#0d3b1e;}
.emp-meta p{font-size:11px;color:#6b7280;margin-top:1px;}
.body{padding:16px 22px;}
.sec-lbl{font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#9ca3af;margin-bottom:8px;}
.row{display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid #f3f4f6;font-size:12px;}
.row:last-child{border:none;}
.row span{color:#6b7280;}
.row strong{color:#111827;}
.total-bar{background:linear-gradient(135deg,#0d3b1e,#20954a);color:#fff;padding:10px 14px;border-radius:8px;display:flex;justify-content:space-between;align-items:center;margin-top:12px;}
.total-bar .lbl{font-size:11px;font-weight:600;opacity:.8;}
.total-bar .amt{font-size:16px;font-weight:900;}
.status-chip{display:inline-block;padding:2px 10px;border-radius:50px;font-size:9px;font-weight:800;letter-spacing:.5px;text-transform:uppercase;}
.status-paid{background:#dcfce7;color:#15803d;}
.status-pending{background:#fef9c3;color:#a16207;}
.footer{padding:10px 22px;border-top:1px solid #f3f4f6;display:flex;justify-content:space-between;align-items:center;font-size:10px;color:#9ca3af;}
@media print{body{background:#fff;padding:4px;}.np{display:none!important;}}`;

  const slipsHtml=sals.map(s=>{
    const net=netPay(s);
    const emp=D.employees.find(e=>e.name===s.name||(s.empId&&e.id===s.empId))||{};
    const initials=s.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
    return`<div class="slip">
      <div class="hdr">
        <div class="hdr-logo">${getLogoBadgeInner()}</div>
        <div class="hdr-info"><h1>${D.settings.instName}</h1><p>Finance Department · ${D.settings.city}</p></div>
        <div class="hdr-badge">SALARY SLIP</div>
      </div>
      <div class="emp-row">
        <div class="emp-av">${initials}</div>
        <div class="emp-meta">
          <h2>${s.name}</h2>
          <p>${s.desig}${emp.dept?' · '+emp.dept:''} · ${s.empId||emp.id||s.salId}</p>
        </div>
        <span class="status-chip status-${s.status.toLowerCase()}" style="margin-left:auto">${s.status}</span>
      </div>
      <div class="body">
        <div class="sec-lbl">Salary Details — ${s.month}</div>
        <div class="row"><span>Basic Salary</span><strong>Rs ${s.basic.toLocaleString()}</strong></div>
        <div class="row"><span>Allowances</span><strong>Rs ${s.allow.toLocaleString()}</strong></div>
        <div class="row"><span>Gross Salary</span><strong>Rs ${(s.basic+s.allow).toLocaleString()}</strong></div>
        <div class="row"><span style="color:#ef4444">Deductions</span><strong style="color:#ef4444">- Rs ${(s.deduct||0).toLocaleString()}</strong></div>
        <div class="total-bar"><span class="lbl">Net Pay</span><span class="amt">Rs ${net.toLocaleString()}</span></div>
      </div>
      <div class="footer"><span>Generated: ${new Date().toLocaleString()}</span><span>${s.salId||''}</span></div>
    </div>`;
  }).join('');

  const h=`<html><head><meta charset="UTF-8"><title>Salary Slips — ${month}</title><style>${slipCSS}</style></head><body>
    <div class="np" style="background:#fff;padding:14px 20px;margin-bottom:20px;border-radius:10px;display:flex;align-items:center;justify-content:space-between;max-width:640px;margin:0 auto 20px;box-shadow:0 2px 8px rgba(0,0,0,.08)">
      <div><strong style="font-size:14px">Bulk Salary Slips — ${month}</strong><div style="font-size:11px;color:#6b7280;margin-top:2px">${sals.length} employees · Total Rs ${fmt(sals.reduce((a,s)=>a+netPay(s),0))}</div></div>
      <button onclick="window.print()" style="background:#1a6636;color:#fff;border:none;border-radius:8px;padding:8px 18px;font-size:13px;font-weight:700;cursor:pointer">🖨️ Print All</button>
    </div>
    ${slipsHtml}
  </body></html>`;
  closeMo('bulkSlip');
  showPrintPreview(h,'Bulk Salary Slips — '+month);
}

/* ══════════════════════════════════════════════════════════════════
   FEATURE 4 — PENDING SALARY DASHBOARD ALERT
══════════════════════════════════════════════════════════════════ */
function renderPendingSalAlert(){
  const container=$('db-pending-sal-alert');
  if(!container)return;
  const today=new Date();
  const curMonth=getCurrentMonthLabel();
  const lastDayOfMonth=new Date(today.getFullYear(),today.getMonth()+1,0).getDate();
  const daysLeft=lastDayOfMonth-today.getDate();
  const pendingSals=D.salaries.filter(s=>s.status==='Pending');
  const curMonthPending=pendingSals.filter(s=>s.month===curMonth);
  const otherPending=pendingSals.filter(s=>s.month!==curMonth);
  if(pendingSals.length===0){container.style.display='none';return;}
  container.style.display='block';
  const isMonthEnd=daysLeft<=5;
  const urgentColor=isMonthEnd?'#b91c1c':'#92400e';
  const urgentBg=isMonthEnd?'#fff1f1':'#fffbeb';
  const urgentBorder=isMonthEnd?'#fca5a5':'#fcd34d';
  container.innerHTML=`
    <div style="background:${urgentBg};border:1.5px solid ${urgentBorder};border-radius:var(--rad);padding:16px 18px;display:flex;align-items:flex-start;gap:14px;flex-wrap:wrap">
      <div style="width:38px;height:38px;border-radius:9px;background:${isMonthEnd?'#fee2e2':'#fef3c7'};display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">${isMonthEnd?'🚨':'⚠️'}</div>
      <div style="flex:1;min-width:200px">
        <div style="font-size:14px;font-weight:700;color:${urgentColor}">
          ${isMonthEnd?`Month end alert — ${daysLeft} din bache hain!`:'Pending Salary Alert'}
        </div>
        <div style="font-size:12px;color:var(--s5);margin-top:4px;line-height:1.7">
          ${curMonthPending.length>0?`<span style="font-weight:600;color:${urgentColor}">📅 ${curMonth}:</span> ${curMonthPending.length} employee${curMonthPending.length!==1?'s':''} ki salary pending — Rs ${fmt(curMonthPending.reduce((a,s)=>a+netPay(s),0))}<br>`:''}
          ${otherPending.length>0?`<span style="font-weight:600;color:var(--s5)">📂 Previous months:</span> ${otherPending.length} pending — Rs ${fmt(otherPending.reduce((a,s)=>a+netPay(s),0))}`:''}
        </div>
        <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
          <button class="btn btn-green" style="font-size:12px;padding:6px 14px" onclick="goTo('salaries',document.querySelector('.ni[onclick*=salaries]'))">💰 View Salaries</button>
          <button class="btn" style="font-size:12px;padding:6px 14px;background:#fef3c7;color:#92400e;border-color:#fcd34d" onclick="openProcessAllModal();goTo('salaries',document.querySelector('.ni[onclick*=salaries]'))">✅ Process Now</button>
          ${curMonthPending.length>0?`<div style="font-size:11px;color:var(--s4);align-self:center">${curMonthPending.map(s=>s.name.split(' ')[0]).slice(0,4).join(', ')}${curMonthPending.length>4?' +more':''}</div>`:''}
        </div>
      </div>
    </div>`;
}
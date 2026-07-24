type FormData = Record<string, string>;

export function calcScore(data: FormData): { score: number; max: number; level: string; color: string } {
  let score = 0;

  // Urgencia (0–4 pts)
  if (data.urgencia?.includes("ya") || data.urgencia?.includes("prioridad")) score += 4;
  else if (data.urgencia?.includes("este mes") || data.urgencia?.includes("arrancar")) score += 3;
  else if (data.urgencia?.includes("próximos")) score += 2;
  else if (data.urgencia) score += 1;

  // Presupuesto (0–4 pts)
  if (data.presupuesto?.includes("tengo presupuesto")) score += 4;
  else if (data.presupuesto?.includes("tiene sentido")) score += 3;
  else if (data.presupuesto?.includes("Depende")) score += 2;
  else score += 0;

  // Presencia en redes — más bajo = más necesita (0–3 pts)
  if (data.presenciaRedes?.includes("irregular")) score += 2;
  else if (data.presenciaRedes?.includes("casi no") || data.presenciaRedes?.includes("No tengo")) score += 3;
  else score += 0;

  // Estrategia — sin estrategia = más necesita (0–3 pts)
  if (data.estrategia?.includes("sin una estrategia") || data.estrategia?.includes("No sé")) score += 3;
  else if (data.estrategia?.includes("No publico")) score += 2;
  else score += 0;

  // Identidad visual — sin identidad = más necesita (0–2 pts)
  if (data.identidadVisual?.includes("No tengo")) score += 2;
  else if (data.identidadVisual?.includes("no es consistente")) score += 1;

  const max = 16;

  let level = "Ordenado";
  let color = "#6b7280";
  if (score >= 14) { level = "Crítico"; color = "#ef4444"; }
  else if (score >= 10) { level = "Desorganizado"; color = "#f59e0b"; }
  else if (score >= 6) { level = "En proceso"; color = "#3b82f6"; }
  else { level = "Ordenado"; color = "#22c55e"; }

  return { score, max, level, color };
}

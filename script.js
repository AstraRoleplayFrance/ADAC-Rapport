async function sendAdacToDiscord() {
  const webhookURL = "https://discord.com/api/webhooks/1300818426142527619/cqh1Xn4Lwep27zEQLdm9R85kM2-vCVYzhNp3IMEolTaMYzBAu4pVXzJd_KhfoFAJsMcq";

  const agent = document.getElementById("agent_adac").value;
  const badge = document.getElementById("badge_adac").value;
  const lieu = document.getElementById("lieu_adac").value;
  const date = document.getElementById("date_adac").value;
  const telephone = document.getElementById("telephone_adac").value;
  const typePanne = document.getElementById("type_panne").value;
  const description = document.getElementById("description_adac").value;

  if (!agent || !badge || !lieu || !date || !telephone || !typePanne || !description) {
    alert("Veuillez remplir tous les champs obligatoires.");
    return;
  }

  const data = {
    content: `📝 **Rapport Intervention ADAC** - Astra Roleplay V2 📝\n\n` +
             `🛠️ **Technicien:** ${agent}\n` +
             `🆔 **Badge:** ${badge}\n` +
             `📍 **Lieu:** ${lieu}\n` +
             `📅 **Date:** ${date}\n` +
             `📞 **Téléphone:** ${telephone}\n` +
             `🔧 **Type de Panne:** ${typePanne}\n` +
             `📋 **Description:** ${description}\n\n` +
             `✅ **Rapport envoyé avec succès !**`
  };

  try {
    const response = await fetch(webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Rapport envoyé avec succès !");
      document.getElementById("adacForm").reset();
    } else {
      alert("Erreur lors de l'envoi du rapport.");
    }
  } catch (error) {
    console.error("Erreur:", error);
    alert("Une erreur est survenue.");
  }
}

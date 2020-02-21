package com.secusociale.portail.web.rest.attestation;

import javax.xml.bind.JAXBException;
import javax.xml.ws.Holder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.secusociale.portail.service.attestation.DemandeAttestationService;
import com.secusociale.portail.service.soap.demandeAttestationReguralite.CmGetAttestationRegularite;
import com.secusociale.portail.service.soap.demandeAttestationReguralite.CmGetAttestationRegulariteFault;

@RestController
@RequestMapping("/api")
public class DemandeAttestationRegulariteResource {
	
	@Autowired
	private DemandeAttestationService demandeAttestationService ;
	
	@Value("${jhipster.clientApp.name}")
    private String applicationName;
	
	
	/**
     * {@code GET  /attestation/:typeIdentifiant/:identifiant} : get the "idDossier " declaration.
     *
     * @param typeIdentifiant the Identifiant Type of the employer .
     * @param identifiant the ID  of the employer to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the declaration, or with status {@code 404 (Not Found)}.
	 * @throws CmGetAttestationRegulariteFault 
	 * @throws JAXBException 
     */

	@GetMapping("/attestation/{typeIdentifiant}/{identifiant}")
	
	Holder<CmGetAttestationRegularite> getStatutDossier(@PathVariable String typeIdentifiant , @PathVariable String identifiant) throws JAXBException, CmGetAttestationRegulariteFault{
		
		Holder<CmGetAttestationRegularite>  cmGetAttestationRegularite = new Holder<CmGetAttestationRegularite>();
		
		cmGetAttestationRegularite = demandeAttestationService.getStatutDossier(typeIdentifiant, identifiant);
 
		return cmGetAttestationRegularite;
		

		
	}

}
